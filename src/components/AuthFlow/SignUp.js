import { View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import { UseDispatch, useDispatch } from "react-redux";
import { setAuthState } from "../../features/auth/auth";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import { useNavigation } from "@react-navigation/native";

export default function SignUp({
    onSignUp,
    setEmail,
    setPassword
}){
    const navigation = useNavigation();
    const dispatch = useDispatch();
    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={'Email'} onChangeText={setEmail}/>
      <MyInput label={'Password'} secureTextEntry onChangeText={setPassword}/>
      <MyButton title={'SignUp'} onPress={onSignUp}/>
      <Button title={'Sign In'} onPress={() => dispatch(setAuthState('signIn'))}/>
     </View>
    );
}