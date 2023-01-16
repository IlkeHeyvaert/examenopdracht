import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView, TouchableOpacity, Button, TouchableWithoutFeedback} from 'react-native';


import MusicItem from  '../components/MusicItem.js';

const MusicScreen = ({navigation}) =>{
  
  const [music, setMusic] = useState([]); 
  const  [favorites, setFavorites] = useState ([]);
  const  [profile, setProfile] = useState ([]);


    
  const getMusic = async () => { //-> assincrone functie, pas na een tijd uitgevoerd, je weet wanneer, pas api wanneer app al klaar staat
    
      try { //stuk code proberen als het niet lukt, error afprinten
        const response = await fetch("https://ilkeheyvaertdevelopment3.be/wp-json/wp/v2/posts?categories=4&_embed&per_page=20", { //data ophalen alles, response = wat je terugkrijgt van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
        const json = await response.json(); //naar het  juiste bestandsformaat omzetten
        setMusic(json);
      } 
      catch (error) {
        console.error(error);  
      }
    }
   

    useEffect(() => {
        getMusic();
    }, []);

    const addFavorites = (id) => {
      const favorite = music.find( c => c.id == id); //de juiste muziek zoeken in de array van alle posts
      if(favorites.includes(favorite) === false) { //als de muziek nog niet terug gevonden is in de array van de favorieten, dan pas toevoegen --> geen dubbele muziek
        
        setFavorites((currentFavorites) => [...currentFavorites, favorite ]  );
      }
    }
  
    console.log(music);

   
         
//laad search results wanneer je in textinput typt
const getMusicByTitleSearch = async (enteredText) => {//argument meegegeven door onChangeText
  try {
    if (enteredText.length > 3) {
     
      const response = await fetch("https://ilkeheyvaertdevelopment3.be/wp-json/wp/v2/posts?categories/byTitle/" + enteredText + "/", { //data ophalen alles, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
      const json = await response.json();
      console.log(json);
      setMusic(json.results);
    }
  } catch (error) {
    console.error(error);
  }
}

    return (
        <View style={styles.screen}>
          <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Favorites', {favorites: favorites} ) }}>
        <Text  style = {styles.button}>Go to favorites</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Profile', {profile: profile} ) }}>
        <Text  style = {styles.button}>Go to profile</Text>
      </TouchableWithoutFeedback>
         <View style={styles.search}>
         <TextInput
        placeholder="search music"
        style={styles.input}
        onChangeText={getMusicByTitleSearch}//geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      /></View> 
           <FlatList
          numColumns={2}
          data={music}
          renderItem={({ item }) => (
            <MusicItem
            id={item.id}
            title={item.title.rendered}
            image= {item._embedded['wp:featuredmedia']['0'].source_url}
            addFavorites={addFavorites}
            navigation={navigation}
            onSelectMusic={(selectedId) => { navigation.navigate('Detail', { id: selectedId,  title: item.title.rendered, image: item._embedded['wp:featuredmedia']['0'].source_url, discription: item.content.rendered,  }) }}
            />
            )
          }
          
        />
        
      

        </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 40,
    
  },
  search: {
    paddingLeft: 50,
    paddingTop: -60,
  },
  music:{
    bottom:45,

  },
  button:{
    backgroundColor: "#3883C5", 
    color: "white",
    textAlign:"center",
    padding: 11,
    bottom: 34, 
    textTransform: "uppercase"
  }
});
export default MusicScreen;

