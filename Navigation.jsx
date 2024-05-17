import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurentScreen from "./screens/RestaurentScreen";

const Stack = createNativeStackNavigator();


const Navigation =() =>{
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Restaurent" component={RestaurentScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}

export default Navigation;