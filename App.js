import * as React from "react";
import { useState, useEffect } from "react";
import { Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component mounted");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <View>
      <Text>Count: {count}</Text>
      {/* <HomeScreen /> */}
    </View>
  );
}

export default App;
