/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import Post from '../../components/Post';
import posts from '../../../data/posts';

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get('window').height - 1}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
      />
    </View>
  );
};

export default HomeScreen;
