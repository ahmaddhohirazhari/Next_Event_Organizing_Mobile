import React from 'react';
import {View, Text, Button, StyleSheet, TextInput} from 'react-native';

export default function Signin(props) {
  const [text, onChangeText] = React.useState('Email');
  const [password, onChangeNumber] = React.useState('Input Password');

  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };
  const navSignup = () => {
    props.navigation.navigate('Signup');
  };
  return (
    <View>
      <Text>Signin Screen</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={password}
        placeholder="useless placeholder"
        keyboardType="numeric"
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonSignup: {
    padding: 10,
    backgroundColor: 'blue',
  },
});
