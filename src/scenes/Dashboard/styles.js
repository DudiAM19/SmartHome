import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  Header: {
    flexDirection: 'row',
    marginBottom: width * 0.17,
  },
  Left: {
    alignItems: 'center',
    // backgroundColor: 'red',
    margin: width * 0.1,
    marginLeft: width * 0.26,
  },
  ImgLeft: {
    width: width * 0.25,
    height: width * 0.2,
  },
  TextLeft: {
    color: Colors.WHITE,
    fontSize: RFValue(20),
    fontWeight: 'bold',
    marginVertical: width * 0.02,
  },
  Right: {
    marginVertical: width * 0.1,
    marginHorizontal: width * 0.01,
  },
  ImgSetting: {
    width: width * 0.05,
    height: width * 0.05,
  },
  Card: {
    backgroundColor: 'white',
    width: width,
    height: width * 1.2,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    // alignItems: 'center',
  },
  InfoSection: {
    width: width * 0.9,
    height: width * 0.35,
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    marginHorizontal: width * 0.05,
    marginBottom: width * 0.2,
  },
  ImgSection: {
    // backgroundColor: 'red',
  },
  Img: {
    width: width * 0.15,
    height: width * 0.15,
    marginTop: width * 0.1,
    marginLeft: width * 0.08,
    marginRight: width * 0.02,
  },
  ImgTemperature: {
    width: width * 0.15,
    height: width * 0.2,
    marginTop: width * 0.1,
    marginLeft: width * 0.08,
    marginRight: width * 0.02,
  },
  ImgFire: {
    width: width * 0.15,
    height: width * 0.22,
    marginTop: width * 0.05,
    marginLeft: width * 0.08,
    marginRight: width * 0.02,
  },
  dangerTextWrap: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: width * 0.1,
    // paddingHorizontal: width * 0.06,
  },
  dangerText: {
    fontSize: RFValue(25),
    fontWeight: 'bold',
    color: Colors.DANGER,
    alignItems: 'center',
  },
  TextSection: {
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.04,
  },
  TextDanger: seconds => ( {
    backgroundColor: seconds ? Colors.WHITE : Colors.DANGER,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: width * 0.04,
  }),
  TextFire: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
    color: Colors.BLACK_TEXT,
  },
  TextGas: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
    color: Colors.BLACK_TEXT,
  },
  TextTemp: {
    fontWeight: 'bold',
    fontSize: RFValue(13),
    marginBottom: width * 0.03,
    color: Colors.BLACK_TEXT,
  },
  TextCondition: {
    fontWeight: 'bold',
    color: '#77FF74',
    fontSize: RFValue(18),
    marginBottom: width * 0.06,
  },
  LevelSection: {
    // backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: width * 0.02,
  },
  TextLevel: {
    fontWeight: 'bold',
    fontSize: RFValue(30),
    // marginBottom: width * 0.05,
    color: Colors.BLACK_TEXT,
  },
  FlatList: {
    marginTop: -60,
  },

  dangerCondition: {
    fontSize: RFValue(16),
    color: '#ec5353',
    fontWeight: 'bold',
  },
  goodCondition: {
    fontSize: RFValue(16),
    color: '#1ecf34',
    fontWeight: 'bold',
  },
  normalCondition: {
    fontSize: RFValue(16),
    color: '#f58941',
    fontWeight: 'bold',
  },
});
