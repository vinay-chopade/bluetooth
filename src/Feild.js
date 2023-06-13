import {TextInput} from 'react-native';
import React from 'react';
import {lightGreen} from './Constants';

const Feild = props => {
  return (
    <TextInput
      {...props}
      style={{
        borderRadius: 100,
        color: 'white',
        paddingHorizontal: 15,
        placeholderTextColor: lightGreen,
        width: '80%',
        height: 50,
        backgroundColor: '#3B3D3C',
        marginBottom: 10,
        marginVertical: 10,
      }}></TextInput>
  );
};

export default Feild;
