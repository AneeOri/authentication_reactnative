import { View, Text, Button } from "react-native";
import { globalStyles } from "../../styles/global";
import MyInput from "../MyInput";
import MyButton from "../MyButton";
import { useNavigation } from "@react-navigation/native";

export default function SignUp(){
    const navigation = useNavigation();
    return(
     <View style={globalStyles.screenContainer}>
      <Text style={globalStyles.title}>SignUp</Text>
      <MyInput label={'Email'}/>
      <MyInput label={'Password'} secureTextEntry/>
      <MyButton title={'SignUp'}/>
      <MyButton title={'Login'} onPress={() => navigation.navigate('Login')}/>
     </View>
    );
}