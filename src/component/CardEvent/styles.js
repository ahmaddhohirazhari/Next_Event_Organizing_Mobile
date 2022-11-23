import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 260,
    height: 376,
    marginHorizontal: 15,
  },
  flatlist: {backgroundColor: 'white'},
  eventDate: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  eventName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: 'white',
  },
  image: {width: 260, height: 376, borderRadius: 30, marginRight: 12},
  detail: {position: 'absolute', bottom: 30, paddingHorizontal: 12},
  text: {color: 'white'},
});
export default styles;
