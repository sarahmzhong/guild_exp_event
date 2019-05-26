import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';


class Table extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			players: [
				{ ign: 'Aaronis', level: 195, exp: 1235145902374 },
				{ ign: '9009Y9U775', level: 141, exp: 1235346123 },
				{ ign: 'Bonzai', level: 160, exp: 959488234 },
			]
		}
	}

	renderTableData() {
		return this.state.players.map((element, index) => {
			return (
				<tr key={element.ign}>
					<td>{element.ign}</td>
					<td>{element.level}</td>
					<td>{element.exp}</td>
				</tr>
			)
		})
	}


	render() {
		return (
			<div>
				<h1 id='title'>Exp Table</h1>
				<table id='Attackers'>
					<tbody>
						{this.renderTableData()}
					</tbody>
				</table>
			</div>
		)
	}

}



ReactDOM.render(

	<Table />,
	document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
