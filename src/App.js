import React from 'react';
import SignIn from './components/SignIn/SignIn';
import Header from './components/Header/Header';
import firebase from 'firebase';
import tachyons from 'tachyons';

class App extends React.Component{
  constructor(props){
  	super(props);
  	this.state = {
		isSignedIn: false,
	}
  }

  componentDidMount = () => {
  	firebase.auth().onAuthStateChanged(user => {
  		this.setState({isSignedIn: !!user});
  	});
  }

  render(){
	return (
		<div>
			<Header isSignedIn={this.state.isSignedIn}/>
			<div>
				{this.state.isSignedIn 
					? <div>
			    		Signed In!
			    		<button onClick={() => firebase.auth().signOut()}>
			    			Sign Out
			    		</button>
			    		<h1>
			    			Welcome, {firebase.auth().currentUser.displayName}!
			    		</h1>
			    		<img src={firebase.auth().currentUser.photoURL} alt="" />
			    	  </div> 
					:	<SignIn className="mw6-ns pa2 mt5 center shadow-1"/>
				}
			</div>
		</div>
	);
  }
}

export default App;