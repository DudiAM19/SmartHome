import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Container} from 'components';
import styles from './styles';
import useDashboard from './useDashboard';

const DATA = [
  {
    id: 1,
    image: require('../../assets/flame.png'),
    textFire: 'Fire Temperature',
    textTemp: 'Temperature',
    textCondition: 'Good',
    textLevel: '',
  },
  {
    id: 2,
    image: require('../../assets/gas-tank.png'),
    textFire: 'Gas',
    textTemp: 'Pressure',
    textCondition: 'Good',
    textLevel: '97°C',
  },
  {
    id: 3,
    image: require('../../assets/temperature1.png'),
    textFire: 'Average',
    textTemp: 'Temperature',
    textCondition: 'Hot',
    textLevel: '30°C',
  },
];

const Item = props => {
  return (
    <View style={styles.InfoSection}>
      <View style={styles.ImgSection}>
        <Image source={props.image} style={styles.Img} />
      </View>
      <View style={styles.TextSection}>
        <Text style={styles.TextFire}>{props.textFire}</Text>
        <Text style={styles.TextTemp}>{props.textTemp}</Text>
        <Text style={styles.TextCondition}>{props.textCondition}</Text>
      </View>
      <View style={styles.LevelSection}>
        <Text style={styles.TextLevel}>{props.textLevel}</Text>
      </View>
    </View>
  );
};

const Dashboard = ({navigation}) => {
  const {danger, gas, temperature} = useDashboard();
  return (
    <Container backgroundColor="#2D3436">
      <View style={styles.Header}>
        <View style={styles.Left}>
          <Image
            source={require('../../assets/monitoring1.gif')}
            style={styles.ImgLeft}
          />
          <Text style={styles.TextLeft}>Monitoring System</Text>
        </View>
      </View>
      <View style={styles.Card}>
        {danger === '1' && (
          <View style={styles.FlatList}>
            <View style={styles.InfoSection}>
              <View style={styles.ImgSection}>
                <Image
                  source={require('../../assets/ezgif.com-gif-maker.gif')}
                  style={styles.ImgFire}
                />
              </View>
              <View style={styles.dangerTextWrap}>
                <Text style={styles.dangerText}>DANGER</Text>
              </View>
            </View>
          </View>
        )}
        <View style={styles.FlatList}>
          <View style={styles.InfoSection}>
            <View style={styles.ImgSection}>
              <Image
                source={require('../../assets/gas-tank.png')}
                style={styles.Img}
              />
            </View>
            <View style={styles.TextSection}>
              <Text style={styles.TextFire}>{'Gas'}</Text>
            </View>
            <View style={styles.LevelSection}>
              <Text style={styles.TextLevel}>{gas} p</Text>
            </View>
          </View>
        </View>
        <View style={styles.FlatList}>
          <View style={styles.InfoSection}>
            <View style={styles.ImgSection}>
              <Image
                source={require('../../assets/temperature.gif')}
                style={styles.ImgTemperature}
              />
            </View>
            <View style={styles.TextSection}>
              <Text style={styles.TextFire}>{'Temperature'}</Text>
            </View>
            <View style={styles.LevelSection}>
              <Text style={styles.TextLevel}>
                {parseInt(temperature) + '°C'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default Dashboard;
