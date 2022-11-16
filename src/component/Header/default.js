/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons';

export default function DefaultHeader(props) {
  const backScreen = () => {
    props.navigation.goBack(null);
    // props.navigation.openDrawer();
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen} style={styles.section}>
        <IconBack name="arrow-back" color="black" size={30} />
      </TouchableOpacity>
      <View style={(styles.section, styles.sectionCenter)}>
        <Text style={{fontFamily: 'Poppins-Bold'}}>{props.name}</Text>
      </View>
      <View style={styles.section} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: 'white',
  },
  section: {
    flex: 1,
  },
  sectionCenter: {
    alignItems: 'center',
  },
});
