import React from 'react';
import {Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Dashboard} from 'scenes';
import Icons from './icons.json';
import {RFValue} from 'react-native-responsive-fontsize';
import {Colors, Fonts} from 'styles';
const {width} = Dimensions.get('window');
import {Icon} from 'components';

const TabIcon = ({routeName, focused, color, size}) => {
  let iconName = Icons[routeName];
  return (
    <Icon
      name={iconName.name}
      type={iconName.type}
      style={{color: color, fontSize: size, marginTop: width * 0.01}}
    />
  );
};

const BottomTab = createBottomTabNavigator();
const BottomTabNavigation = () => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        return (
          <TabIcon
            routeName={route.name}
            focused={focused}
            color={color}
            size={size}
          />
        );
      },
    })}
    tabBarOptions={{
      activeTintColor: '#FFD97D',
      inactiveTintColor: 'white',
      labelStyle: {
        fontFamily: Fonts.PMedium,
        textTransform: 'capitalize',
        fontSize: RFValue(10),
      },
      style: {
        backgroundColor: Colors.PRIMARY,
        height: width * 0.2,
        paddingBottom: width * 0.05,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        // borderRadius: 10,
        // marginBottom: width * 0.02,
        paddingHorizontal: width * 0.1,
      },
    }}>
    <BottomTab.Screen name="Home" component={Home} />
    <BottomTab.Screen name="Dashboard" component={Dashboard} />
  </BottomTab.Navigator>
);

export default BottomTabNavigation;
