import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Forum from "./screens/forum/index";

import { MaterialCommunityIcons } from "react-native-vector-icons";

import User from "./screens/user/index";
import RootCourse from "./screens/course/RootCourse";
import Document from "./screens/document";
import RootBlog from "./screens/blog/RootBlog";
import RootLightNovel from "./screens/lightnovel/RootLightNovel";
const Tab = createBottomTabNavigator();
function TabNav(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#0000ff",
      }}
    >
      <Tab.Screen
        name="Forum"
        component={RootLightNovel}
        options={{
          tabBarLabel: "Thảo luận",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "home" : "home-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "Chia sẻ",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "book" : "book-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
        name="Blog"
        component={RootBlog}
      />
      <Tab.Screen
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ tintColor, focused }) => {
            return (
              <MaterialCommunityIcons
                name={focused ? "account-circle" : "account-circle-outline"}
                color={"#007bff"}
                size={20}
              />
            );
          },
        }}
        name="User"
        component={User}
      />
    </Tab.Navigator>
  );
}

TabNav.propTypes = {};

export default TabNav;
