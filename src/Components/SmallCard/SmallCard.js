import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IndividualGraph from './../IndividualGraph/individualgraph';
import Typography from '@material-ui/core/Typography';
import './SmallCard.scss';

const styles = {
	card: {
		width: '154px',
		height: '154px',
		textAlign: 'center',
		padding: '1px'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	}
};

function SmallCard(props) {
	const { classes } = props;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Typography component="p">My usage data</Typography>
				<IndividualGraph />
			</CardContent>
			<CardActions />
		</Card>
	);
}

SmallCard.propTypes = {
	classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SmallCard);
