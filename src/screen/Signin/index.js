/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Logo from '../../assets/logo.png';
import IconFb from '../../assets/btnFacebook.png';
import IconGoogle from '../../assets/btnGoogle.png';
import IconBio from '../../assets/btnBio.png';

export default function Signin(props) {
  const handleLogin = () => {
    props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
  };

  return (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <Image source={Logo} style={{width: '50%', margin: 12}} />
      <Text style={{fontSize: 30, margin: 12, color: '#373A42'}}>Log In</Text>
      <Text style={{fontSize: 15, margin: 12, color: '#373A42'}}>
        Hi, Welcome back to Urticket!
      </Text>

      <TextInput
        style={styles.input}
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        placeholder="Input your email"
        onChangeText={text => handleChangeForm(text, 'email')}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Input Password"
        placeholderTextColor={'rgba(160, 163, 189, 1)'}
        onChangeText={text => handleChangeForm(text, 'password')}
      />
      <TouchableOpacity onPress={handleLogin}>
        <Text style={{textAlign: 'right', color: 'blue', margin: 12}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleLogin} style={styles.login}>
        <Text style={{textAlign: 'center', color: 'white'}}>Login</Text>
      </TouchableOpacity>
      <Text style={{marginTop: 50, textAlign: 'center'}}>or sign in with</Text>
      <TouchableOpacity style={styles.icon}>
        <Image source={IconGoogle} />
        <Image source={IconFb} />
        <Image source={IconBio} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
    paddingVertical: 20,
    margin: 12,
    backgroundColor: '#3366FF',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  input: {
    paddingVertical: 15,
    margin: 12,
    borderColor: '#C1C5D0',
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
  },
  icon: {
    marginTop: 12,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});
