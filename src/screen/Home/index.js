/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import IconSearch from 'react-native-vector-icons/AntDesign';
import axios from '../../utils/axios';
import defaultImage from '../../assets/event.png';

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
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            borderColor: 'white',
            margin: 20,
            paddingHorizontal: 10,
            borderRadius: 20,
          }}>
          <IconSearch name="search1" color="white" size={30} />
          <TextInput
            style={{color: 'white', width: '80%'}}
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
        <View style={{backgroundColor: '#222B45'}}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
              backgroundColor: '#FCFCFC',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <Text
              style={{
                fontFamily: 'Poopins-Bold',
                fontSize: 20,
                color: '#373A42',
              }}>
              Events For You
            </Text>
            <Image source={require('../../assets/filter.png')} />
          </View>
        </View>
        <FlatList
          horizontal={true}
          data={data}
          style={{backgroundColor: 'white'}}
          renderItem={({item}) => (
            <View
              style={styles.card}
              onPress={() => handleDetail(item.eventId)}>
              <Image
                source={
                  item.image
                    ? {
                        uri: `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${item.image}`,
                      }
                    : defaultImage
                }
                style={{width: '100%', height: '100%', borderRadius: 30}}
              />
              <View style={{position: 'absolute', bottom: 30, left: 25}}>
                <Text style={{color: 'white'}}>{item.dateTimeShow}</Text>
                <Text style={{color: 'white'}}>{item.name}</Text>
                <TouchableOpacity onPress={() => handleDetail(item.eventId)}>
                  <Text>GO</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={item => item.eventId}
        />

        {/* {data.map((item)=>(
      ))} */}

        <Button title="Detail Screen" onPress={navDetail} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#3366FF'},
  sortDateContainer: {
    backgroundColor: '#222B45',
    width: '100%',
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-around',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 100,
  },
  dateContainer: {
    alignItems: 'center',
    borderColor: '#FF8900',
    borderWidth: 2,
    padding: 10,
    borderRadius: 16,
  },
  date: {color: '#FF8900'},
  header: {color: 'brown'},
  card: {
    width: 160,
    height: 276,
    marginHorizontal: 15,
  },
  input: {
    paddingVertical: 15,
    margin: 12,
    borderColor: '#C1C5D0',
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
  },
});
