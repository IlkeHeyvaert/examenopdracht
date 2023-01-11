import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import MusicDetails from '../components/MusicDetails';

const DetailsScreen = ({ route, navigation }) => {
  const { movieId } = route.params;


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
      <MusicDetails movieId={movieId} />
      <Button
        title="Go to Music"
        onPress={() => navigation.navigate('Music')}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
  }
});
export default DetailsScreen;