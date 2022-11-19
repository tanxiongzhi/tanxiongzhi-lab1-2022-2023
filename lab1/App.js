import * as React from "react";
import {
  View,
  Text,
} from "react-native";

function App() {
  return (
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      paddingHorizontal: 20
    }}>
      <Text style={{
        fontSize: 20
      }}>
        We will create a movie list. Click the movie to view the movie details
      </Text>
    </View>
  );
}

export default App;
