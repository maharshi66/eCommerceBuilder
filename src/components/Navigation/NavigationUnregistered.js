import React from 'react';
import tachyons from 'tachyons';
import SignIn from '../SignIn/SignIn'
import './Navigation.css'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavigationUnregistered extends React.Component{
	constructor(props) {
		super(props);		
	}
	render(){
		return (
			<nav className="flex w-100 w-50-ns justify-end justify-end-ns absolute right-2">
			{!this.props.isGettingStarted 
				?	<button onClick={this.props.handleGettingStarted} 
						className="f6 link br3 ph3 pv2 mb2 ml5 dib white bg-purple fw6 pointer">Get Started
						</button> 
				: <div className="ph3 pv2 mb2 ml5"></div>
			}
		    </nav>
		);
	}
}

export default NavigationUnregistered;