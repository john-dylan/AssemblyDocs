import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, BackHandler } from 'react-native';
import {Avatar, Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {DrawerContent} from './DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FullWidthTabs from './HomeNav';

import ProfileScreen from './Profile';
import AssemblyScreen from './AssemblyBusiness';
import CommitteeScreen from './CommitteeBusiness';
import DetailedReport from './DetailedReport';
import SummaryReport from './SummaryReport';
import NotificationScreen from './Notifications';
import OtherDocs from './OtherDocuments';
import List from './testFlat';
import BottomNav from './BottomNav';

import Colors from '../components/colors';

function HomeScreen({navigation}) {
    return (
      <View>
        <View style= {styles.buttonRow}>
          <TouchableOpacity onPress={() => {navigation.navigate('Assembly Business')}}>
            <View style={styles.button}>
              <Icon style={styles.icon}
                  name= "domain"
                  color='#0073b7'
                  size={70}
              />
              <Text style={styles.buttonText}>Assembly Business</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('Committee Business')}}>
            <View style={styles.button}>
              <Icon style={styles.icon}
                  name= "account-group-outline"
                  color='#605ca8'
                  size={70}
              />
              <Text style={styles.buttonText}>Committee Business</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style= {styles.buttonRow}>
          <TouchableOpacity onPress={() => {navigation.navigate('Other Documents')}}>
            <View style={styles.button}>
              <Icon style={styles.icon}
                  name= "folder-outline"
                  color='#f39c12'
                  size={70}
              />
              <Text style={styles.buttonText}>Other Documents</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {navigation.navigate('All Reports')}}>
            <View style={styles.button}>
              <Icon style={styles.icon}
                  name= "file-document-outline"
                  color='#00a65a'
                  size={70}
              />
              <Text style={styles.buttonText}>Reports</Text>
            </View>
          </TouchableOpacity>
        </View>
        
        {/* <View style= {styles.buttonRow}>
          <TouchableOpacity onPress={() => {}}>
            <View style={styles.button}>
              <Icon style={styles.icon}
                  name= "file-document-outline"
                  color='blue'
                  size={70}
              />
              <Text style={styles.buttonText}>Reports</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => BackHandler.exitApp()}>
            <View style={styles.button}>
              <Icon style={styles.icon}
                  name= "exit-to-app"
                  color='blue'
                  size={70}
              />
              <Text style={styles.buttonText}>Exit</Text>
            </View>
          </TouchableOpacity>
        </View> */}

      </View>

    );
  };
  function AssemblyStackScreen({navigation}) {
    return (

      <AssemblyStack.Navigator>
        <AssemblyStack.Screen name= "Assembly Business" component={AssemblyScreen} options={{headerShown: false}}>

        </AssemblyStack.Screen>
      </AssemblyStack.Navigator>
        // <View>
        //     <TouchableOpacity onPress={() => {}}>
        //     <View style={styles.button}>
        //       <Icon style={styles.icon}
        //           name= "note-text-outline"
        //           color='blue'
        //           size={30}
        //       />
        //       <Text style={styles.buttonText}>Order Paper</Text>
        //     </View>
        //     </TouchableOpacity>
        // </View>
    );
}
  const AssemblyStack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

export default function App() {
  return(
    <NavigationContainer independent={true}>

      <Drawer.Navigator drawerContent={props => <DrawerContent {... props}/>} screenOptions={{
          headerStyle: {
            backgroundColor: '#64AD30',
          },
          headerTintColor: '#fff',
        }}>
      <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
        <Drawer.Screen name="Assembly Business" component={AssemblyScreen} />
        <Drawer.Screen name="Committee Business" component={CommitteeScreen} />
        <Drawer.Screen name="Detailed Report" component={DetailedReport} />
        <Drawer.Screen name="Summary Report" component={SummaryReport} />
        <Drawer.Screen name="Notifications" component={NotificationScreen} />
        <Drawer.Screen name= "Other Documents" component={OtherDocs}/>
        <Drawer.Screen name= "All Reports" component={FullWidthTabs}/>
        {/* <Drawer.Screen name= "Nav" component={FullWidthTabs}/> */}
      </Drawer.Navigator>
      
    </NavigationContainer>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#ddd',
    marginTop: 20,
    marginLeft: 20,
    alignContent: 'center',
    width: 170,
    height: 150,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    alignContent: 'center'
  },
  icon: {
    alignSelf: 'center',
  }
});