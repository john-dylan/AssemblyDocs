import * as React from 'react';
import { View, Button, StyleSheet} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {Avatar, Title, Caption, Paragraph, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { color } from 'react-native-reanimated';
import { BackHandler } from 'react-native';

export function DrawerContent(props) {

    const [isDarkTheme, setIsDarkTheme] = React.useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }

    return(
        <View style={{flex:1}}>
           <DrawerContentScrollView {...props}>
               <View style= {styles.drawerContent}>
                   <View style= {styles.userInfoSection}>
                       <View style= {{flexDirection: 'row', marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style= {{marginLeft: 15, flexDirection: 'column'}}> 
                                <Title style={styles.title}>John Doe</Title>
                            </View>
                       </View>
                   </View>

                   <Drawer.Section style={styles.drawerSection}>
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "account-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Profile"
                        onPress={() => {props.navigation.navigate('Profile')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "domain"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Assembly Business"
                        onPress={() => {props.navigation.navigate('Assembly Business')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "account-group-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Committee Business"
                        onPress={() => {props.navigation.navigate('Committee Business')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "folder-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Other Documents"
                        onPress={() => {props.navigation.navigate('Other Documents')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "file-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Summary Report"
                        onPress={() => {props.navigation.navigate('Summary Report')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "file-document-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Detailed Report"
                        onPress={() => {props.navigation.navigate('Detailed Report')}}
                    />
                    <DrawerItem
                        icon={({color, size}) => (
                                <Icon 
                                name= "bell-outline"
                                color={color}
                                size={size}
                                />
                            )}
                        label="Notification"
                        onPress={() => {props.navigation.navigate('Notifications')}}
                    />
                    
                   </Drawer.Section>
                   <Drawer.Section title="Preferences">
                       <TouchableRipple onPress={() => {toggleTheme()}}>
                           <View style={styles.preference}>
                               <Text>Dark Theme</Text>
                               <View pointerEvents="none">
                                   <Switch value={isDarkTheme}/>
                               </View>
                               
                           </View>
                       </TouchableRipple>
                   </Drawer.Section>
               </View>
            </DrawerContentScrollView> 
            <Drawer.Section style= {styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                            <Icon 
                            name= "exit-to-app"
                            color={color}
                            size={size}
                            />
                        )}
                    label="Sign Out"
                    onPress={() => {BackHandler.exitApp()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });