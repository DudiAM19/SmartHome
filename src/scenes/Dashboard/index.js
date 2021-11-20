import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {Container} from 'components';
import styles from './styles';

const DATA = [
  {
    id: 1,
    image: require('../../assets/flame.png'),
    textFire: 'Fire Temperature',
    textTemp: 'Temperature',
    textCondition: 'Good',
    textLevel: '90°C',
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
  return (
    <Container backgroundColor="#2D3436">
      <View style={styles.Header}>
        <View style={styles.Left}>
          <Image
            source={require('../../assets/analytics.png')}
            style={styles.ImgLeft}
          />
          <Text style={styles.TextLeft}>Monitoring System</Text>
        </View>
      </View>
      <View style={styles.Card}>
        <FlatList
          style={styles.FlatList}
          data={DATA}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Item
              image={item.image}
              textFire={item.textFire}
              textTemp={item.textTemp}
              textCondition={item.textCondition}
              textLevel={item.textLevel}
            />
          )}
        />
      </View>
    </Container>
  );
};

export default Dashboard;
