import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Carousel from "../Components/Carousel/Carousel";
import { Container, Row } from "react-grid-system";
import { DatePicker, TimePicker } from "antd";
import moment from "moment";
import axios from "axios";
import "antd/dist/antd.css";

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
    product: "washer"
  };

  handleDateChange = (date, dateString) => {
    this.setState({
      date: date.format("YYYY-MM-DD")
    });
  };

  handleTimeChange = (time, timeString, id) => {
    this.setState({
      ["time" + id]: time.format("HH:mm")
    });
  };

  handleSubmit = e => {
    e.preventDefault();
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
      .then(function(res) {
        console.log(res.data);
      })
      .catch(function(err) {
        console.log("Something went wrong  " + err.message);
      });
  };

  handleSlide = product => {
    const products = ["washer", "oven", "vacuum"];

    this.setState({
      product: products[product]
    });
  };

  render() {
    const color = this.props.isGreen ? "circleGreen" : "circleRed";
    if (this.props.authUser) {
      document.body.style.backgroundImage = ``;
      return (
        <div>
          <div className={`circle ${color}`} />
          <Container>
            <Row style={{ justifyContent: "center" }}>
              <Carousel handleSlide={this.handleSlide} />
            </Row>
          </Container>

          <form onSubmit={this.handleSubmit}>
            <label htmlFor="name">date:</label>
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

            <TimePicker
              id="timeStart"
              defaultValue={moment(this.state.timeStart, "HH:mm")}
              format="HH:mm"
              minuteStep={5}
              onChange={(time, timeString) =>
                this.handleTimeChange(time, timeString, "Start")
              }
            />

            <TimePicker
              defaultValue={moment(this.state.timeEnd, "HH:mm")}
              format="HH:mm"
              minuteStep={5}
              onChange={(time, timeString) =>
                this.handleTimeChange(time, timeString, "End")
              }
            />
            <button>Log</button>
          </form>
        </div>
      );
    } else {
      return <Redirect to="/signin" />;
    }
  }
}

export default Products;
