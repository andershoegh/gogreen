import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Row, Col } from "react-grid-system";

const styles = {
  card: {
    width: "316px",
    height: "180px",
    textAlign: "left",
    padding: "0px",
    margin: "10px auto"
  },
  p: {
    paddingBottom: "12px"
  },
  graphText: {
    paddingTop: "25px"
  }
};

function WideCard(props) {
  const { classes, header, graph } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Row>
          <Col xs={12}>
            <Typography component="p" className={classes.p}>
              {header}
            </Typography>
          </Col>
        </Row>
        <Row>
          <Col xs={6}>
            {graph}
          </Col>
        </Row>
      </CardContent>
      <CardActions />
    </Card>
  );
}

WideCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(WideCard);
