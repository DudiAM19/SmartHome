import React from 'react';
import {View, Text, Image, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';

const FrontPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.Page}>
      <Text style={styles.HeadingText}>
        RANCANGAN BANGUN SMART HOME UNTUK DETEKSI DINI KEBAKARAN MENGUNAKAN
        MIKROKONTROLER BERBASIS ANDROID
      </Text>
      <Image source={require('../../assets/img.png')} style={styles.img} />
      <TouchableOpacity
        style={styles.Btn}
        onPress={() => navigation.navigate('App')}>
        <Text style={styles.TextBtn}>Lanjutkan</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default FrontPage;
