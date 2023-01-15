import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, FlatList, TouchableWithoutFeedback} from 'react-native';

import FavoritesItem from '../components/FavoritesItem.js';


const FavoritesScreen = ({ route, navigation }) => {
  console.log(route.params.favorites);

    return(
    <View>
         <FlatList //lussen, zoals for loop
           
        data={route.params.favorites}
        renderItem={({ item }) => (
          <FavoritesItem
            id = {item.id}
            title={item.title.rendered}
            image= {item._embedded['wp:featuredmedia']['0'].source_url}
          />
        )}
      />
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Music')}>
        <Text style = {styles.button}>Go back to music</Text>
      </TouchableWithoutFeedback>
    </View>

    )

}
const styles = StyleSheet.create({
  button:{
    backgroundColor: "#F37E21",
    color: "white",
    textAlign:"center",
    padding: 11,
    bottom: 0, 
    borderRadius: 5,
    textTransform: "uppercase"
  }
});
export default FavoritesScreen;

