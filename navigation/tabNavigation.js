import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feed from '../screens/feed'
import CreatePost from '../screens/createPost'

const TabNav = createBottomTabNavigator()

const tabNavigator = ()=>{
<TabNav.Navigator
screenOptions={({ route }) => ({
     tabBarIcon: ({ focused, color, size }) => {
       let iconName;

       if (route.name === 'Feed') {
         iconName = focused
           ? 'book'
           : 'book-outline';
       } else if (route.name === 'CreateStory') {
         iconName = focused ? 'create' : 'create-outline';
       }

       // You can return any component that you like here!
       return <Ionicons name={iconName} size={size} color={color} />;
     },
     tabBarActiveTintColor: 'tomato',
     tabBarInactiveTintColor: 'gray',
   })}
   >

 <TabNav.Screen component={Feed} name="Feed" />
 <TabNav.Screen component={CreatePost} name="CreatePost" />
</TabNav.Navigator>

}
export default tabNavigator