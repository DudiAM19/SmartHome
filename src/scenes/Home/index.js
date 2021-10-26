import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Switch,
  FlatList,
} from 'react-native';
import {Container} from 'components';
import styles from './styles';

const DATA = [
  {
    id: 1,
    name: 'Lampu Utama',
    image: require('../../assets/lamp.png'),
  },
  {
    id: 2,
    name: 'Kipas Angin',
    image: require('../../assets/fan.png'),
  },
  {
    id: 3,
    name: 'Lampu Kamar 1',
    image: require('../../assets/lamp.png'),
  },
  {
    id: 4,
    name: 'Lampu Kamar 2',
    image: require('../../assets/lamp.png'),
  },
];

const Item = props => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.ControlSection}>
      <Image source={props.image} style={styles.ImgControl} />
      <Text style={styles.TextControl}>{props.name}</Text>
      <Switch
        trackColor={{false: '#767577', true: '#fff347'}}
        thumbColor={isEnabled ? 'white' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
        style={styles.Switch}
      />
    </View>
  );
};

const Home = ({navigation}) => {
  return (
    <Container backgroundColor="#2D3436">
      <StatusBar barStyle="light-content" backgroundColor="#2D3436" />
      <View style={styles.Header}>
        <View style={styles.TextSection}>
          <Text style={styles.textHeader}>Welcome home</Text>
          <Text style={styles.textName}>Pranto Suwarno</Text>
        </View>
        <TouchableOpacity
          style={styles.ImgSection}
          onPress={() => navigation.navigate('InputApi')}>
          <Image
            source={require('../../assets/settings.png')}
            style={styles.Img}
          />
        </TouchableOpacity>
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
        <FlatList
          data={DATA}
          numColumns={2}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <Item image={item.image} name={item.name} />}
        />
      </View>
    </Container>
  );
};

export default Home;
