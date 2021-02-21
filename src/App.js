import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import firebase from 'firebase';
import tachyons from 'tachyons';

class App extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
		isSignedIn: false,
		isGettingStarted: false
	}
  }

  componentDidMount = () => {
  	firebase.auth().onAuthStateChanged(user => {
  		this.setState({isSignedIn: !!user});
  	});
  }

  handleLogoClicked = () =>{
  	if(this.state.isSignedIn){
  		return;	
  	} 
  	this.setState({isGettingStarted: false});
  }

  handleGettingStarted = () => {
  	this.setState({isGettingStarted: true});
  }
  
  render(){
    const {isSignedIn, isGettingStarted} = this.state;
	return (
		<div className="container">
			<Header isSignedIn={isSignedIn} 
              handleLogoClicked={this.handleLogoClicked} 
              handleGettingStarted={this.handleGettingStarted} 
              isGettingStarted={isGettingStarted}/>
			<Body isSignedIn={isSignedIn} 
            isGettingStarted={isGettingStarted} />
		  <Footer />
    </div>
	);
  }
}

export default App;