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

  render()
  {
	 return (
        <StyledFirebaseAuth 
	    		uiConfig={this.uiConfig}
	    		firebaseAuth={firebase.auth()}/>
	 );
	}
}
export default SignIn;
