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


export default function Auth(){
    const dispatch = useDispatch();
    const {authState} = useSelector(state => state.auth);  /**extract authstate using hook useselector eccess state and from state access auth .. brings SignIn indeed the actual state value*/
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    console.log(authState);
    //navigation is controlled by state, depending whats in authState render a component

    const onLogin = () => {

    }
    return(
         <>
         {authState == 'signIn' && <Login/>}
         {authState == 'signUp' && <SignUp/>}
         </>
    );
}