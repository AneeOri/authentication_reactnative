import { useSelector, useDispatch } from 'react-redux';
import Login from '../components/AuthFlow/Login';
import SignUp from '../components/AuthFlow/SignUp';
import { setAuthState } from '../features/auth/auth';


export default function Auth(){
    const {authState} = useSelector(state => state.auth);  /**extract authstate using hook useselector eccess state and from state access auth .. brings SignIn indeed the actual state value*/
    console.log(authState);
    return(
         <>
         </>
    );
}