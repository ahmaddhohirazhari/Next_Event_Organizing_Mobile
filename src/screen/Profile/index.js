import React from 'react';
import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useSelector} from 'react-redux';
import defaultImage from '../../assets/profileDefault.jpg';

export default function Profile(props) {
  const dataUser = useSelector(state => state.user.data);

  const handleEdit = () => {
    props.navigation.navigate('EditProfile');
  };
  const handleChangePw = () => {
    props.navigation.navigate('ChangePassword');
  };
  return (
    <>
      <ScrollView style={styles.profile}>
        <View style={styles.profileBg}>
          <Image
            source={
              dataUser.image
                ? {
                    uri: `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${dataUser.image}`,
                  }
                : defaultImage
            }
            style={styles.photo}
          />
          <Text style={styles.profileName}>{dataUser.name}</Text>
          <Text
            style={
              styles.profileJob
            }>{`${dataUser.profession},${dataUser.nationality}`}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardText}>Card</Text>
          <TouchableOpacity>
            <Image source={require('../../assets/add.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.atm}>
          <Image source={require('../../assets/atm.png')} />
        </View>
        <View style={styles.bottom}>
          <View style={styles.edit}>
            <Image source={require('../../assets/edit.png')} />
            <TouchableOpacity style={styles.rowEdit} onPress={handleEdit}>
              <Text style={styles.textEdit}>Edit Profile</Text>
              <Icon name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
          <View style={styles.edit}>
            <Image source={require('../../assets/change.png')} />
            <TouchableOpacity style={styles.rowEdit} onPress={handleChangePw}>
              <Text style={styles.textEdit}>Change Password</Text>
              <Icon name="chevron-right" size={20} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}
