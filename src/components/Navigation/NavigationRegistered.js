import React from 'react';
import tachyons from 'tachyons';
import './Navigation.css'
import firebase from 'firebase';
const NavigationRegistered = () => {
	return (
		<nav class="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
	      <a title="Explore Stores" href="#" class="f5 fw3 hover-purple link black-70 mr2 mr3-m mr4-l dib pointer">
	        Explore Stores
	      </a>
	      <a title="" href="#" class="f5 fw3 hover-purple link black-70 mr2 mr3-m mr4-l dib pointer">
	        Dashboard
	      </a>
	      <a title="Sign Out" onClick={() => firebase.auth().signOut()} class="f5 fw3 hover-purple link black-70 mr2 mr3-m mr4-l dib pointer">
	        Sign Out
	      </a>
		  	<img
		      src={firebase.auth().currentUser.photoURL}
		      className="br-100 h2 w2 mr2 mr3-m mr4-l dib" alt="avatar" />
		</nav>           
	);
}

export default NavigationRegistered;
