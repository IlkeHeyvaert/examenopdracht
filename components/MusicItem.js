import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button, TouchableWithoutFeedback } from 'react-native';



const MusicItem = (props) => {


  return (
    <TouchableOpacity style={styles.musicItems} activeOpacity={0.5}  onPress={() => props.onSelectMusic(props.id)}>
      <View style={styles.musicItem}>
      <Image style={styles.image}  source={{uri: props.image, }} />
        <Text>{props.title}</Text>
      </View>
      <TouchableWithoutFeedback onPress = {() => props.addFavorites(props.id) }>
        <Text  style = {styles.button}>Toevoegen aan favorieten</Text>
      </TouchableWithoutFeedback>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
musicItems: {
    flex: 1,
    alignItems: 'center',
  },
  musicItem: {
    margin: 20,
    padding: 20,
    marginVertical: 5,
    backgroundColor: 'blue',
    
    alignItems: 'center',
  },
  image:{
    width: 100,
    height: 100,
  },
});
export default MusicItem;