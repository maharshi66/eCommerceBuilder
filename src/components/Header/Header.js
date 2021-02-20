import React from 'react';
import tachyons from 'tachyons';
import NavigationUnregistered from '../Navigation/NavigationUnregistered';
import NavigationRegistered from '../Navigation/NavigationRegistered';

class Header extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		const isSignedIn = this.props.isSignedIn;
		const handleGettingStarted = this.props.handleGettingStarted;
		const handleLogoClicked = this.props.handleLogoClicked;
		const isGettingStarted = this.props.isGettingStarted;
		return (
			<div className="w-100 pa3 ph5-ns bg-washed-blue">
	            <div className="db dt-ns mw9 center w-100">
	              <div className="db dtc-ns v-mid tl w-50">
	                <a onClick={handleLogoClicked} className="dib f4 f1-ns fw4 mt0 mb1 link purple titleText pointer" >Purplish</a>
				 </div>
				 {isSignedIn
					? <NavigationRegistered />
				    : <NavigationUnregistered isGettingStarted={isGettingStarted} handleGettingStarted={handleGettingStarted}/>
				 }           
	            </div>
	        </div>
		);
	}
}

export default Header;