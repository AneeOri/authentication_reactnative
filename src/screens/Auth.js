import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/AuthFlow/Login';
import SignUp from '../components/AuthFlow/SignUp';
import { setAuthState } from '../features/auth/auth';
import { auth } from '../firebaseConfig';
import {
    signOut,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useState } from 'react';
import { Alert } from 'react-native';


export default function Auth(){
    const dispatch = useDispatch();
    const {authState} = useSelector(state => state.auth);  /**extract authstate using hook useselector eccess state and from state access auth .. brings SignIn indeed the actual state value*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    console.log(authState);
    //navigation is controlled by state, depending whats in authState render a component

    const onLogin = () => {
      if(email !== '' && password !== ''){
        signInWithEmailAndPassword(auth, email, password)
        .then(user => {
            console.log('Signup success', user);
            alert('Signup success');
            dispatch(setAuthState('signedIn'));
        })
        .catch(err => Alert.alert('Signup error',  err.message));
      }
    };

    const onSignUp = () => {
        if(email !== '' && password !== ''){
          createUserWithEmailAndPassword(auth, email, password)
          .then(user => {
              console.log('login success', user);
              alert('signed in success');
              dispatch(setAuthState('signedIn'));
          })
          .catch(err => Alert.alert('Login error',  err.message));
        }
      };

    const onSignOut = () => {
        signOut(auth).catch(err => console.log(err));
    }; 

    return(
         <>
         {authState == 'signIn' && (
         <Login
           onLogin={onLogin}
           setEmail={setEmail}
           setPassword={setPassword}
         />
         )}
         {authState == 'signUp' && (
         <SignUp
           onSignUp={onSignUp}
           setEmail={setEmail}
           setPassword={setPassword}
         />
         )}
         </>
    );
}