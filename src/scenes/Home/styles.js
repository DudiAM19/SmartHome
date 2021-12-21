import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  Header: {
    margin: width * 0.05,
    marginTop: width * 0.1,
    marginBottom: width * 0.2,
    flexDirection: 'row',
  },
  TextSection: {
    flex: 1,
  },
  textHeader: {
    color: Colors.WHITE,
    fontWeight: 'bold',
    fontSize: RFValue(20),
    fontFamily: Fonts.PRegular,
  },
  textName: {
    color: Colors.WHITE,
    fontSize: RFValue(15),
  },
  ImgSection: {
    justifyContent: 'center',
  },
  Img: {
    width: width * 0.05,
    height: width * 0.05,
  },
  Card: {
    backgroundColor: Colors.WHITE,
    width: width,
    height: width * 1.3,
    // borderRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    alignItems: 'center',
    flex: 1,
  },
  AverageSection: {
    width: width * 0.8,
    height: width * 0.3,
    backgroundColor: Colors.WHITE,
    borderRadius: 25,
    marginTop: -40,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    flexDirection: 'row',
    marginHorizontal: width * 0.1,
    marginBottom: width * 0.05,
  },
  TempSection: {
    // backgroundColor: 'red',
    width: width * 0.4,
    height: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    flex: 1,
  },
  ImgTemp: {
    width: width * 0.09,
    height: width * 0.09,
  },
  TextTemp: {
    color: Colors.BLACK_TEXT,
    // fontSize: RFValue(13),
    marginTop: width * 0.03,
  },
  ConditionSection: {
    width: width * 0.3,
    height: width * 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'red',
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  Number: {
    fontWeight: 'bold',
    fontSize: RFValue(20),
    marginTop: width * 0.03,
    color: Colors.PRIMARY,
  },
  Condition: {
    fontWeight: 'bold',
    fontSize: RFValue(13),
    color: '#77FF74',
    marginVertical: width * 0.04,
  },
  ControlSection: {
    margin: width * 0.03,
    width: width * 0.3,
    height: width * 0.4,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  ImgControl: {
    width: width * 0.14,
    height: width * 0.14,
    marginVertical: width * 0.04,
  },
  TextControl: {
    fontSize: RFValue(12),
    color: Colors.PRIMARY,
  },
  Switch: {
    marginVertical: width * 0.02,
  },
   hotCondition: {
    fontSize: RFValue(16),
    color: '#ec5353',
    fontWeight: 'bold',
   },
   coolCondition: {
    fontSize: RFValue(16),
    color: '#0fcfff',
    fontWeight: 'bold',
  },
  normalCondition: {
     fontSize: RFValue(16),
    color: '#f58941',
    fontWeight: 'bold',
   },

});
