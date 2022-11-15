import React from 'react';
import {
  ScrollView,
  Text,
  StyleSheet,
  Button,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import HeaderDetail from '../../component/Header/detail.js';

export default function Detail(props) {
  return (
    <>
      <HeaderDetail {...props} />
      <ScrollView>
        <ScrollView>
          <View>
            <Image
              source={require('../../assets/event.png')}
              style={{width: '100%'}}
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
              <Text>Detail</Text>
              <Text>
                After his controversial art exhibition "Tear and Consume" back
                in November 2018, in which guests were invited to tear up…
              </Text>
              <Text>Read More</Text>
              <Text>Location</Text>
              <Image source={require('../../assets/location.png')} />
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
