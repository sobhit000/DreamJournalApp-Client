import React from 'react';
import {Link} from 'react-router-dom';

import './navbar.css'

export default class Navbar extends React.Component {
	render () {
		return (
				<div className="navbar">
					<nav><Link to="/dashboard">Nav</Link></nav>
				</div>
			);
	}
}