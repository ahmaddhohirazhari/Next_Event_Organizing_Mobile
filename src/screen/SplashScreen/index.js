/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import splashImage from '../../assets/Splash.png';

export default function SplashScreen(props) {
  console.log(props);
  const token = false;
  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = () => {
    setTimeout(() => {
      if (token) {
        props.navigation.replace('AppScreen');
      } else {
        props.navigation.replace('AuthScreen');
      }
    }, 2000);
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={splashImage} style={{width: '100%'}} />
    </View>
  );
}

const style = StyleSheet.create({});
