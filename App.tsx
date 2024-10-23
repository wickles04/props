import { SafeAreaView, StatusBar } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from "./screens/Home"

export default function App() {
  return (
      <SafeAreaView>

        <StatusBar />
        <Home />
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:StatusBar.currentHeight || 0,

  },
});
