import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView, TouchableOpacity, Button} from 'react-native';

import MusicItem from  '../components/MusicItem.js';

const FavoritesScreen = ({navigation}) =>{

  

    const [music, setMusic] = useState ([]);

    const getMusic = async () => {
        try {
            const response = await fetch ("https://ilkeheyvaertdevelopment3.be/wp-json/wp/v2/posts?categories=4", {

            })
            const json = await response.json();
            console.log(json);
            setMusic(json);
           console.log(music);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getMusic();
    }, []);

   

    return (
        <View style={styles.screen}>
<View style={styles.flexbox2}>
            <Text style={styles.products}>The Favorite Music</Text>
          </View>

           <FlatList
          keyExtractor={item => item.id.toString()}
          data={music}
          renderItem={({ item }) => (
            <MusicItem
            title={item.title.rendered}
            imageUri={{uri: 'https://ilkeheyvaertdevelopment3.be/mercy-shawn-mendes/'}}
            />
  
          )}
          
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
        </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
    flex: 1,
    justifyContent: 'center',
  }
});
export default FavoritesScreen;

