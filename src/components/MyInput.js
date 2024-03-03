import { TextInput, Text, View, StyleSheet } from 'react-native';
import { Colors } from '../constants/colors';

export default function MyInput({label,value,onChangeText,secureTextEntry,}){

    /**label,
     * value, text value at the beginning
     * onChangeText, save the input in the variable, usually with usestate
     * secureTextEntry, textInput included property, could be active or not*/

    return(
       <View style ={styles.container}>
        <TextInput
          placeholder={label}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry} 
        />
       </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 45,
    justifyContent: 'center',
    margin: 10,
    padding: 10,
    backgroundColor: Colors.ligth,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
});