import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList} from 'react-native';

/*import Musicitem from  './components/MusicItem';*/

const MusicScreen = ({navigation}) =>{

  

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

  /* const [input, setInput] = useState("");
    console.log(input);*/

    return (
        <View style={styles.screen}>
            <FlatList 
            data={music}
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
                
            </View>
          /*  <Text>{item.excerpt.rendered}</Text>*/
    )}
    />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
      padding: 50,
    }
  });
export default MusicScreen;

