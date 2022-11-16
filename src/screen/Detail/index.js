/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import HeaderDetail from '../../component/Header/detail.js';
import axios from '../../utils/axios';

export default function Detail(props) {
  const [data, setData] = useState([]);
  const [image, setImage] = useState('');
  const eventId = props.route.params.eventId;

  useEffect(() => {
    getData();
  }, [image]);
  console.log(data[0]?.image);
  const getData = async () => {
    try {
      const result = await axios.get(`/event/${eventId}`);
      console.log(result.data.msg);
      setData(result.data.data);
      setImage(result.data.data[0]?.image);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <HeaderDetail {...props} />
      <ScrollView>
        <ScrollView>
          <View>
            <Image
              source={{
                uri: `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${data[0]?.image}`,
              }}
              style={{height: 400, width: '100%'}}
            />
          </View>
          <View
            style={{
              marginTop: -30,
              backgroundColor: 'white',
              borderTopRightRadius: 30,
              borderTopLeftRadius: 30,
              padding: 30,
            }}>
            <View style={{margin: 12}}>
              <Text style={{fontFamily: 'Poppins-Bold'}}>Detail</Text>
              <Text>{data[0]?.detail}</Text>
              <Text>Read More</Text>
              <Text style={{fontFamily: 'Poppins-Bold'}}>Location</Text>
              <Text>{data[0]?.location}</Text>
            </View>
            <TouchableOpacity
              style={{
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
              }}>
              <Text
                style={{textAlign: 'center', color: 'white'}}
                onPress={() => {
                  props.navigation.navigate('Order');
                }}>
                Buy Tickets
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </>
  );
}

const style = StyleSheet.create({});
