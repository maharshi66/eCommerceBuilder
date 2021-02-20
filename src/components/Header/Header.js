import React from 'react';
import tachyons from 'tachyons';
import NavigationUnregistered from '../Navigation/NavigationUnregistered';
import NavigationRegistered from '../Navigation/NavigationRegistered';

const Header = (props) => {
	const isSignedIn = props.isSignedIn;
	const handleGetStarted = props.handleGetStarted;
	return (
		<div className="w-100 pa3 ph5-ns bg-washed-blue">
            <div className="db dt-ns mw9 center w-100">
              <div className="db dtc-ns v-mid tl w-50">
                <a className="dib f4 f1-ns fw4 mt0 mb1 link purple titleText">Purplish</a>
			 </div>
			 {isSignedIn
				? <NavigationRegistered />
			    : <NavigationUnregistered />
			 }           
            </div>
        </div>
	);
}

export default Header;