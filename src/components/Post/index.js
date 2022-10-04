/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback, Image} from 'react-native';
import Video from 'react-native-video';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <Video
          source={{
            uri: 'https://d8vywknz0hvjw.cloudfront.net/fitenium-media-prod/videos/45fee890-a74f-11ea-8725-311975ea9616/proccessed_720.mp4',
          }}
          style={styles.video}
          onError={(e: LoadError) => console.log(e)}
          resizeMode={'cover'}
          repeat={true}
          paused={paused}
        />
      </TouchableWithoutFeedback>
      <View style={styles.uiContainer}>
        <View style={styles.rightContainer}>
          <Image
            style={styles.profilePicture}
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1541663888600711168/-7irn83H_400x400.jpg',
            }}
          />
          <View style={styles.iconContainer}>
            <Entypo name={'beamed-note'} size={40} color="#fff" />
            <Text style={styles.statsLabel}>123</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name={'beamed-note'} size={40} color="#fff" />
            <Text style={styles.statsLabel}>123</Text>
          </View>
          <View style={styles.iconContainer}>
            <Entypo name={'beamed-note'} size={40} color="#fff" />
            <Text style={styles.statsLabel}>123</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@koomekevo</Text>
          <Text style={styles.description}>hello my girl @caro</Text>
          <View style={styles.songRow}>
            <Entypo name={'beamed-note'} size={24} color="#fff" />
            <Text style={styles.songName}>Nf - The search</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
