import React from 'react';
import tachyons from 'tachyons';
import './Navigation.css'
import firebase from 'firebase';
import { stack as Menu } from 'react-burger-menu'

class InlineNav extends React.Component {
	render() {
		return (
			<nav id="navigationLinks" className="flex w-100 w-50-ns v-mid justify-end justify-end-ns">
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
}

class SideNav extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu className="bm" 
      		right
			disableAutoFocus
			noOverlay
      		isOpen={ false }>
		  <img className="pointer"
		    src={firebase.auth().currentUser.photoURL}
	        className="br-100 h2 w2" alt="avatar" />
	      <a title="Explore Stores" href="#" className="menu-item no-underline pointer pa3">
	        Explore Stores
	      </a>
	      <a title="" href="#" className="menu-item no-underline pointer pa3">
	        Dashboard
	      </a>
      	  <a onClick={ this.showSettings } 
      	  	 className="menu-item--small no-underline pa3" href="">Settings
      	  </a>
	      <a title="Sign Out" onClick={() => firebase.auth().signOut()} className="menu-item no-underline purple pointer pa3">
	        Sign Out
	      </a>
    </Menu>
    );
  }
}

class NavigationRegistered extends React.Component {
	constructor(props){
		super(props);
        this.state = {
            layoutMode: this.getLayoutMode(),
        };
        this.onResize = this.onResize.bind(this);
	}
  
  	 componentDidMount() {
        window.addEventListener('resize', this.onResize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onResize);
    }

    onResize() {
        this.setState({
            layoutMode: this.getLayoutMode(),
        });
    }

    getLayoutMode() {
        return window.innerWidth > 1000 ?
            'desktop'
            : 'mobile';
    }
    render(){
		return (
			this.state.layoutMode === 'mobile'
			? (<SideNav />)
			: (<InlineNav /> )
		);
	}
}

export default NavigationRegistered;