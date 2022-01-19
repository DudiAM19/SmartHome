import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Container} from 'components';
import styles from './styles';
import useDashboard from './useDashboard';

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
  const {fire, gas, temperature, seconds} = useDashboard();
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
        <View style={styles.FlatList}>
          <View style={styles.InfoSection}>
            <View style={styles.ImgSection}>
              <Image
                source={require('../../assets/ezgif.com-gif-maker.gif')}
                style={styles.ImgFire}
              />
            </View>
            <View
              style={
                parseInt(fire) <= 400
                  ? styles.TextDanger(seconds)
                  : styles.TextSection
              }>
              {parseInt(fire) <= 400 ? (
                <Text style={styles.TextFire}>{'Ada Titik Api'}</Text>
              ) : (
                <Text style={styles.TextFire}>{'Flame'}</Text>
              )}
              <Text style={styles.Number} />
              {parseInt(fire) <= 400 && (
                <Text style={styles.dangerCondition}> Danger</Text>
              )}
              {parseInt(fire) >= 401 && (
                <Text style={styles.goodCondition}> Good</Text>
              )}
            </View>
            <View style={styles.LevelSection}>
              <Text style={styles.TextLevel}>{fire} nm</Text>
            </View>
          </View>
        </View>

        <View style={styles.FlatList}>
          <View style={styles.InfoSection}>
            <View style={styles.ImgSection}>
              <Image
                source={require('../../assets/gas-tank.png')}
                style={styles.Img}
              />
            </View>
            <View style={styles.TextSection}>
              <Text style={styles.TextGas}>{'Gas'}</Text>
              <Text style={styles.Number}>{parseInt(gas)}°C</Text>
              {parseInt(gas) >= 500 && (
                <Text style={styles.dangerCondition}> Danger</Text>
              )}
              {parseInt(gas) <= 299 && (
                <Text style={styles.goodCondition}> Good</Text>
              )}
              {parseInt(gas) >= 300 && parseInt(gas) <= 499 && (
                <Text style={styles.normalCondition}> Normal</Text>
              )}
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
