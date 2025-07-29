import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Home} from './src/screens/Home';

export default function App() {
  return (
      <Home />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.8,
    backgroundColor: '#912af1',
    padding: 20,
    fontSize: 20,
    alignItems: 'flex-start',
    textAlign: 'justify',
    justifyContent: 'flex-end',
  },
  bottom: {
    flex: 9,
    backgroundColor: '#ffffff',
    padding: 10,
    fontSize: 50,
    alignItems: 'flex-start',
    justifyContent: 'flex-start'
  },
  fonte: {
    color: '#ffffff',
    fontSize: 40,
    padding: 0,
    fontWeight: '700'
  },
  fonte2: {
    fontSize: 35,
    fontWeight: '600',
    paddingLeft: 10
  },
  fonte3: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff'
  }

});
