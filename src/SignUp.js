import {View, Text, TouchableOpacity, Alert, TextInput} from 'react-native';
import React, { useState } from 'react';
import Background from './Background';
import {lightGreen} from './Constants';
import Feild from './Feild';
import Btn from './Btn';
import { errormessage } from './css/formcss';

const SignUp = props => {

  //const [password, setPassword] = useState('');
  //const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegistration = () => {
    // if (password !== confirmPassword) {
    //   Alert.alert('Error', 'Passwords do not match.');
    // } else if (password.length < 6) {
    //   Alert.alert('Error', 'Password should be at least 6 characters long.');
    // } else {
    //   Alert.alert('Account Created'), props.navigation.navigate('Login');
    // }

   // console.log(fdata);

   if(fdata.fname =='' || 
      fdata.lname =='' ||
      fdata.cnum == '' ||
      fdata.email == '' ||
      fdata.pass == '' ||
      fdata.cpass == '')
   {
    setErrormsg('All fields are required');
   return;
  }
  else   if (fdata.pass != fdata.cpass) {
    setErrormsg('Password and Confirm Password must be same');
    return;
}
else {
  fetch('http://10.0.2.2.:3000/signup', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(fdata)
  })
      .then(res => res.json()).then(
          data => {
              // console.log(data);
              if (data.error) {
                  setErrormsg(data.error)
              }
              else {
                  alert('account created sucessfully');
                  navigation.navigate('login');
              }
          }
      )
}


  };

  const [fdata, setFdata] = useState({
    fname: '',
    lname: '',
    cnum : '',
    email: '',
    pass : '',
    cpass : ''
  })

  const [errormsg, setErrormsg] = useState(null);

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
        <View>
          <TextInput placeholder="First name"
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, fname: text })}
          />
         </View>
        <View>
          <TextInput placeholder="Last name"
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, lname: text })}
          />
        </View>
        <View>
          <TextInput placeholder="Contact Number" keyboardType={'number'}
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, cnum: text })}
          />        
        </View>
        <View>
          <TextInput placeholder="Email address" keyboardType={'email-address'}
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, email: text})}
          />
        </View>
        <View>
          <TextInput placeholder="Password"
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, pass: text })} 
          secureTextEntry={true} />
        </View>
        <View>
          <TextInput placeholder="Confirm Password"
          onPressIn={() => setErrormsg(null)}
          onChangeText={(text) => setFdata({ ...fdata, cpass: text })} 
          secureTextEntry={true} />
        </View>
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
          Press={handleRegistration}
          // Press={() => {
          //   alert('Account Created'), props.navigation.navigate('Login');
          // }}
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
        {
         errormsg ? <Text style={errormessage}>{errormsg}</Text> : null
      }
      </View>
    </Background>
  );
};

export default SignUp;
