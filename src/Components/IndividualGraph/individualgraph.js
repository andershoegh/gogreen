import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import P from './../P/P';

const IndividualGraph = () => {
	// This comp contains dummy data - should be replaced by connection with DB
	const legendOptions = {
		visibility: false
	};
	const data = {
		labels: [ 'Red', 'Green', 'Yellow' ],
		datasets: [
			{
				data: [ 300, 50, 100 ],
				backgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ],
				hoverBackgroundColor: [ '#FF6384', '#36A2EB', '#FFCE56' ]
			}
		]
	};

	return (
		<div>
			<P>My usage data</P>
			<Doughnut data={data} legend={legendOptions} />
		</div>
	);
};

export default IndividualGraph;
