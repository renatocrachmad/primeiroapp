import { StatusBar } from 'expo-status-bar';
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Banner from './assets/banner.webp';

export default function App() {

  const handleClick = () => {
    Alert.alert("Bem vindo!")
  }
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Text style={styles.title}>Hello word</Text> */}

      {/* <TouchableOpacity style={styles.button} onPress={handleClick}>
        <Text style={styles.textButton}>Entrar</Text>
      </TouchableOpacity> */}

      {/* <Button title="Entrar buton 2" /> */}

      <Image source={Banner} alt="Banner" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 50,
  },

  button: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
  },

  textButton: {
    fontSize: 30,
    color: '#000'
  }
})
