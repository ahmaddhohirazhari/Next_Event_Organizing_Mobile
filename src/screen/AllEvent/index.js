/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import axios from '../../utils/axios';

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
          `product?searchName=&sort=&limit=10&page=${page}&searchDateCreated=`,
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

  const ListHeader = () => {
    return (
      <>
        <View style={styles.content}>
          <View style={styles.search}>
            <Text>Search</Text>
          </View>
          <View style={styles.sort}>
            <Text>Sort</Text>
          </View>
        </View>
      </>
    );
  };

  return (
    <View style={{margin: 10}}>
      <FlatList
        data={data}
        numColumns="1"
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View style={styles.card}>
            <Text style={{color: 'white'}}>{item.name}</Text>
          </View>
        )}
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

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
  },
  search: {
    flex: 4,
  },
  sort: {
    flex: 2,
  },
  card: {
    paddingHorizontal: 20,
    paddingVertical: 25,
    alignItems: 'center',
    borderRadius: 20,
    marginBottom: 10,
    elevation: 2,
    marginHorizontal: 2,
    flex: 1,
    backgroundColor: 'brown',
  },
});
