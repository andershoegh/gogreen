import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IndividualGraph from "./../IndividualGraph/individualgraph";
import Typography from "@material-ui/core/Typography";

const styles = {
  card: {
    width: "154px",
    height: "154px",
    textAlign: "center",
    padding: "0px",
    margin: "11px",
    align: "center",
    textDecoration: "none"
  },
  p: {
    paddingBottom: "12px"
  },
  a: {
    textDecoration: "none"
  }
};

function SmallCard(props) {
  const { classes, header, tileContent } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="p" className={classes.p}>
          {header}
        </Typography>
        {tileContent}
      </CardContent>
      <CardActions />
    </Card>
  );
}

SmallCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmallCard);
