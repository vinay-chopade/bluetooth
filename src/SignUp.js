import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {lightGreen} from './Constants';
import Feild from './Feild';
import Btn from './Btn';

const SignUp = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'black',
            fontSize: 64,
            fontStyle: 'bold',
            marginTop: 30,
          }}>
          Register
        </Text>
        <Text
          style={{
            color: '#808080',
            fontSize: 19,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Create a new Account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 670,
          width: 400,
          borderTopLeftRadius: 140,
          paddingTop: 40,
          alignItems: 'center',
        }}>
        <Feild placeholder="First Name" />
        <Feild placeholder="Last Name" />
        <Feild placeholder="Contact Number" keyboardType={'number'} />
        <Feild placeholder="Email/Username" keyboardType={'email-address'} />
        <Feild placeholder="Password" secureTextEntry={true} />
        <Feild placeholder="Connfirm Password" secureTextEntry={true} />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '80%',
            paddingRight: 16,
          }}>
          <Text style={{color: 'grey', fontSize: 14, fontWeight: 'bold'}}>
            By Signing in, you agree to our{' '}
          </Text>
          <Text style={{color: lightGreen, fontSize: 14, fontWeight: 'bold'}}>
            Terms & Conditions
          </Text>
        </View>

        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            width: '80%',
            paddingRight: 16,
          }}>
          <Text style={{color: 'grey', fontSize: 14, fontWeight: 'bold'}}>
            and{' '}
          </Text>
          <Text style={{color: lightGreen, fontSize: 14, fontWeight: 'bold'}}>
            Privacy Policy
          </Text>
        </View>
        <Btn
          textColor="white"
          bgColor={lightGreen}
          btnLabel="SignUp"
          Press={() => {
            alert('Account Created'), props.navigation.navigate('Login');
          }}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#808080', fontSize: 16, fontWeight: 'bold'}}>
            Already have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{color: lightGreen, fontWeight: 'bold', fontSize: 16}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;
