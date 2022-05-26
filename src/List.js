import React from "react";
import { FlatList, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        padding: 30,
        backgroundColor: "red",
        margin: 10,
        color: "white"
    },
    heading : {
        fontSize : 25,
        textAlign : "center",
        paddingVertical : 10 
    }
});

const List = () => {

    const data = [
        {
            id: '1',
            name: 'Vishal'
        },
        {
            id: '2',
            name: 'Devil'
        },
        {
            id: '3',
            name: 'Demon'
        },
        {
            id: '4',
            name: 'Lucifer'
        },
        {
            id: '5',
            name: 'Iron Man'
        },
        {
            id: '6',
            name: 'Hulk'
        },
        {
            id: '7',
            name: 'Doctor Strange'
        },
        {
            id: '8',
            name: 'Loki'
        }
    ];

    return (
        <>
            <Text style={styles.heading}>This is FlatList in React Native</Text>
            <FlatList data={data} renderItem={(item) => {
                return <Text style={styles.textStyle}>{item.item.id}. {item.item.name}</Text>
            }} />
        </>
    );
}

export default List;