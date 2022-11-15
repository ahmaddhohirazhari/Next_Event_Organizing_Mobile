import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import IconBack from 'react-native-vector-icons/Ionicons';
import IconLike from 'react-native-vector-icons/AntDesign';

export default function DetailHeader(props) {
  const backScreen = () => {
    // props.navigation.openDrawer();
    props.navigation.goBack(null);
  };
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={backScreen}>
        <IconBack name="arrow-back" color="white" size={30} />
      </TouchableOpacity>
      <TouchableOpacity onPress={backScreen}>
        <IconBack name="heart" color="white" size={30} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#3366FF',
    opacity: 1,
  },
});
