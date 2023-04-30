import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Balance from '../../components/Balance';
import Header from '../../components/Header';

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Mauricio Junior' />
        <Balance balance='9.250.90' expenses='-527,00' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    }
})