import React from 'react';
import { Platform,
  AsyncStorage,
  StyleSheet,ScrollView,
  View,Image,Dimensions,
  StatusBar,Alert,TouchableOpacity,
  TouchableNativeFeedback} from 'react-native';
import {createBottomTabNavigator,
        createAppContainer,
        createSwitchNavigator,
        NavigationActions } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import Constants from 'expo-constants';
import SafeAreaView from 'react-native-safe-area-view';
import { FontAwesome ,MaterialCommunityIcons,MaterialIcons,SimpleLineIcons} from '@expo/vector-icons';
import constants  from '../constants/Settings.js';
import { Text, TouchableRipple } from 'react-native-paper';
const mainUrl = constants.url;
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import * as actionTypes from '../actions/actionTypes';
import settings from '../constants/Settings';
const { width } = Dimensions.get('window');
const { height } = Dimensions.get('window');
const SERVER_URL = settings.url
const themeColor = settings.themeColor

class DrawerContent  extends React.Component {

    constructor(props) {
        super(props);
        this.state ={
         login:true,
        }
    }

    render(){

      return(
        <ScrollView containerStyle={{backgroundColor: '#ED9309'}} showsVerticalScrollIndicator={false}>
            <SafeAreaView style={{backgroundColor: '#ED9309'}} forceInset={{ }}>
                <View style={{height: Constants.statusBarHeight,  backgroundColor: '#ED9309',}}>
                    <StatusBar  translucent={true} barStyle="light-content" networkActivityIndicatorVisible={false}/>
                </View>
                <View style={{backgroundColor: '#ED9309',
                               height: 120,
                               alignItems: 'center',
                               justifyContent: 'center',}}>
                      {/* // <Text style={{color:'#fff',fontSize:22,paddingRight:30}}>General</Text> */}
                      <Image source={require('../assets/images/6.png')} style={{height:100,width:100,borderRadius:50,}}/>
                </View>
                <View style={{minHeight: height-180,backgroundColor:'#ED9309', alignItems: 'center',}}>
                   <DrawerItems {...this.props}
                         inactiveTintColor={'#b83655'}
                         iconContainerStyle={{color:'#ED9309',opacity:1}}/>

                    {Platform.OS === 'android' &&
                       <TouchableNativeFeedback
                            centered={true}
                            background={TouchableNativeFeedback.Ripple('grey')}
                            onPress={()=>this.props.navigation.navigate('HomeScreen')}>
                           <View style={{flexDirection: 'row',paddingVertical:20,paddingBottom: 10,
                                         backgroundColor: 'transparent', alignItems: 'center',}}>
                               <View style={{flex:0.22,justifyContent: 'center',alignItems: 'center',}}>
                                    {/* <Image
                                        source={require('../AllImage/Icons-POI/home1.png')}     style={{height:23,width:23,tintColor:'#fff'}}/> */}
                                    <FontAwesome  name={'home'} size={22} color={'#fff'}/>
                               </View>
                               <View style={{flex:0.75,justifyContent: 'center',alignItems: 'flex-start',marginLeft:14}}>
                                   <Text style={{color:'#fff',fontWeight:'400',fontSize:20,}} >Home</Text>
                               </View>
                           </View>
                       </TouchableNativeFeedback>}

                    {Platform.OS === 'android' &&
                       <TouchableNativeFeedback
                            centered={true}
                            background={TouchableNativeFeedback.Ripple('grey')}
                            onPress={()=>this.props.navigation.navigate('ShareScreen')}>
                           <View style={{flexDirection: 'row',paddingVertical:20,paddingBottom: 10,
                                          backgroundColor:'transparent', alignItems: 'center',}}>
                                <View style={{flex:0.22,justifyContent: 'center',alignItems: 'center',}}>
                                    {/* <Image
                                        source={require('../assets/images/restaurent.png')} style={{height:22,width:22,tintColor:'#fff'}}/> */}
                                        <FontAwesome  name={'cutlery'} size={22} color={'#fff'}/>
                                </View>
                                <View style={{flex:0.75,justifyContent: 'center',alignItems: 'flex-start',marginLeft:14}}>
                                    <Text style={{color:'#fff',fontWeight:'400',fontSize:20}} >Discovers</Text>
                                </View>
                         </View>
                     </TouchableNativeFeedback>}

                   {Platform.OS === 'android' &&
                     <TouchableNativeFeedback
                           centered={true}
                           background={TouchableNativeFeedback.Ripple('grey')}
                           onPress={()=>this.props.navigation.navigate('ContactScreen')}>
                           <View style={{flexDirection: 'row',paddingVertical:20,paddingBottom: 10,
                                          backgroundColor: 'transparent', alignItems: 'center',}}>
                                <View style={{flex:0.22,justifyContent: 'center',alignItems: 'center',}}>
                                    {/* <Image
                                        source={require('../assets/images/order.png')} style={{height:25,width:25,tintColor:'#fff'}}/> */}
                                        <FontAwesome  name={'list-alt'} size={22} color={'#fff'}/>
                               </View>
                               <View style={{flex:0.75,justifyContent: 'center',alignItems: 'flex-start',marginLeft:14}}>
                                    <Text style={{color:'#fff',fontWeight:'400',fontSize:20}} >Orders</Text>
                              </View>
                          </View>
                    </TouchableNativeFeedback>}

                   {Platform.OS === 'android' &&
                     <TouchableNativeFeedback
                           centered={true}
                           background={TouchableNativeFeedback.Ripple('grey')}   onPress={()=>{this.props.navigation.navigate('HelpScreen')}}>
                           <View style={{flexDirection: 'row',paddingVertical:20,paddingBottom: 10,
                                        backgroundColor: 'transparent', alignItems: 'center',}}>
                               <View style={{flex:0.22,justifyContent: 'center',alignItems: 'center',}}>
                                     {/* <Image
                                         source={require('../AllImage/Icons-POI/share.png')} style={{height:25,width:25,tintColor:'#fff'}}/> */}
                                         <FontAwesome  name={'share-alt'} size={22} color={'#fff'}/>
                               </View>
                               <View style={{flex:0.75,justifyContent: 'center',alignItems: 'flex-start',marginLeft:14}}>
                                   <Text style={{color:'#fff',fontWeight:'400',fontSize:20}} >Share</Text>
                              </View>
                          </View>
                    </TouchableNativeFeedback>}

                  {Platform.OS === 'android' &&
                     <TouchableNativeFeedback
                           centered={true}
                           background={TouchableNativeFeedback.Ripple('grey')}   onPress={()=>{this.props.navigation.navigate('SettingsScreen')}}>
                          <View style={{flexDirection: 'row',paddingVertical:20,paddingBottom: 10,
                                        backgroundColor: 'transparent', alignItems: 'center',}}>
                               <View style={{flex:0.22,justifyContent: 'center',alignItems: 'center',}}>
                                    {/* <Image
                                        source={require('../assets/images/qrcode.png')} style={{height:25,width:25,tintColor:'#fff'}}/> */}
                                        <FontAwesome  name={'qrcode'} size={22} color={'#fff'}/>
                               </View>
                             <View style={{flex:0.75,justifyContent: 'center',alignItems: 'flex-start',marginLeft:14}}>
                                 <Text style={{color:'#fff',fontWeight:'400',fontSize:20}} >Scan</Text>
                             </View>
                         </View>
                     </TouchableNativeFeedback>}

             </View>
             <View style={{justifyContent: 'flex-end',backgroundColor:'#ED9309',paddingBottom:150}}>
                 <View style={{  alignItems: 'center',justifyContent: 'flex-end' }}>
                     <Text style={{fontSize:15,color:'#fff'}}>App version {Constants.manifest.version}</Text>
                 </View>
             </View>
         </SafeAreaView>
     </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar:{
    height:Constants.statusBarHeight,
  }
});

const mapStateToProps =(state) => {
    return {
      counter: state.cartItems.counter,
      cart : state.cartItems.cartItem,
      store:state.cartItems.store
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTocartFunction:  (args) => dispatch(actions.addToCart(args)),
    decreaseFromCartFunction:  (args) => dispatch(actions.decreaseFromCart(args)),
    increaseCartFunction:  (args) => dispatch(actions.increaseCart(args)),
    setInitialFunction:  (cart,counter) => dispatch(actions.setInitial(cart,counter)),
    emptyCartFunction:()=>dispatch(actions.emptyCart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
