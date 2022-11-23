import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import DefaultHeader from '../../components/Header/default';
import styles from './styles';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function Booking(props) {
  const checkout = () => {
    props.navigation.navigate('Payment');
  };
  return (
    <>
      <DefaultHeader {...props} />
      <ScrollView style={styles.booking}>
        <View style={styles.seat}>
          <Image source={require('../../assets/seat.png')} />
          <View style={styles.ticket}>
            <Text style={styles.ticketText}>Tickets</Text>
            <Text style={styles.sort}>By Price</Text>
            <Icon name="sort" size={35} color="blue" />
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/reg.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section REG, Row 1</Text>
              <Text style={styles.sectionLeft}>12 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$15</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/vip.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section VIP, Row 2</Text>
              <Text style={styles.sectionLeft}>9 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$35</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
          </View>
          <View style={styles.section}>
            <Image source={require('../../assets/vvip.png')} />
            <View style={styles.sectionCategory}>
              <Text style={styles.sectionText}>Section VVIP, Row 3</Text>
              <Text style={styles.sectionLeft}>6 seat available</Text>
            </View>
            <View style={styles.sectionPrice}>
              <Text style={styles.sectionText}>$50</Text>
              <Text style={styles.sectionLeft}>Per person</Text>
            </View>
          </View>
          <View style={styles.quantity}>
            <Text style={styles.quantityText}>Quantity</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.ticketSection}>Ticket Section</Text>
            <Text style={styles.category}>VIP</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.quantityText}>Quantity</Text>
            <Text style={styles.VIP}>2</Text>
          </View>
          <View style={styles.checkout}>
            <Text style={styles.quantityText}>Total Payment</Text>
            <Text style={styles.VIP}>$70</Text>
          </View>
          <TouchableOpacity style={styles.buttonCheckout} onPress={checkout}>
            <Text style={styles.buttonText}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
