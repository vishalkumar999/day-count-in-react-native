import React from "react";
import {View,Text,StyleSheet} from "react-native";

const styles = StyleSheet.create({
    textStyle : {
        color : "red",
        textAlign : "center",
        fontSize : 50,
    },
    anotherStyle : {
        color: "green",
        fontSize:20,
        textAlign:"center"
    }
});

const FirstApp = () => {
    return (
        <View>
            <Text style={styles.textStyle}>Hello This is Vishal</Text>
            <Text style={styles.anotherStyle}>This is Another Text</Text>
        </View>
    );
}


export default FirstApp;