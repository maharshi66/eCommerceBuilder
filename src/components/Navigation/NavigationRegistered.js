import React from 'react';
import tachyons from 'tachyons';
import './Navigation.css'

const NavigationRegistered = () => {
	return (
		<nav class="db dtc-ns v-mid w-100 tl tr-ns mt2 mt0-ns">
	      <a title="Explore Stores" href="#" class="f5 fw3 hover-purple link black-70 mr2 mr3-m mr4-l dib">
	        Explore Stores
	      </a>
	      <a title="" href="#" class="f5 fw3 hover-purple link black-70 mr2 mr3-m mr4-l dib">
	        Dashboard
	      </a>
	      <a title="Sign Out" href="#" class="f5 fw3 hover-purple link black-70 mr2 mr3-m mr4-l dn dib-l">
	        Sign Out
	      </a>
		</nav>           
	);
}

export default NavigationRegistered;
