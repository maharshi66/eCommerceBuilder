import React from 'react';
import tachyons from 'tachyons';
import SignIn from '../SignIn/SignIn'
import './Navigation.css'

class NavigationUnregistered extends React.Component{
	constructor(props) {
		super(props);		
	}
	render(){
		return (
			<nav className="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
			{!this.props.isGettingStarted 
				?	<button onClick={this.props.handleGettingStarted} 
						className="f6 link br3 ph3 pv2 mb2 dib white bg-purple fw6">Get Started
						</button> 
				: null
			}
		    </nav>
		);
	}
}

export default NavigationUnregistered;
