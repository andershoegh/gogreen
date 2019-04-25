import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Carousel from "../Components/Carousel/Carousel";
import { Container } from "react-grid-system";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import axios from "axios";
import PopUp from "../Components/PopUp/PopUp";
import "antd/dist/antd.css";
import "./Products.css";

moment.fn.roundNext5Min = function() {
  let intervals = Math.floor(this.minutes() / 5);
  if (this.minutes() % 5 !== 0) intervals++;
  if (intervals === 12) {
    this.add(1, "hours");
    intervals = 0;
  }
  this.minutes(intervals * 5);
  this.seconds(0);
  return this;
};

class Products extends Component {
  state = {
    date: moment().format("YYYY-MM-DD"),
    timeStart: moment()
      .roundNext5Min()
      .format("HH:mm"),
    timeEnd: moment()
      .roundNext5Min()
      .add(2, "hours")
      .format("HH:mm"),
    product: "washingMachine",
    percentGreen: null,
    productPercent: 0,
    showPopUp: false,
    popUpText: ""
  };

  componentDidUpdate(oldProps) {
    const newProps = this.props;
    if (
      oldProps !== newProps &&
      newProps.user !== undefined &&
      newProps.user.data !== undefined &&
      newProps.user !== oldProps.user
    ) {
      this.handleSlide(0);
    }
  }

  togglePopUp() {
    this.setState({
      showPopUp: !this.state.showPopUp
    });
  }

  handleDateChange = (date, dateString) => {
    this.setState(
      {
        date: date.format("YYYY-MM-DD")
      },
      this.axiosGetGreenEnergy
    );
  };

  axiosGetGreenEnergy = () => {
    axios
      .get("https://go-greener.herokuapp.com/howGreenInTimePeriod", {
        params: {
          startTime: this.state.timeStart,
          endTime: this.state.timeEnd,
          date: this.state.date
        }
      })
      .then(res => {
        this.setState({
          percentGreen: Math.round(res.data.percentGreen)
        });
      })
      .catch(function(err) {
        console.log("Now in catch");
        console.log("Something went wrong  " + err.message);
      });
  };

  handleTimeChange = (time, timeString, id) => {
    this.setState(
      {
        ["time" + id]: time.format("HH:mm")
      },
      this.axiosGetGreenEnergy
    );
  };

  handleSubmit = e => {
    e.preventDefault();

    this.togglePopUp();

    if (this.state.timeStart >= this.state.timeEnd) {
      this.setState({
        popUpText:
          "Starttidspunktet du har valgt, er senere end sluttidspunktet. Venligst ændre det og prøv igen."
      });
      return null;
    } else {
      this.setState({ popUpText: "Vent venligst..." });
    }

    const formattedTimeStart = this.state.date + " " + this.state.timeStart;
    const formattedTimeEnd = this.state.date + " " + this.state.timeEnd;

    axios
      .post(
        "https://go-greener.herokuapp.com/log",
        { myData: {} },
        {
          params: {
            startTime: formattedTimeStart,
            endTime: formattedTimeEnd,
            id: this.props.authUser.uid,
            product: this.state.product
          }
        }
      )
      .then(res => {
        this.setState({
          popUpText: res.data.msg
        });
      })
      .catch(err => {
        this.setState({
          popUpText:
            "Der var problemer med at oprette forbindelse til serveren... Prøv igen."
        });
      });
  };

  handleSlide = product => {
    const products = [
      "washingMachine",
      "dryer",
      "vacuum",
      "entertainment",
      "dishwasher"
    ];

    const greenEnergy = this.props.user.data.products[products[product]][
      "greenEnergy"
    ];
    const totalEnergy = this.props.user.data.products[products[product]][
      "totalEnergy"
    ];

    if (greenEnergy !== 0) {
      this.setState({
        product: products[product],
        productPercent: ((greenEnergy / totalEnergy) * 100).toFixed(0)
      });
    } else {
      this.setState({
        product: products[product],
        productPercent: 0
      });
    }

    this.setState({
      product: products[product]
    });
  };

  getDisabledEndHours = () => {
    let hours = [];
    for (let i = 0; i < moment(this.state.timeStart, "HH:mm").hour(); i++) {
      hours.push(i);
    }
    return hours;
  };

