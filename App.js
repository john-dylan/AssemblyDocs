/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import * as React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Login from './screens/Login';
 import HomeScreen from './screens/Home';
 import BottomNav from './screens/BottomNav';
 import SignUp from './screens/SignUp';

 import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View } from 'react-native';

 
 
 const Stack = createNativeStackNavigator();
 
 function App() {

  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);

  // if (isLoading) {
  //   return (
  //     <View style= {{flex:1, justifyContent: "center", alignItems: "center"}}>
  //       <ActivityIndicator size= "large"/>
  //     </View>
  //   );
  // }

   return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#64AD30',
          },
          headerTintColor: '#fff',
        }}
      >
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="SignUp" component={SignUp} />
         <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
         <Stack.Screen name= "Bottom" component={BottomNav} />
         
       </Stack.Navigator>     
     </NavigationContainer>
   );
 }
 
 export default App;
 