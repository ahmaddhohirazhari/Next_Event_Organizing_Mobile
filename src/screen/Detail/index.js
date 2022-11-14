import React from 'react';
import {ScrollView, Text, StyleSheet, Button} from 'react-native';
import HeaderDetail from '../../component/Header/detail.js';

export default function Detail(props) {
  return (
    <ScrollView>
      <HeaderDetail {...props} />
      <Button
        title="Order Screen"
        onPress={() => {
          props.navigation.navigate('Order');
        }}
      />
      {/* <Text style={{fontSize: 300}}>Lorem ipsum dolor ammet</Text> */}
    </ScrollView>
  );
}

const style = StyleSheet.create({});
