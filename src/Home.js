import * as React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Background from './Background';
import Btn from './Btn';
import {blue} from './Constants';

const Home = props => {
  return (
    <Background>
      <View style={{marginHorizontal: 30, marginVertical: 90}}>
        <Text style={Styles.head1}>Let's Start!!</Text>
        <Text style={Styles.head2}>Connect With Each Other</Text>
        <Btn
          bgColor={blue}
          btnLabel="Login"
          textColor="white"
          Press={() => props.navigation.navigate('Login')}
        />
        <Btn
          bgColor="white"
          btnLabel="SignUp"
          textColor={blue}
          Press={() => props.navigation.navigate('SignUp')}
        />
      </View>
    </Background>
  );
};

const Styles = StyleSheet.create({
  head1: {
    color: 'blue',
    fontSize: 60,
  },
  head2: {
    color: 'blue',
    fontSize: 40,
    fontStyle: 'italic',
    marginBottom: 100,
  },
});

export default Home;
