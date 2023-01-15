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
    paddingBottom: 80,
  },
  musicItem: {
    margin: 25,
    padding: 15,
    backgroundColor: '#9AACBC',
    borderRadius: 5,
    alignItems: 'center',
  },
  image:{
    width: 100,
    height: 100,
  },
  button:{
    backgroundColor: "#3883C5",
    color: "white",
    textAlign:"center",
    padding: 10,
  }
});
export default MusicItem;