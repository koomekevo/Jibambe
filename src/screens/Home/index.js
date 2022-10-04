/* eslint-disable no-unused-vars */
import React from 'react';
import {View, Text} from 'react-native';
import Post from '../../components/Post';

const post1 = {
  id: 'p1',
  videoUri:
    'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
  user: {
    id: 'u1',
    username: 'koomekevo',
    imageUri:
      'https://pbs.twimg.com/profile_images/1541663888600711168/-7irn83H_400x400.jpg',
  },
  description: 'come my girl @caro',
  songName: 'NF - The Search',
  songImage:
    'https://pbs.twimg.com/profile_images/1541663888600711168/-7irn83H_400x400.jpg',
  likes: 123,
  comments: 12,
  shares: 44,
};

const Home = () => {
  return (
    <View>
      <Post post={post1} />
    </View>
  );
};

export default Home;
