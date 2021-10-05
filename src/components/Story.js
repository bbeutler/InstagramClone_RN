import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ProfilePicture from './ProfilePicture';

const Story = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    textAlign: 'center',
  },
});

export default Story;
