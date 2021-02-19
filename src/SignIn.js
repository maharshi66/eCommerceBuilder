import './SignIn.css';
import React from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
	
class SignIn extends React.Component {
  uiConfig =  {
  	signInFlow: 'popup',
  	signInOptions: [
  		firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  		firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  		firebase.auth.EmailAuthProvider.PROVIDER_ID,
  		],
  		callbacks: {
  			signInSuccess: () => false
  		}
  }

  componentDidMount = () => {
  	firebase.auth().onAuthStateChanged(user => {
  		this.setState({isSignedIn: !!user});
  	});
  }

  constructor(props){
  	super(props);
  	this.state = {
  		isSignedIn: false,
  	}
  }

  render()
  {
	return (
	    <div>
		    {this.state.isSignedIn 
		    	? ( <div>
		    		Signed In!
		    		<button onClick={() =>firebase.auth().signOut()}>
		    			Sign Out
		    		</button>
		    		<h1>
		    			Welcome, {firebase.auth().currentUser.displayName}!
		    		</h1>
		    		<img src={firebase.auth().currentUser.photoURL} alt="" />
		    	  </div> )
		    	: ( <StyledFirebaseAuth 
		    		uiConfig={this.uiConfig}
		    		firebaseAuth={firebase.auth()}
		    	/>)
		    }    
	    </div>
	);
	}
}
export default SignIn;
