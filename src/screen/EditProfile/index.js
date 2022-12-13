/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import axios from '../../utils/axios';
import DefaultHeader from '../../component/Header/default';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import DatePicker from 'react-native-date-picker';
import defaultImage from '../../assets/profileDefault.jpg';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {
  GetUserById,
  UpdateImage,
  UpdateProfile,
} from '../../stores/actions/user';

export default function EditProfile(props) {
  const dispatch = useDispatch();
  const dataUser = useSelector(state => state.user.data);
  const [form, setForm] = useState(dataUser);
  const [edit, setEdit] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [formImage, setFormImage] = useState({});
  const userId = dataUser.userId;
  // console.log(dataUser.userId);

  useEffect(() => {
    getDataUser();
  }, [getDataUser, userId]);

  useEffect(() => {
    getDataUser();
  }, [getDataUser, userId]);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchCamera(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorMessage);
            }
            if (response.assets) {
              const source = {
                uri: response.assets[0].uri,
                type: response.assets[0].type,
                name: response.assets[0].fileName,
              };
              setFormImage({...formImage, image: source});
            }
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };
  const handleUpdateImage = async () => {
    try {
      const formData = new FormData();
      for (const data in formImage) {
        formData.append(data, formImage[data]);
      }

      const result = await axios.patch('user/updateImage', formData);
      ToastAndroid.show(result.data.msg, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };
  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        launchImageLibrary(
          {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 200,
            maxWidth: 200,
          },
          response => {
            if (response.didCancel) {
              console.log('User cancelled image picker');
            }
            if (response.errorCode) {
              console.log('ImagePicker Error: ', response.errorMessage);
            }
            if (response.assets) {
              const source = {
                uri: response.assets[0].uri,
                type: response.assets[0].type,
                name: response.assets[0].fileName,
              };
              setFormImage({...formImage, image: source});
            }
          },
        );
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handleEdit = () => {
    setEdit(true);
  };
  const handleChangeForm = (value, name) => {
    setForm({...form, [name]: value});
  };

  const getDataUser = useCallback(async () => {
    try {
      console.log('start');
      console.log(userId);
      const result = await dispatch(GetUserById(userId));
      console.log('finish');
      ToastAndroid.show(result.data.data[0], ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  });
  const handleUpdate = async () => {
    try {
      const result = await axios.patch('/user/updateUser', form);

      ToastAndroid.show(result.data.msg, ToastAndroid.SHORT);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <DefaultHeader {...props} />
      <ScrollView style={styles.profile}>
        <View style={styles.photoProfile}>
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
          <TouchableOpacity onPress={requestCameraPermission}>
            <Icon
              name="image-edit-outline"
              size={40}
              style={styles.editImage}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={requestGalleryPermission}>
            <Icon
              name="image-edit-outline"
              size={40}
              style={styles.editImage}
              color="blue"
            />
          </TouchableOpacity>
          <View style={styles.buttonSave}>
            <TouchableOpacity style={styles.button} onPress={handleUpdateImage}>
              <Text style={styles.save}>Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Name</Text>
          {edit ? (
            <TextInput
              style={styles.input}
              placeholderTextColor={'rgba(160, 163, 189, 1)'}
              // placeholder={dataUser.name}
              onChangeText={text => handleChangeForm(text, 'name')}
              value={form.name}
            />
          ) : (
            <View>
              <Text>{dataUser.name}</Text>
              <TouchableOpacity onPress={handleEdit}>
                <Text>Edit</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            onChangeText={text => handleChangeForm(text, 'username')}
            placeholder="username"
            value={form.username}
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            value={form.email}
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            onChangeText={text => handleChangeForm(text, 'phoneNumber')}
            value={form.phoneNumber}
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Gender</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            onChangeText={text => handleChangeForm(text, 'gender')}
            value={form.gender}
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Profession</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            onChangeText={text => handleChangeForm(text, 'profession')}
            value={form.profession}
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Nationality</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor={'rgba(160, 163, 189, 1)'}
            onChangeText={text => handleChangeForm(text, 'nationality')}
            value={form.nationality}
          />
        </View>
        <View style={styles.textEdit}>
          <Text style={styles.label}>Birtday Date</Text>
          <View style={styles.datePicker}>
            <TextInput
              style={styles.inputDate}
              placeholderTextColor={'rgba(160, 163, 189, 1)'}
              value={form.dateOfBirth}
            />
            <View style={styles.textEdit}>
              <TouchableOpacity title="Open" onPress={() => setOpen(true)}>
                <Icon name="clock-edit-outline" size={25} color="blue" />
                <DatePicker
                  modal
                  mode="date"
                  open={open}
                  date={date}
                  onConfirm={date => {
                    setOpen(false);
                    setDate(date);
                  }}
                  onCancel={() => {
                    setOpen(false);
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.buttonSave}>
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.save}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}
