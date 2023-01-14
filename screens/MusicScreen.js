import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView, TouchableOpacity, Button, TouchableWithoutFeedback} from 'react-native';


import MusicItem from  '../components/MusicItem.js';

const MusicScreen = ({navigation}) =>{
  const [filter, setFilters] =  useState(0);
  const [music, setMusic] = useState([]); 
  const  [favorites, setFavorites] = useState ([]);

  // Functies om de filters in te stellen
  const snowboard = () => { 
    setFilters((currentfilter) => currentfilter = 9); 
  }
  const ski = () => {
    setFilters((currentfilter) => currentfilter = 10); 
  }
  const wandelen = () => {
    setFilters((currentfilter) => currentfilter = 8);
  }
  const reset = () => {
    setFilters((currentfilter) => currentfilter = 0);
  }
  
  const getMusic = async () => { //-> assincrone functie, pas na een tijd uitgevoerd, je weet wanneer, pas api wanneer app al klaar staat
    if(filter === 0){
      try { //stuk code proberen als het niet lukt, error afprinten
        const response = await fetch("https://ilkeheyvaertdevelopment3.be/wp-json/wp/v2/posts?categories=4&_embed&per_page=20", { //data ophalen alles, response = wat je terugkrijgr van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
        const json = await response.json(); //naar het  juiste bestandsformaat omzetten
        setMusic(json);
      } 
      catch (error) {
        console.error(error);  
      }
    }
    else {
      try { //stuk code proberen als het niet lukt, error afprinten
        const response = await fetch("https://ilkeheyvaertdevelopment3.be/wp-json/wp/v2/posts?categories=4&categories="+ filter +"&_embed&per_page=20", { //data ophalen toegepast op de filter, response = wat je terugkrijgt van API = resultaat, await= //wachten tot fetch klaar is, !belangrijk!
          "method": "GET", //GET = data ophalen, POST = data verzenden
        })
        const json = await response.json(); //naar het  juiste bestandsformaat omzetten
        setMusic(json);
      } 
      catch (error) {
        console.error(error);
      }
    }
  }

    useEffect(() => {
        getMusic();
    }, []);

    const addFavorites = (id) => {
      const favorite = music.find( c => c.id == id); //het juiste product zoeken in de array van alle posts
      if(favorites.includes(favorite) === false) { //als het product nog niet terug gevonden is in de array van de favorieten, dan pas toevoegen --> geen dubbele producten
        setFavorites((currentFavorites) => [...currentFavorites, favorite ]  );
      }
    }
  
    console.log(music);

    return (
        <View style={styles.screen}>
           <FlatList
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          data={music}
          renderItem={({ item }) => (
            <MusicItem
            title={item.title.rendered}
            image= {item._embedded['wp:featuredmedia']['0'].source_url}
            addFavorites={addFavorites}
            navigation={navigation}
            onSelectMusic={(selectedId) => { navigation.navigate('Detail', { id: selectedId,  title: item.title.rendered, image: item._embedded['wp:featuredmedia']['0'].source_url, discription: item.content.rendered,  }) }}
            />
            )
          }
          
        />
        <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Favorites', {favorites: favorites} ) }}>
        <Text  style = {styles.button}>Go to favorites</Text>
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Profile', {profiles: profiles} ) }}>
        <Text  style = {styles.button}>Go to profile</Text>
      </TouchableWithoutFeedback>
        

        </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    paddingVertical: 50,
   
  },
  filters:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 45,
  },
  filter:{
    backgroundColor: "#F37E21", //oranje
    color: "white",
    textAlign:"center",
    borderRadius: 5,
    padding: 7,
    textTransform: "uppercase",
    margin: 7,
  },
  music:{
    bottom:45,

  },
  button:{
    backgroundColor: "#6CA9D9", //lightblue
    color: "white",
    textAlign:"center",
    padding: 11,
    bottom: 30, 
    textTransform: "uppercase"
  }
});
export default MusicScreen;

