import React, {useState} from 'react';
import {View, Text, StatusBar, Image, Switch, FlatList} from 'react-native';
import {Container} from 'components';
import styles from './styles';
import useHome from './useHome';

const Home = ({navigation}) => {
  const {
    fan,
    lamp1,
    lamp2,
    lamp3,
    handleFan,
    handleLamp1,
    handleLamp2,
    handleLamp3,
  } = useHome();
  return (
    <Container backgroundColor="#2D3436">
      <StatusBar barStyle="light-content" backgroundColor="#2D3436" />
      <View style={styles.Header}>
        <View style={styles.TextSection}>
          <Text style={styles.textHeader}>Welcome home</Text>
          <Text style={styles.textName}>Pranto Suwarno</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={styles.AverageSection}>
          <View style={styles.TempSection}>
            <Image
              source={require('../../assets/temperature.png')}
              style={styles.ImgTemp}
            />
            <Text style={styles.TextTemp}>Average Temperature</Text>
          </View>
          <View style={styles.ConditionSection}>
            <Text style={styles.Number}>29°C</Text>
            <Text style={styles.Condition}>Good</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.ControlSection}>
            <Image
              source={require('../../assets/lamp.png')}
              style={styles.ImgControl}
            />
            <Text style={styles.TextControl}>{'Lampu Utama'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#fff347'}}
              thumbColor={lamp1 ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => handleLamp1()}
              value={lamp1}
              style={styles.Switch}
            />
          </View>
          <View style={styles.ControlSection}>
            <Image
              source={require('../../assets/fan.png')}
              style={styles.ImgControl}
            />
            <Text style={styles.TextControl}>{'Kipas Angin'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#fff347'}}
              thumbColor={fan ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => handleFan(!fan)}
              value={fan}
              style={styles.Switch}
            />
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.ControlSection}>
            <Image
              source={require('../../assets/lamp.png')}
              style={styles.ImgControl}
            />
            <Text style={styles.TextControl}>{'Lampu Kamar 1'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#fff347'}}
              thumbColor={lamp2 ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => handleLamp2()}
              value={lamp2}
              style={styles.Switch}
            />
          </View>
          <View style={styles.ControlSection}>
            <Image
              source={require('../../assets/lamp.png')}
              style={styles.ImgControl}
            />
            <Text style={styles.TextControl}>{'Lampu Kamar 2'}</Text>
            <Switch
              trackColor={{false: '#767577', true: '#fff347'}}
              thumbColor={lamp3 ? 'white' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => handleLamp3()}
              value={lamp3}
              style={styles.Switch}
            />
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Home;
