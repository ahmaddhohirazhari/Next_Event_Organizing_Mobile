import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  Button,
} from 'react-native';
import IconSearch from 'react-native-vector-icons/AntDesign';
import axios from '../../utils/axios';
import styles from './styles';

import CardEvent from '../../component/CardEvent';

export default function Home(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await axios.get(
        '/event?page=&searchName=&searchDateShow=&sort=&limit=50',
      );
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDetail = eventId => {
    props.navigation.navigate('Detail', {eventId: eventId});
  };

  const navDetail = () => props.navigation.navigate('Detail');
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.search}>
          <IconSearch name="search1" color="white" size={30} />
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            placeholder="Input FUll Name"
          />
        </View>
        <View style={styles.sortDateContainer}>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>13</Text>
            <Text style={styles.date}>Mon</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.date}>Tue</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.date}>Tue</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.date}>Tue</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}>14</Text>
            <Text style={styles.date}>Tue</Text>
          </View>
        </View>
        <View style={styles.view_1}>
          <View style={styles.view_2}>
            <Text style={styles.textEvent}>Events For You</Text>
            <Image source={require('../../assets/filter.png')} />
          </View>
        </View>
        <FlatList
          horizontal={true}
          data={data}
          style={styles.flatlist}
          renderItem={({item}) => (
            <View>
              <CardEvent item={item} handleDetail={handleDetail} />
            </View>
          )}
          keyExtractor={item => item.eventId}
        />
        <Button title="Detail Screen" onPress={navDetail} />
      </View>
    </ScrollView>
  );
}
