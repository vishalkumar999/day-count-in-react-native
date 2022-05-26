import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";


const Days = () => {
    const [day, setDay] = useState();
    const [JoiningDate, setJoiningDate] = useState();

    const dayCount = () => {
        // This is for day count and display starting date
        let x = new Date().getTime();
        x = x / 1000;
        x = Math.floor(x); //seconds from 1 jan 1970 to current date

        let y = new Date(2022, 2, 14).getTime();
        y = y / 1000;
        y = Math.floor(y); // seconds from 1 jan 1970 to 12 jan 2021

        let z = x - y;
        z = z / (60 * 60 * 24);
        z = Math.floor(z); // diffrence of x and y

        setDay(z);
    }

    const Joining = () => {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let date = new Date(2022, 2, 14).getDate();
        let month = new Date(2022, 2, 14).getUTCMonth();
        let year = new Date(2022, 2, 14).getFullYear();
        let dayName = new Date(2022, 2, 14).getDay();

        const days_array = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        const month_array = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
        ];

        return `${days_array[dayName]}, ${month_array[month]} ${date}, ${year}`;
    }

    useEffect(() => {
        dayCount();
        setJoiningDate(Joining());
    });

    return (
        <View style={styles.mainView}>
            <View style={styles.centerView}>
                <Text style={[styles.days, styles.heading]}>Total Days</Text>
                <Text style={styles.days}>{day}</Text>
                <Text style={styles.para}>Joining Date</Text>
                <Text style={styles.para}>{JoiningDate}</Text>
            </View>
        </View>
    );
}


// This is Styling Variables
let ScreenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
    mainView: {
        backgroundColor: '#fff',
        height: ScreenHeight,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    centerView: {
        height: 250,
        width: 250,
        backgroundColor: '#f5f6fa',
        borderRadius: 30,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    days: {
        color: '#000',
        textAlign: 'center',
        fontSize: 30
    },
    heading: {
        paddingTop: 10,
    },
    para: {
        color: '#000',
        fontSize: 20
    }
});


export default Days;