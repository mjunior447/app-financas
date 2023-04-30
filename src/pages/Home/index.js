import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Actions from '../../components/Actions';
import Balance from '../../components/Balance';
import Header from '../../components/Header';
import Movements from '../../components/Movements';

const list = [
    {
        id: 1,
        label: 'Boleto conta de luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix cliente X',
        value: '2.500,00',
        date: '21/06/2022',
        type: 1 // receitas / entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '7.200,00',
        date: '03/01/2023',
        type: 1 // receitas / entradas
    }
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header name='Mauricio Junior' />

        <Balance balance='9.250.90' expenses='-527,00' />

        <Actions />

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList
            style={styles.list}
            data={list}
            keyExtractor={(item) => String(item.id)}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => <Movements data={item} />}
        />

        <StatusBar/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFA'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14
    },
    list: {
        marginStart: 14,
        marginEnd: 14
    }
})