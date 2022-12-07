/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  TextInput,
} from 'react-native';
import axios from '../../utils/axios';
import styles from './styles';
import moment from 'moment';
import IconSearch from 'react-native-vector-icons/AntDesign';
import defaultImage from '../../assets/event.png';

export default function AllEvent(props) {
  const [data, setData] = useState([]);
  const [totalPage, setTotalPage] = useState(10);
  const [page, setPage] = useState(1);
  const [refresh, setRefresh] = useState(false);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const [loadMore, setLoadMore] = useState(false);

  useEffect(() => {
    getDataProduct();
  }, [getDataProduct]);

  useEffect(() => {
    getDataProduct();
  }, [getDataProduct, page]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const getDataProduct = useCallback(async () => {
    try {
      if (page <= totalPage) {
        const result = await axios.get(
          '/event?page=&searchName=&searchDateShow=&sort=&limit=4',
        );
        if (page === 1) {
          setData(result.data.data);
        } else {
          setData([...data, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
      } else {
        setLast(true);
      }
      setRefresh(false);
      setLoading(false);
      setLoadMore(false);
    } catch (error) {}
  });

  const handleRefresh = () => {
    console.log('REFRESH SCREEN');
    setPage(1);
    setLast(false);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getDataProduct();
    }
  };

  const handleLoadMore = () => {
    console.log('GET DATA AGAIN');
    if (!loadMore) {
      // false
      const newPage = page + 1; // 1 + 1 = 2
      setLoadMore(true);
      if (newPage <= totalPage + 1) {
        setLoading(true);
        setPage(newPage);
      } else {
        setLoading(false);
      }
    }
  };
  const handleDetail = eventId => {
    props.navigation.navigate('Detail', {eventId: eventId});
  };

  const ListHeader = () => {
    return (
      <>
        {/* <View style={styles.content}>
          <View style={styles.search}>
            <Text>Search</Text>
          </View>
          <View style={styles.sort}>
            <Text>Sort</Text>
          </View>
        </View> */}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <IconSearch name="search1" color="white" size={30} />
        <TextInput
          style={styles.input}
          placeholderTextColor={'rgba(160, 163, 189, 1)'}
          placeholder="Event Name"
        />
      </View>
      <FlatList
        data={data}
        numColumns="2"
        style={styles.flatlist}
        renderItem={({item}) => (
          <View style={styles.card}>
            <TouchableOpacity
              onPress={() => {
                handleDetail(item.eventId);
              }}>
              <Image
                source={
                  item.image
                    ? {
                        uri: `https://res.cloudinary.com/dhohircloud/image/upload/v1663957109/${item.image}`,
                      }
                    : defaultImage
                }
                style={styles.image}
              />
            </TouchableOpacity>
            <View style={styles.detail}>
              <Text style={styles.eventDate}>
                {moment(item.dateTimeShow).format('ddd MMM Do , h:mm a')}
              </Text>
              <Text style={styles.eventName}>{item.name}</Text>
            </View>
          </View>
        )}
        // keyExtractor={item => item.eventId}
        onRefresh={handleRefresh}
        refreshing={refresh}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.1}
        ListHeaderComponent={ListHeader}
        ListFooterComponent={() => (
          <View style={{alignItems: 'center'}}>
            {last ? (
              <Text>-- No more data --</Text>
            ) : loading ? (
              <ActivityIndicator size="large" color="blue" />
            ) : null}
          </View>
        )}
      />
    </View>
  );
}
