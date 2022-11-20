import React from 'react';
import {View, TouchableOpacity, Text, Image} from 'react-native';
import styles from './styles';
import defaultImage from '../../assets/event.png';

export default function CardEvent(props) {
  return (
    <View style={styles.card}>
      <Image
        source={
          props.item.image
            ? {
                uri: `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${props.item.image}`,
              }
            : defaultImage
        }
        style={styles.image}
      />
      <View style={styles.detail}>
        <Text style={styles.text}>{props.item.dateTimeShow}</Text>
        <Text style={styles.text}>{props.item.name}</Text>
        <TouchableOpacity onPress={props.handleDetail}>
          <Text>GO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
