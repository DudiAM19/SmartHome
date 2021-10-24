import React from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from "react-native";
import styles from "./styles";

const FrontPage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.Page}>
            <Image source={require('../../assets/img.png')} style={styles.img} />
            <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('App')}>
                <Text style={styles.TextBtn}>Press</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}

export default FrontPage;