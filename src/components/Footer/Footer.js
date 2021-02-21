import React from 'react';
import tachyons from 'tachyons';
import '../Navigation/Navigation.css'

const Footer = () => {
	return (
		<footer class="bg-light-silver pv1 ph1 ph4-m ph4-l mid-gray left-0 right-0 absolute bottom-0">
		  <small class="f7 db tc">© 2021 <span className="f5 f4-ns titleText">Purplish</span>., All Rights Reserved</small>
		  <div class="tc mt2">
		    <a href="#" title="Language" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Language</a>
		    <a href="#"    title="Terms" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Terms of Use</a>
		    <a href="#"  title="Privacy" class="f7 f6-ns dib ph1 ph2-ns link mid-gray dim">Privacy</a>
		  </div>
		</footer>
	);
}

export default Footer;