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
			<header className="w-100 pa3 ph5-ns bg-light-gray">
	            <div className="flex flex-wrap flex-nowrap-ns items-center mw9 center w-100">
	              <div className="flex items-center w-100 w-50-ns mb2 mb0-ns">
	                <a onClick={handleLogoClicked} className="nowrap dib f4 f3-ns fw4 mt0 mb1 link purple pointer">
		                <span className="titleText">Purplish</span>
		                <div className="dib">
						 	<small className="nowrap pl2 pr2 mt2 mt-3-ns f7 black-70">Blazing Fast e-Commerce</small>
					 	</div>
				 	</a>
				  </div>
					{isSignedIn
					? <NavigationRegistered className="flex items-center w-100-ns justify-start justify-end-ns" />
				    : <NavigationUnregistered className="flex items-center w-50 w-100-ns justify-start justify-end-ns"
				     	isGettingStarted={isGettingStarted} 
				     	handleGettingStarted={handleGettingStarted}/>
				 	}  
	            </div>
	        </header>
		);
	}
}

export default Header;