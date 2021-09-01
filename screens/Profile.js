import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

const ProfileScreen = () => {
    return (
      <ScrollView>
      <View style={styles.container}>
        {/* <Text>Profile Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        /> */}
        <View style= {{flex:0.45, flexWrap: 'wrap',width: '85%',borderRadius: 20, borderWidth: 1.5, marginTop: 15, padding: 20, marginStart: 20, marginEnd: 20,}}>
          <Text style= {{alignSelf: 'center', fontSize: 20, paddingBottom: 20}}>Account Details</Text>
            <Input
              placeholder='Full Name'
              editable= {false}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='user'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='PF NUMBER'
              editable= {false}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='user'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='Ward'
              editable= {false}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='home'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='Phone'
              editable= {false}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='phone'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='Email'
              editable= {false}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='envelope'
                  size={20}
                  color='black'
                />
              }
            />
        </View>
        <View style= {{flex: 0.2, width: '85%',borderRadius: 20, borderWidth: 1.5, marginTop: 15, padding: 20, marginStart: 20, marginEnd: 20,}}>
            <Text style={{alignSelf: 'center', fontSize: 20,paddingBottom: 20}}>Change Password</Text>
            <Input
              placeholder='Current Password'
              editable= {true}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='New Password'
              editable= {true}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='black'
                />
              }
            />
            <Input
              placeholder='Confirm Password'
              editable= {true}
              inputContainerStyle={styles.Input}
              leftIcon={
                <Icon
                  name='lock'
                  size={20}
                  color='black'
                />
              }
            />
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.appButtonText}>Change Password</Text>
            </TouchableOpacity>
        </View>
        
      </View>
      
      </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    marginTop: 5,
    // justifyContent: 'center'
  },
  Input: {
    margin: -8,
    width: '100%',
    // marginHorizontal: 10,
    // marginEnd: 10
  },
  btn: {
    backgroundColor: '#00a65a',
    borderRadius: 10,
    width: 200,
    elevation: 8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 3,
    alignSelf: 'center'
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "600",
    alignSelf: "center",
    textTransform: "uppercase"
  },
});