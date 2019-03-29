import React from 'react';
import './TileDashboard.scss';
import '../IndividualGraph/individualgraph';
import IndividualGraph from '../IndividualGraph/individualgraph';

const TileDashboard = () => {
	return (
		<div className="tile">
			<IndividualGraph />
		</div>
	);
};

export default TileDashboard;
