/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
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
          <Text style={{fontSize: 20, color: '#fff'}}>side</Text>
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.handle}>@daviddobrik</Text>
          <Text style={styles.description}>hello my boy @borat</Text>
          <View>
            <Entypo name={'beamed-note'} size={24} color="#fff" />
            <Text style={styles.songName}>Nf - The search</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Post;
