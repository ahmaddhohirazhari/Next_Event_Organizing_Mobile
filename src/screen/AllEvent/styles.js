import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  card: {
    width: 200,
    height: 280,
    marginVertical: 5,
    marginHorizontal: 5,
  },
  flatlist: {backgroundColor: 'white'},
  eventDate: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: 'white',
  },
  container: {flex: 1, backgroundColor: '#3366FF'},
  search: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
    margin: 20,
    paddingHorizontal: 10,
    borderRadius: 20,
  },
  eventName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    color: 'white',
  },
  image: {width: 180, height: 260, borderRadius: 30, marginHorizontal: 5},
  detail: {position: 'absolute', bottom: 100, paddingHorizontal: 5},
  text: {color: 'white'},
});
export default styles;
