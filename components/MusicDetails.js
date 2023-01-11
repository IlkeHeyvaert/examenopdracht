
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, FlatList } from 'react-native';



const MusicDetails = props => {
  

  const getMusicDetailsById = async () => {
    try {
      const response = await fetch ("https://ilkeheyvaertdevelopment3.be/wp-json/wp/v2/posts?categories=4", {

            })
      const json = await response.json();
      setMusicDetails(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getMusicDetailsById();
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList 
        
            keyExtractor={item => item.id}
            
            renderItem={({item}) => (
                /*<MusicScreen
                id={item.id}
                title={item.title.rendered}
                
                />*/
           <View>
                <Text>{item.template.rendered}</Text>
                <Text>{item.title.rendered}</Text>
                <Text>{item.content.rendered}</Text>
                <Text>{item.excerpt.rendered}</Text>
            </View>
            
          
    )}
    />
 </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  details: {
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  filmPoster: {
    width: '100%',
    height: 450
  },
  release: {
    fontStyle: 'italic',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'right',
  }
});
export default MusicDetails;