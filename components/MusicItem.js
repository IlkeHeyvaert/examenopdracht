import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MusicItem = props => {
  return (
    
      <View style={styles.musicItem}>
        <Text>{props.title}</Text>
      </View>
    

  );
}

const styles = StyleSheet.create({
  musicItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  }
});
export default MusicItem;