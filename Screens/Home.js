import React ,{Component} from 'react'
import { Text,View,StyleSheet,TouchableOpacity,SafeAreaView,StatusBar, Platform } from 'react-native'

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.homeBar}>
            <SafeAreaView style={styles.droidSafeArea} >
                <Text style={styles.titleText}>  ISS Tracker App </Text>
            </SafeAreaView>
            </View>
        )
    }
}
 const styles=StyleSheet.create({
     homeBar:{
         flex:1,
         justifyContent:"center",
         alignItems:"center"
     },
     titleText:{
         fontSize:20,
         fontWeight:"bold",
        color:"black"
     },
     droidSafeArea:{
         marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
     }
 })
 