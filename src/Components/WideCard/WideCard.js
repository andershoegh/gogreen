import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CommunityGraph from './../CommunityGraph/CommunityGraph';
import Typography from '@material-ui/core/Typography';
import { Container, Row, Col } from 'react-grid-system';

const styles = {
	card: {
		width: '316px',
		height: '180px',
		textAlign: 'left',
		padding: '0px'
	},
	p: {
		paddingBottom: '12px'
	},
	graphText: {
		paddingTop: '25px'
	}
};

function WideCard(props) {
	const { classes } = props;

	return (
		<Card className={classes.card}>
			<CardContent>
				<Row>
					<Col xs={12}>
						<Typography component="p" className={classes.p}>
							Green Electricity consumption
						</Typography>
					</Col>
				</Row>
				<Row>
					<Col xs={6} className>
						<CommunityGraph />
					</Col>
					<Col xs={6}>
						<Typography className={classes.graphText}>60% of the electricity you use is green.</Typography>
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
