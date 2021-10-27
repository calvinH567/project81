import * as React from 'react';
import { Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import tabNavigator from './tabNavigation'
import Feed from '../screens/feed'
import CreatePost from '../screens/createPost'
import Profile from '../screens/profile'

const DrawNavigate = ()=>{
<Drawer.Navigator>
<Drawer.Screen name = 'Home' component = {tabNavigator}/>
<Drawer.Screen name = 'Profile' component = {Profile}/>
</Drawer.Navigator>
}
export default DrawNavigate