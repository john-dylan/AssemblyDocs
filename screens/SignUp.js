import React from 'react';
import {View, StyleSheet, Text, ScrollView, Image} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}> 
                <Image  
                resizeMode="center" style={styles.image} />
                <Text style={styles.textTitle}>Let's Get Started</Text>
                <Text style={styles.textBody}>Create an account to get all features</Text>
                <Input name="Full Name" icon="user" />
                <Input name="Email" icon="envelope" />
                <Input name="Phone" icon="phone" />
                <Input name="Password" icon="lock" pass={true} />
                <Input name="Confirm Password" icon="lock" pass={true} />
                <Submit color="#64AD30" title="CREATE" />
                <View style={{flexDirection: 'row'}}>
                    <Text style={styles.textBody}>Aiready have an account</Text>
                    <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => props.navigation.navigate('Login')}> Login here</Text>

                </View>
            </View>
            
        </ScrollView>    
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    // image: {
    //     width: 400,
    //     height: 250,
    //     marginVertical: 10,
    // },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 5
    },
    textBody: {
        fontSize: 16,
    }
});

export default SignUp;