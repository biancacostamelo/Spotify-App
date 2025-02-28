import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Rotas from './paginas/Rotas';
import Home from './paginas/Home'

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Rotas />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
