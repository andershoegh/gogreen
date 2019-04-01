import React, { Component } from 'react';
import './App.css';
import SmallCard from '../src/Components/SmallCard/SmallCard';
import WideCard from './Components/WideCard/WideCard';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<SmallCard />
				</div>
				<div>
					<WideCard />
				</div>
			</div>
		);
	}
}
export default App;
