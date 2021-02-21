import React from 'react';
import tachyons from 'tachyons';
import firebase from 'firebase';
import SignIn from '../SignIn/SignIn';
import webShoppingSVG from '../../images/web_shopping.svg';
import addToCardSVG from '../../images/add_to_cart.svg';
import walletSVG from '../../images/wallet.svg';
import dashboardSVG from '../../images/dashboard.svg';

class Body extends React.Component{
	constructor(props) {
		super(props);
	}
	
	render() {
		const {isSignedIn, isGettingStarted} = this.props;
		let body; 
		if(isSignedIn){ 
			body =
			<h1 className="vh-75 overflow-x-auto">
				Welcome, {firebase.auth().currentUser.displayName}
			</h1>			
	    }
	    else if(isGettingStarted){
			body = 		
				<div className="vh-75">
					<SignIn className="mw6-ns pa2 mt5 center shadow-1"/>
				</div>
		}else {
			body = 			
				<div class="cf pa4-l w-100-ns bg-white vh-75 overflow-x-auto mb2">			  
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mb2">
				      <div class="bg-white pv1 mb3 mb5-ns">
				      	<h1 className="f3 f1-ns tc">Build stores rapidly</h1> 
				      </div>
					  <div class="bg-white pv4 h5">
					  	<img className="w-100 h5" src={webShoppingSVG} alt="webShoppingSVG" />
					  </div>
				    </div>
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mt2 mb2">
				      <div class="bg-white pv4 mb3 mb5-ns h5">
				      	<img className="w-100 h5" src={addToCardSVG} alt="addToCardSVG" />
				      </div>
				      <div class="bg-white pv1">
				      <h1 className="f3 f1-ns tc">Build stores rapidly</h1>
				      </div>
				    </div>
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mb2 mt2">
				      <div class="bg-white pv1 mb3 mb5-ns">
				      	<h1 className="f3 f1-ns tc">Build stores rapidly</h1> 
				      </div>
					  <div class="bg-white pv4 h5">
					  	<img className="w-100 h5" src={walletSVG} alt="walletSVG" />
					  </div>
				    </div>
				    <div class="fl w-100 w-50-ns h-75 h-100-ns pa2 mt2">
				      <div class="bg-white pv4 mb3 mb5-ns h5">
				      	<img className="w-100 h5" src={dashboardSVG} alt="dashboardSVG" />
				      </div>
				      <div class="bg-white center pv1">
					      <h1 className="f3 f1-ns tc">Build stores rapidly</h1>
				      </div>
				    </div>
				</div>
		}
		return (
			<div className="center">	
				{body}
			</div>
		);
	}
}

export default Body;