  getDisabledEndMinutes = selectedHour => {
    let minutes = [];
    if (selectedHour === moment(this.state.timeStart, "HH:mm").hour()) {
      for (
        let i = 0;
        i <= moment(this.state.timeStart, "HH:mm").minute();
        i += 5
      ) {
        minutes.push(i);
      }
    }
    return minutes;
  };

  getDisabledStartHours = () => {
    let hours = [];
    for (let i = 24; i > moment(this.state.timeEnd, "HH:mm").hour(); i--) {
      hours.push(i);
    }
    return hours;
  };

  getDisabledStartMinutes = selectedHour => {
    let minutes = [];
    if (selectedHour === moment(this.state.timeEnd, "HH:mm").hour()) {
      for (
        let i = 60;
        i >= moment(this.state.timeEnd, "HH:mm").minute();
        i -= 5
      ) {
        minutes.push(i);
      }
    }
    return minutes;
  };

  componentDidMount() {
    this.axiosGetGreenEnergy();

    if (this.state.timeStart >= moment().format("HH:mm")) {
      this.setState({ timeEnd: moment("23:55", "HH:mm").format("HH:mm") });
    }
    if (this.props.user) {
      this.handleSlide(0);
    }
  }

  render() {
    const color = this.props.isGreen ? "circleGreen" : "circleRed";
    if (this.props.authUser) {
      document.body.style.backgroundImage = ``;
      return (
        <Container className="wrapper">
          <div className={`circle ${color}`} />

          <div className="caro-wrapper">
            <Carousel handleSlide={this.handleSlide} />
          </div>

          <div className="formWrapper">
            <form onSubmit={this.handleSubmit}>
              <div className="datepicker-wrapper">
                <span className="formSpan">Dato:</span>
                <DatePicker
                  defaultValue={moment()}
                  format="DD / MM - YYYY"
                  disabledDate={current => {
                    return current > moment();
                  }}
                  onChange={(date, dateString) =>
                    this.handleDateChange(date, dateString)
                  }
                />
              </div>
              <div className="timepicker-wrapper">
                <div className="timepicker-item">
                  <span className="formSpan">Fra:</span>
                  <TimePicker
                    value={moment(this.state.timeStart, "HH:mm")}
                    format="HH:mm"
                    minuteStep={5}
                    disabledHours={() => this.getDisabledStartHours()}
                    disabledMinutes={selectedHour =>
                      this.getDisabledStartMinutes(selectedHour)
                    }
                    onChange={(time, timeString) =>
                      this.handleTimeChange(time, timeString, "Start")
                    }
                    inputReadOnly
                  />
                </div>
                <div className="timepicker-item">
                  <span className="formSpan">Til:</span>
                  <TimePicker
                    value={moment(this.state.timeEnd, "HH:mm")}
                    format="HH:mm"
                    minuteStep={5}
                    disabledHours={() => this.getDisabledEndHours()}
                    disabledMinutes={selectedHour =>
                      this.getDisabledEndMinutes(selectedHour)
                    }
                    onChange={(time, timeString) =>
                      this.handleTimeChange(time, timeString, "End")
                    }
                    inputReadOnly
                  />
                </div>
              </div>

              <div className="productInfo">
                <div className="infoRow">
                  <div className="hexa">
                    <p>{this.state.percentGreen}%</p>
                  </div>
                  <div className="hexaText">
                    <p>Procentvis grøn strøm der bruges i dette tidsrum</p>
                  </div>
                </div>

                <div className="infoRow">
                  <div className="hexa">
                    <p>{this.state.productPercent}%</p>
                  </div>
                  <div className="hexaText">
                    <p>Dit gennemsnitlige grønne el forbrug for støvsuger</p>
                  </div>
                </div>
              </div>

              <div className="bt-wrapper">
                <button className="btn-large pink lighten-1 z-depth-0">
                  Log
                </button>
              </div>
            </form>
            {this.state.showPopUp ? (
              <PopUp
                text={this.state.popUpText}
                closePopUp={this.togglePopUp.bind(this)}
              />
            ) : null}
          </div>
        </Container>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default Products;
