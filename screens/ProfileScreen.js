import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, Text, View, Image, TextInput, Pressable, FlatList, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Alert, Button, Linking} from 'react-native';

const supportedURL = 'https://ilkeheyvaertdevelopment3.be';

const ProfileScreen = (navigation) =>{

  const OpenURLButton = ({url, children}) => {
    const handlePress = useCallback(async () => {
      // Checking if the link is supported for links with custom URL scheme.
      const supported = await Linking.canOpenURL(url);
  
      if (supported) {
        // Opening the link with some app, if the URL scheme is "http" the web link should be opened
        // by some browser in the mobile
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    }, [url]);
  
    return <Button title={children} onPress={handlePress} />;
  };
  
  const [music, setMusic] = useState([]); 
 return (
        <View style={styles.screen}>
        
      <View style={styles.body}>
        <View style={styles.avatarContainer}>
          <Text style={styles.avatar}>IH</Text>
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Ilke Heyvaert</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Email:</Text>
          <Text style={styles.infoText}>r0900651@student.thomasmore.be</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Location:</Text>
          <Text style={styles.infoText}>Belgium</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.infoLabel}>Portfolio:</Text>
          <Text style={styles.infoText}>https://ilkeheyvaertdevelopment3.be</Text>
        </View>
        <View style={styles.url}>
      <OpenURLButton url={supportedURL}>Open Supported URL</OpenURLButton>
    </View>
      </View>
      <TouchableWithoutFeedback  onPress={() => { navigation.navigate('Music', {music: music} ) }}>
  <Text  style = {styles.button}>Go to profile</Text>
</TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#ECF0F3',
  },
  body: {
    marginTop:120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  avatar: {
    fontSize: 72,
    fontWeight: '700',
  },
  nameContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666666',
    marginRight: 8,
  },
  infoText: {
    fontSize: 16,
  },
  button:{
    backgroundColor: "#6CA9D9", //lightblue
    color: "white",
    textAlign:"center",
    padding: 11,
    bottom: -108, 
    textTransform: "uppercase"
  },
  url: {
    
    
  },
});
export default ProfileScreen;

