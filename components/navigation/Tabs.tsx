import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from '@expo/vector-icons';
import { Platform } from "react-native";
import React from "react";
import Home from "../../pages/home/Home";
import Login from "../../pages/auth/login/Login";
import Register from "../../pages/auth/register/Register";
import Payment from "../../pages/payment/Payment";
import Discover from "../../pages/discover/Discover";
import Settings from "../../pages/settings/Settings";
import Explore from "../../pages/explore/Explore";
import Notifications from "../../pages/notifications/Notifications";
import Description from "../../pages/description/Description";

const Tab = createBottomTabNavigator();

const Tabs = () => {

  return (
    <Tab.Navigator
      backBehavior="history"
      initialRouteName="discover"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: any;

          if (route.name === "explore") {
            iconName = focused
              ? "map-sharp"
              : "map-outline";
          } else if (route.name === "discover") {
            iconName = focused ? "earth" : "md-earth-outline";
          } else if (route.name === "settings") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "notifications") {
            iconName = focused ? "notifications-sharp" : "notifications-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={22} color={color} />;
        },
        animationTypeForReplace: 'pop',
        animationEnabled: false,
        headerShown: false,
        tabBarActiveTintColor: "#F75C03",
        tabBarInactiveTintColor: "#f8fafc",
        tabBarLabelStyle: {
          fontSize: 13,
        },
        tabBarStyle: {
          height: 70,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          position: "absolute",
          bottom: 20,
          left: 10,
          right: 10,
          borderRadius: 20,
          backgroundColor: route.name === "home" ? "#2f4a55" : "#020617",
          elevation: 0,
          borderTopWidth: 0,
          borderColor: route.name === "name" ? "white" : "black",
        },
        tabBarShowLabel: false,
      })}
    >
      <Tab.Screen name="discover" component={Discover} />
      <Tab.Screen name="explore" component={Explore} />
      <Tab.Screen name="notifications" component={Notifications} />
      <Tab.Screen name="settings" component={Settings} />

      <Tab.Screen
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
        name="login"
        component={Login}
      />
      <Tab.Screen
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
        name="payments"
        component={Payment}
      />
      <Tab.Screen
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
        name="description"
        component={Description}
      />
      <Tab.Screen
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
        name="home"
        component={Home}
      />

      <Tab.Screen
        options={() => ({
          tabBarStyle: {
            display: "none",
          },
          tabBarButton: () => null,
        })}
        name="register"
        component={Register}
      />
    </Tab.Navigator>
  );
};

export default Tabs;