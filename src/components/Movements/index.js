import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Movements({data}) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {
                    showValue ? (
                        <Text
                            style={data.type ? styles.value : styles.expenses}
                        >
                            {data.type ? `R$ ${data.value}` : `R$ -${data.value}`}
                        </Text>
                    ) : (
                        <View style={styles.skeleton}></View>
                    )
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#DADADA',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8
    },  
    date: {
        color: '#DADADA',
        fontWeight: 'bold'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16
    },
    value: {
        fontSize: 16,
        color: '#2ECC71',
        fontWeight: 'bold'
    },
    expenses: {
        fontSize: 16,
        color: '#E73C3C',
        fontWeight: 'bold'
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#DADADA',
        borderRadius: 8
    }
})