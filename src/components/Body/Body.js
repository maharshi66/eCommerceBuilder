import React from 'react';
import tachyons from 'tachyons';
import firebase from 'firebase';
import SignIn from '../SignIn/SignIn';

class Body extends React.Component{
	constructor(props) {
		super(props);
	}
	render() {
		const {isSignedIn, isGettingStarted} = this.props;
		let body; 
		if(isSignedIn){ 
			body =	<h1>
		    			Welcome, {firebase.auth().currentUser.displayName}
		    		</h1>
	    }
	    else if(isGettingStarted){
			body = <SignIn className="mw6-ns pa2 mt5 center shadow-1"/>
		}else {
			body = <p className="center">Body</p>}
		return (
			<div>	
				{body}
			</div>
		);
	}
}

export default Body;