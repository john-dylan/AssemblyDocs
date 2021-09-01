import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './screens/Login';
 import HomeScreen from './screens/Home';
 import BottomNav from './screens/BottomNav';
 import SignUp from './screens/SignUp';

 const BeforeSignIn = createStackNavigator ({
     Login : {
         screen: Login
     }
},   {
        headerMode: "none",
        initialRouteName: "Login"
        
 })

 const AfterSignIn = createStackNavigator ({
    Home : {
        screen: HomeScreen
    }
},   {
       headerMode: "none",
       initialRouteName: "Home"
       
})

const AppNavigator= createStackNavigator ({
    Auth: BeforeSignIn,
    App: AfterSignIn,
}, {
    headerMode: "none",
    initialRouteName: "Auth"
})

export default createNavigationContainer(AppNavigator);