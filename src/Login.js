import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import Background from './Background';
import {lightGreen} from './Constants';
import Feild from './Feild';
import Btn from './Btn';

const Login = props => {
  return (
    <Background>
      <View style={{alignItems: 'center', width: 400}}>
        <Text
          style={{
            color: 'black',
            fontSize: 64,
            marginVertical: 30,
          }}>
          Login
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          height: 680,
          width: 400,
          borderTopLeftRadius: 140,
          paddingTop: 100,
          alignItems: 'center',
        }}>
        <Text style={{color: lightGreen, fontSize: 40, fontWeight: 'bold'}}>
          Welcome Back
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: 20,
          }}>
          Login to your account
        </Text>
        <Feild placeholder="Email/Username" keyboardType={'email-address'} />
        <Feild placeholder="Password" secureTextEntry={true} />
        <View
          style={{
            alignItems: 'flex-end',
            width: '80%',
            paddingRight: 16,
            marginBottom: 150,
          }}>
          <Text style={{color: lightGreen, fontSize: 16, fontWeight: 'bold'}}>
            Forget Password?
          </Text>
        </View>
        <Btn
          textColor="white"
          bgColor={lightGreen}
          btnLabel="Login"
          Press={() => props.navigation.navigate('First')}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{color: '#808080', fontSize: 16, fontWeight: 'bold'}}>
            Don't have an account?{' '}
          </Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={{color: lightGreen, fontWeight: 'bold', fontSize: 16}}>
              SignUp
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

export default Login;
