import { StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export const globalStyles = StyleSheet.create({
    screenContainer:{
        flex:1,
        backgroundColor: Colors.light,
        alignItems:'center',
        justifyContent:'center',
    },
    title:{
        fontSize:32,
        fontWeight:'bold',
        color:Colors.secondary,
        alignItems:'center',
    },
    simpleContainer: {
        flex: 1,
        backgroundColor: Colors.ligth,
      },
});