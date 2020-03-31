import React from 'react';
import { Platform ,Image,View,TouchableOpacity} from 'react-native';
import { FontAwesome ,Ionicons,MaterialCommunityIcons,MaterialIcons,SimpleLineIcons} from '@expo/vector-icons';

import { createAppContainer,createSwitchNavigator,withNavigation} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from '../screens/HomeScreen';
import LogInScreen from '../screens/LogInScreen';

import OTPScreen from '../screens/OTPScreen';

import DescoverScreen from '../screens/DescoverScreen';
import Order from '../screens/Order';

import RestourentDetails from '../components/RestourentDetails';
import DrawerContent from '../components/DrawerContent';
import TabBarIcon from '../components/TabBarIcon';
import IconWithBadge from '../components/IconWithBadge';
import EmailRegister from '../components/EmailRegister';
import MobileRegistretion from '../components/MobileRegistretion';
import BlogScreen from '../components/BlogScreen';
import ShareScreen from '../components/ShareScreen';
import ContactScreen from '../components/ContactScreen';
import HelpScreen from '../components/HelpScreen';
import SettingsScreen from '../components/SettingsScreen';
import ContactMenu from '../components/ContactMenu';
import AddFoodScreen from '../components/AddFoodScreen';
import MyCartScreen from '../components/MyCartScreen';
import OrderedScreen from '../components/OrderedScreen';
import PaidScreen from '../components/PaidScreen';


const HomeStack = createStackNavigator(
    {
      HomeScreen:{
          screen: HomeScreen,

          navigationOptions: {}
      },

      RestourentDetails:RestourentDetails,
      DescoverScreen:DescoverScreen,
      Order:Order,
      ContactMenu:ContactMenu,
      AddFoodScreen:AddFoodScreen,
      MyCartScreen:MyCartScreen,
      OrderedScreen:OrderedScreen,
      PaidScreen:PaidScreen,
      // QrCodeCamera:QrCodeCamera,
   },
   {
     initialRouteName: 'HomeScreen',
   }
)







const LogInStack = createStackNavigator(
    {
      LogInScreen:LogInScreen,

      OTPScreen:OTPScreen,

   },
   {
     initialRouteName: 'LogInScreen',
   }
)

const BlogStack = createStackNavigator(
  {
    BlogScreen:{
        screen: BlogScreen,
        navigationOptions: {
            header: null,
        }
    },
 },
 {
   initialRouteName: 'BlogScreen',
 }
)

const ShareStack = createStackNavigator(
  {
    ShareScreen:{
        screen: ShareScreen,
        navigationOptions: {
            header: null,
        }
    },
 },
 {
   initialRouteName: 'ShareScreen',
 }
)

const ContactStack = createStackNavigator(
  {
    ContactScreen:{
        screen: ContactScreen,
        navigationOptions: {
            header: null,
        }
    },
 },
 {
   initialRouteName: 'ContactScreen',
 }
)

const HelpStack = createStackNavigator(
  {
    HelpScreen:{
        screen: HelpScreen,
        navigationOptions: {
            header: null,
        }
    },
   },
   {
     initialRouteName: 'HelpScreen',
   }
)

const SettingsStack = createStackNavigator(
    {
      SettingsScreen:{
          screen: SettingsScreen,
          navigationOptions: {
              header: null,
          }
      },
   },
   {
     initialRouteName: 'SettingsScreen',
   }
)



const navigate = createStackNavigator({
   LogInScreen:{
       screen: LogInStack,
       navigationOptions: {
          header:null
       }
   } ,

});

const drawerNavigator = createDrawerNavigator({
    navigate:{
      screen:navigate,
      navigationOptions:{
        drawerLabel:()=>null
      }
    },
    Home:{
        screen:HomeStack,
        navigationOptions: {
              drawerLabel: () => null

        }
    } ,

    Blog:{
        screen: HomeScreen,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Share:{
        screen: ShareStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Contact:{
        screen: ContactStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Help:{
        screen: HelpStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },

    Settings:{
        screen: SettingsStack,
        navigationOptions: {
            drawerLabel: () => null
       }
    },
  },
  {
    drawerBackgroundColor:'#fff',
    drawerPosition:'left',
    drawerType:'slide',
    hideStatusBar:false,
    contentComponent:props =><DrawerContent  {...props}  />,
    contentOptions: {
        activeTintColor: '#ee5034',
        inactiveTintColor: '#efa834',
        itemsContainerStyle: {
            marginVertical: 0,
            paddingVertical:0
        },
        iconContainerStyle: {
            opacity: 1
        }
    },
    initialRouteName:'navigate'
  }
);

export default createAppContainer(drawerNavigator);
