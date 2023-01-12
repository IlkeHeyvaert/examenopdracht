import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView, TouchableOpacity, Button} from 'react-native';

/*import MusicItem from  './components/MusicItem.js';*/

const ProfileScreen = ({navigation}) =>{

  

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
           <FlatList
          keyExtractor={item => item.id.toString()}
          data={music}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { id: item.id })}>
                <View>
                <Text>{item.template.rendered}</Text>
                  <Text>{item.title.rendered}</Text>
                </View>
              </TouchableOpacity>
            )
          }
          
        />
        <Button
          title="Go back"
          onPress={() => navigation.navigate('Music')}
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
export default ProfileScreen;

