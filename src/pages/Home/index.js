import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View>
        <Header name='Mauricio Junior' />
      <Text>Sujeitos programadores</Text>
      <StatusBar style="auto" />
    </View>
  );
}
