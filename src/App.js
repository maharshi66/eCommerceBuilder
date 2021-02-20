import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
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
	return (
		<div>
			<Header isSignedIn={this.state.isSignedIn} handleLogoClicked={this.handleLogoClicked} handleGettingStarted={this.handleGettingStarted} isGettingStarted={this.state.isGettingStarted}/>
			<Body isSignedIn={this.state.isSignedIn} isGettingStarted={this.state.isGettingStarted} />
		</div>
	);
  }
}

export default App;