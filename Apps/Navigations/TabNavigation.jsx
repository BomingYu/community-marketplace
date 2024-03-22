import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ExploreScreen from "../Screens/ExploreScreen";
import HomeScreen from "../Screens/HomeScreen";
import AddPostScreen from "../Screens/AddPostScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import { FontAwesome, MaterialIcons, Ionicons , AntDesign} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false , tabBarActiveTintColor:'orange' , tabBarInactiveTintColor:'black'}}>
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="font-bold" style={{ color: color }}>
              Home
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: ({ color }) => (
            <Text className="font-bold" style={{ color: color }}>
              Explore
            </Text>
          ),
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen name="addpost" component={AddPostScreen} options={{
        tabBarLabel: ({ color }) => (
          <Text className="font-bold" style={{ color: color }}>
            Add
          </Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="add-circle-outline" size={size} color={color} />
        ),
      }}/>
      <Tab.Screen name="profile" component={ProfileScreen} options={{
        tabBarLabel: ({ color }) => (
          <Text className="font-bold" style={{ color: color }}>
            Profile
          </Text>
        ),
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="profile" size={size} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  );
}
