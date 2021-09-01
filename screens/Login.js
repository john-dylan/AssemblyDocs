import React, { createRef, useState } from 'react';
import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';


import { RadioButton, TextInput} from 'react-native-paper';

import axios from 'react-native-axios';

import Loader from '../components/Loader';

function Login ({navigation})  {
    const [loginType, setloginType] = useState('PFNo');

    const [userPFNo, setuserPFNo] = React.useState('');
    const [userPassword, setUserPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [errortext, setErrortext] = useState('');
    // const [apiMethod, setApiMethod] = useState('DoUserLogin');

   
    const passwordInputRef = createRef();

    const handleSubmitPress = () => {
        setErrortext('');

        console.log(userPFNo);
        console.log(userPassword);
        console.log(loginType);
        console.log('DoUserLogin');
        if (!userPFNo) {
          alert('Please fill PF Number or ID Number');
          return;
        }
        if (!userPassword) {
          alert('Please fill Password');
          return;
        }
        setLoading(true);
        
        const req = {
          Method:'DoUserLogin',
          UserName:'userPFNo',
          Pwsd:'userPassword',
          LoginType:'loginType'
          // "email": userPFNo,
          // "password": userPassword
        }
        axios.post('https://apps.quarto.co.ke/assemblydocs/appsrepsondents.php',{
          // url: ,
          // method: 'POST',
          // headers: {
          //   "Content-Type": "application/json",
          //   "Accept-Encoding": "gzip, deflate, br"
          data: req
          // },
          
        }).then(function (response) {
          // JSON.parse(req);
          console.log(response);
          setLoading(false);
        }).catch(function (error) {
          console.log(error);
          setLoading(false);
        });
      }


    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Loader loading={loading} />
                <Image 
                    // source={require()} 
                   
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Assembly Docs</Text>
                <View style={{flex: 1, }}>
                    <RadioButton.Group onValueChange={LoginType => setloginType(LoginType)} value={loginType} layout= "row">
                        
                            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                                <RadioButton value="PFNo" /><Text>PF Number</Text>
                            </TouchableOpacity>
                            
                        
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}}>
                            <RadioButton value="IDNo" /><Text>ID Number</Text>
                        </TouchableOpacity>
                        
                    </RadioButton.Group>
                </View>


                
                <View style={{marginTop: 2}} />
                <TextInput label= "PF Number or ID Number" icon="user" value= {userPFNo}
                onChangeText= {userPFNo => setuserPFNo(userPFNo)}
                style={styles.input} dense="true" underlineColor= '#64AD30' selectionColor= '#64AD30'
                right={<TextInput.Icon name="account" />}/>

                
                <TextInput label="User Password" name="Password"  pass={true} value= {userPassword}
                onChangeText={(userPassword) => setUserPassword(userPassword)} ref= {passwordInputRef} 
                style={styles.input} dense= "true" underlineColor= '#64AD30' selectionColor= '#64AD30' 
                right={<TextInput.Icon name="lock" />}/>

                {/* <TextInput onChangeText= {text => onChangeText(text)} value= {value}
                style={{height:30, width: 300}}/> */}

                {errortext != '' ? ( <Text style={styles.errorTextStyle}> {errortext}</Text>) : null}

                <View style={{width: '90%'}}>
                    <TouchableOpacity>
                        <Text style={[styles.textBody], {alignSelf: 'flex-end'}}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
                {/* <Button color= '#64AD30' width= '100%' title= "LOGIN" onPress={() => navigation.navigate('Home')}/> */}

                <TouchableOpacity style={styles.btn} onPress={handleSubmitPress}>
                    <Text style={styles.appButtonText}>LOGIN</Text>
                </TouchableOpacity>
               
                {/* <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't Have an account</Text>
                    <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => navigation.navigate('SignUp')}> Sign Up</Text>
                </View> */}
            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    // image: {
    //     width: 400,
    //     height: 250,
    //     marginVertical: 10
    // },
    textTitle: {
        fontSize: 25,
        color: 'black',
        marginVertical: 10,
    },
    textBody: {
        fontSize: 16
    },

    btn: {
        backgroundColor: '#00a65a',
        borderRadius: 10,
        width: 290,
        elevation: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        margin: 10,
        alignSelf: 'center'
      },
    appButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600",
        alignSelf: "center",
        textTransform: "uppercase"
      },
    input: {
        // height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        padding: 10,
        
      },
   
});

export default Login;



