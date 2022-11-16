/* eslint-disable no-shadow */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';

export default function Profile(props) {
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState('');
  console.log(data);
  useEffect(() => {
    getUserId();
    getData();
  }, [userId]);

  const getUserId = async () => {
    const data = await AsyncStorage.getItem('userId');
    setUserId(data);
  };
  console.log(userId);

  const getData = async () => {
    try {
      const result = await axios.get(`/user/${userId}`);
      setData(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        border: 2,
      }}>
      <View style={{padding: 20, alignItems: 'center'}}>
        <Image
          source={require('../../assets/event.png')}
          style={{
            width: 80,
            height: 80,
            borderRadius: 100,
            borderColor: '#3366FF',
            borderWidth: 4,
          }}
        />
        <Text
          style={{
            color: '#3493D9',
          }}>
          Change profile photo
        </Text>
      </View>
      <View style={{padding: 10}}>
        <View>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Name
          </Text>
          <TextInput
            placeholder="name"
            defaultValue={data[0]?.name}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Username
          </Text>
          <TextInput
            placeholder="username"
            defaultValue={data[0]?.username}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Email"
            defaultValue={data[0]?.email}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <TextInput
            placeholder="Phone Number"
            defaultValue={data[0]?.phoneNumber}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Gender
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={data[0]?.gender}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Profession
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={'Programmer'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Nationality
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={'Indonesia'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
        <View style={{paddingVertical: 10}}>
          <Text
            style={{
              opacity: 0.5,
            }}>
            Birthday
          </Text>
          <TextInput
            placeholder="accountname"
            defaultValue={'Male'}
            style={{
              fontSize: 16,
              borderBottomWidth: 1,
              borderColor: '#CDCDCD',
            }}
          />
        </View>
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
          Save Change
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
