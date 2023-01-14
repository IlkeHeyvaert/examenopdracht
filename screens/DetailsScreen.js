import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableWithoutFeedback } from 'react-native';


const DetailsScreen = ({ route, navigation }) => {

  return (
    <View style={styles.screen}>
       <ScrollView style={styles.info}>
          <Text style={styles.title}>{route.params.title}</Text>
            <Image style={styles.image} source={{uri: route.params.image,}}/>
            <Text style={styles.description}> { route.params.discription} </Text>   
      </ScrollView>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Music')}>
        <Text style = {styles.button}>Go back to music</Text>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  info:{
    marginBottom: 20,
  },
  image :{
    height: 200,
    width: 200,
  },
  title:{
    fontWeight: "bold",
    fontSize: 20,
    
  },
  button:{
    backgroundColor: "#F37E21",
    color: "white",
    textAlign:"center",
    padding: 10,
    bottom: 25, 
    borderRadius: 5,
    textTransform: "uppercase"
  }
});
export default DetailsScreen;
