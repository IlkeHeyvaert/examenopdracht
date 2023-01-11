import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MusicItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectMovie(props.id)}>
      <View style={styles.musicItem}>
        <Text>{props.title}</Text>
        <Text>{props.content}</Text>
        <Text>{props.template}</Text>
      </View>
    </TouchableOpacity>

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