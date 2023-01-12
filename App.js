
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Searchbar } from 'react-native-paper';
/*import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';*/

import FavoritesScreen from './screens/FavoritesScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';
import MusicScreen from './screens/MusicScreen.js'; 
import DetailsScreen from './screens/DetailsScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
		
   <NavigationContainer>
     <Stack.Navigator>
       <Stack.Screen name="Music" component={(MusicScreen)} /> 
       <Stack.Screen name="Detail" component={(DetailsScreen)} /> 
       <Stack.Screen name="Profile" component={(ProfileScreen)} />
       <Stack.Screen name="Favorites" component={(FavoritesScreen)} />  
   </Stack.Navigator> 
   </NavigationContainer> 
   
   ); 
  } 
  