import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';



const FavoritesItem = (props) => {


  return (
    <TouchableOpacity activeOpacity={0.5}  >
      <View style={styles.musicItem}>
        <Text>{props.title}</Text>
        <Image style={styles.image} source={{ uri: props.image, }}
      />
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  musicItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  },
  image:{
    width: 100,
    height: 100,
  }
});
export default FavoritesItem;