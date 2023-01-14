import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, FlatList} from 'react-native';

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
    </View>

    )

}
export default FavoritesScreen;

