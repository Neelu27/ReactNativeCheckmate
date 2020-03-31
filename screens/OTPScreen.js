import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Slider,
  Dimensions,ImageBackground,
  TextInput, FlatList, AsyncStorage, Alert, Linking, PermissionsAndroid, ToastAndroid,ActivityIndicator
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast';
import { FontAwesome ,MaterialIcons} from '@expo/vector-icons';
import { MonoText } from '../components/StyledText';
import  Constants  from 'expo-constants';
import SmsListener from 'react-native-android-sms-listener'
import * as Expo from 'expo';
import * as Permissions from 'expo-permissions';
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import settings from '../constants/Settings.js';
const { width } = Dimensions.get('window');
const height = width * 0.8
const SERVER_URL = settings.url
const themeColor = settings.themeColor
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import { LinearGradient } from 'expo-linear-gradient';
class OTPScreen extends React.Component {

  static navigationOptions = {
    header:null,
  }


  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
        text1:'',
        text2:'',
        text3:'',
        text4:'',
    }
  }





  render() {
    return (

      <View style={{flex:1}}>
        {/* <ImageBackground source={require('../assets/images/apploginbg.png')} style={{width: '100%', height: '100%'}}> */}
            <Toast style={{backgroundColor: 'grey'}} textStyle={{color: '#fff'}} ref="toast" position = 'top'/>
            <View style={{height:Constants.statusBarHeight}} />
            <View style={{flex:1,justifyContent:'center',borderWidth:0,}}>

                <View style={{justifyContent:'center',borderWidth:0,width:width*0.7,alignSelf:'center',marginBottom:120}}>
                    <View style={{borderWidth:0,alignItems:'center'}}>
                        <Text style={{fontSize:18,paddingVertical:20}}>Enter OTP</Text>
                    </View>
                    <View style={{borderWidth:0,alignItems:'center',marginVertical:10}}>
                        <Text style={{fontSize:16,paddingVertical:2}}>One Time Password has been sent to</Text>
                        <Text style={{fontSize:16,paddingVertical:2}}>your mobile number +916369724601</Text>
                    </View>
                    <View style={{borderWidth:0,flexDirection:'row',justifyContent:'space-between',marginVertical:20}}>
                        <TextInput style={{borderWidth:0,height:60,
                                      width:60,borderRadius:30,
                                      backgroundColor:'#ED9309',
                                      shadowColor:"#fefefe",shadowOpacity:0.2,
                                      shadowRadius:15,
                                      shadowOffset:{height:2,width:0},
                                      elevation:5,}}
                                      onChangeText={(text1)=>this.setState({text1})}
                                      value={this.state.text1}/>
                        <TextInput style={{borderWidth:0,height:60,
                                      width:60,borderRadius:30,
                                      backgroundColor:'#ED9309',
                                      shadowColor:"#fefefe",shadowOpacity:0.2,
                                      shadowRadius:15,
                                      shadowOffset:{height:2,width:0},
                                      elevation:5,}}
                                      onChangeText={(text2)=>this.setState({text2})}
                                      value={this.state.text2}/>
                        <TextInput style={{borderWidth:0,height:60,width:60,
                                      borderRadius:30,backgroundColor:'#ED9309',
                                      shadowColor:"#fefefe",shadowOpacity:0.2,shadowRadius:15,
                                      shadowOffset:{height:2,width:0},elevation:5,}}
                                      onChangeText={(text3)=>this.setState({text3})}
                                      value={this.state.text3}/>
                        <TextInput style={{borderWidth:0,height:60,width:60,
                                      borderRadius:30,backgroundColor:'#ED9309',
                                      shadowColor:"#fefefe",shadowOpacity:0.2,shadowRadius:15,
                                      shadowOffset:{height:2,width:0},elevation:5,}}
                                      onChangeText={(text4)=>this.setState({text4})}
                                      value={this.state.text4}/>
                    </View>
                    <View style={{borderWidth:0,marginTop:10,alignItems:'center'}}>
                        <Text style={{fontSize:14,paddingVertical:10}}>Resend code in 00:29</Text>
                    </View>

                    <View style={{borderWidth:0,marginTop:15,alignItems:'center'}}>
                      <TouchableOpacity style={{borderWidth:0,backgroundColor:'#ED9309',borderRadius:35,shadowColor:"#fefefe",shadowOpacity:0.2,
                      shadowRadius:15,
                      shadowOffset:{height:2,width:0},
                      elevation:5,}}
                                        onPress={()=>{this.props.navigation.navigate('HomeScreen')}}>
                          <MaterialIcons name={'arrow-forward'} size={22}color={'#000'}style={{paddingHorizontal:25,paddingVertical:22}}/>
                          {/* <Text style={{fontSize:22,paddingHorizontal:25,paddingVertical:15,color:'#fff'}}>O</Text> */}
                      </TouchableOpacity>
                    </View>

                </View>

            </View>

        {/* </ImageBackground> */}



      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',

  },
});

const mapStateToProps =(state) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(OTPScreen);
