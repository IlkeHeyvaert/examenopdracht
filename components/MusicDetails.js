import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MusicDetails = props => {
  return (
    <TouchableOpacity activeOpacity={0.5}>
      <View style={styles.musicItem}>
        <Text>{props.title}</Text>
        <Text>{props.content}</Text>
      </View>
    </TouchableOpacity>

  );
}

const styles = StyleSheet.create({
  musicItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'blue',
    borderStyle: 'solid',
    borderWidth: 2,
  }
});
export default MusicDetails;