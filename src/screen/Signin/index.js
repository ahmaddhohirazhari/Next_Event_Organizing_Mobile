import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Logo from '../../assets/logo.png';
import IconFb from '../../assets/btnFacebook.png';
import IconGoogle from '../../assets/btnGoogle.png';
import IconBio from '../../assets/btnBio.png';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Button from '../../component/Button';
import Input from '../../component/Input';
import styles from './styles';

export default function Signin(props) {
  const [form, setForm] = useState({});
  const handleLogin = async () => {
    try {
      console.log(form);
      const result = await axios.post('/auth/login', form);
      await AsyncStorage.setItem('userId', result.data.data.userId);
      await AsyncStorage.setItem('token', result.data.data.token);
      await AsyncStorage.setItem('refreshToken', result.data.data.refreshToken);
      props.navigation.replace('AppScreen', {screen: 'MenuNavigator'});
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const navigateSignup = () => {
    props.navigation.replace('AuthScreen', {screen: 'Signup'});
  };
  const navigateForgotPassword = () => {
    props.navigation.replace('AuthScreen', {screen: 'ForgotPassword'});
  };
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={navigateSignup}>
        <Image source={Logo} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.loginText}>Log In</Text>
      <Text style={styles.text}>Hi, Welcome back to Urticket!</Text>

      <Input
        placeholder={'Input your email'}
        onChangeText={text => handleChangeForm(text, 'email')}
      />
      <Input
        secureTextEntry={true}
        placeholder={'Input Password'}
        onChangeText={text => handleChangeForm(text, 'password')}
      />
      <TouchableOpacity onPress={navigateForgotPassword}>
        <Text style={styles.frogotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Button text={'Login'} onPress={handleLogin} />
      <Text style={styles.textSign}>or sign in with</Text>
      <TouchableOpacity style={styles.icon}>
        <Image source={IconGoogle} />
        <Image source={IconFb} />
        <Image source={IconBio} />
      </TouchableOpacity>
    </View>
  );
}
