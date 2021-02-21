import React from 'react';
import tachyons from 'tachyons';
import './Navigation.css'
import firebase from 'firebase';
const NavigationRegistered = () => {
	return (
		<nav className="flex w-100 w-50-ns justify-start justify-end-ns">
	      <a title="Explore Stores" href="#" className="f6 fw6 hover-purple link black-70 mr2 mr3-m mr4-l dib pointer">
	        Explore Stores
	      </a>
	      <a title="" href="#" className="f6 fw6 hover-purple link black-70  mr2 mr3-m mr4-l dib pointer v-mid">
	        Dashboard
	      </a>
	      <a title="Sign Out" onClick={() => firebase.auth().signOut()} className="f6 fw6 hover-purple link black-70 mr2 mr3-m mr4-l dib pointer">
	        Sign Out
	      </a>
	  	<img
	      src={firebase.auth().currentUser.photoURL}
	      className="br-100 h2 w2 dib" alt="avatar" />
		</nav>           
	);
}

export default NavigationRegistered;
