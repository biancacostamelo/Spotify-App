import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "../paginas/Home";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Biblioteca from "./Biblioteca";
import Buscar from "./Buscar";

const Tab = createBottomTabNavigator();

export default function RotasTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#0F0F0F" },
        tabBarActiveTintColor: "white",
        tabBarInactiveTintColor: "gray",
        headerStyle: {
          backgroundColor: "#0F0F0F",
        },
        headerTintColor: "#FFF",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
      }}
    >
     <Tab.Screen
        name="Sua biblioteca"
        component={Biblioteca}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={24} color="white" />
          ),
        }}
      />
      
      <Tab.Screen
        name="Buscar"
        component={Buscar}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="search1" size={24} color="white" />
          ),
        }}
      />
      <Tab.Screen
        name="Inicio"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color="white" size={size} />
          ),
        }}
      />

     
    </Tab.Navigator>
  );
}
