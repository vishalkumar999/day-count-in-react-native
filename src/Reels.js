import React from 'react';
import { View, TextInput, Alert, StyleSheet, Text, TouchableWithoutFeedback, Button, Keyboard } from 'react-native';
import instareel from 'insta-reel';



const Reels = () => {
    const [value, onChangeText] = React.useState('');

    const ReelDownload = async () => {
        // const reel = await instareel("https://www.instagram.com/p/Cdv2LBaDqUK/");
        
        // setLink((link)=>{
        //     return link = reel.video_url;
        // }) 
        onChangeText("");
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Text style={styles.header}>Reels Downloader</Text>
                <TextInput
                    placeholder="Type Here.."
                    value={value}
                    onChangeText={text => {
                        onChangeText(text)
                    }}
                    style={styles.textInput} />
                <View style={styles.btnContainer}>
                    <Button title="Download" onPress={() => { ReelDownload() }} />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

const styles = StyleSheet.create({
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "space-around"
    },
    header: {
        fontSize: 25,
        // marginBottom: 48
    },
    textInput: {
        // height: 40,
        borderColor: "#7f8c8d",
        borderBottomWidth: 1,
        // marginBottom: 25
    },
    btnContainer: {
        backgroundColor: "white",
        // marginTop: 12
    }
});

export default Reels;