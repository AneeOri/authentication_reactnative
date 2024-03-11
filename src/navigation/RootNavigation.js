import { NavigationContainer } from "@react-navigation/native";
import AuthStack from './AuthStack';
import { useSelector, useDispatch } from "react-redux";
import { restoreToken } from "../features/auth/auth";
import { useEffect } from "react";
import Splash from "../screens/Splash";
import AsyncStorage from "@react-native-async-storage/async-storage";

 export default function RootNavigator() {  
   const {userToken, isLoading} = useSelector(state => state.auth);
   const dispatch = useDispatch();

   useEffect(() => {
    getValue();
   },[]);

   async function getValue() { 
    try {
         const value = await AsyncStorage.getItem('@token');
         if(value!== null){
            console.log('data restored', value);
            dispatch(restoreToken(value));
         }else{
            console.log('no data');
            dispatch(restoreToken(null));
         }
    } catch (error) {
        console.log(error);
    }
    }
    if(isLoading) return <Splash/>;
    return(
        <NavigationContainer> 
            <AuthStack/>
        </NavigationContainer>
    );
} 