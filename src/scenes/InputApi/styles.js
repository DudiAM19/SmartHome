import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  Icon: {
    color: Colors.WHITE,
    fontSize: RFValue(30),
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.07,
  },
  TextApi: {
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: 'bold',
    color: Colors.WHITE,
    marginTop: width * 0.02,
    marginBottom: width * 0.06,
  },
  Card: {
    backgroundColor: Colors.WHITE,
    width: width,
    height: width * 1.4,
    borderRadius: 30,
    // borderTopEndRadius: 30,
    // borderTopStartRadius: 30,
    alignItems: 'center',
  },
  Text: {
    // marginHorizontal: width * 0.17,
    marginLeft: -180,
    marginTop: width * 0.05,
    fontSize: RFValue(18),
    color: Colors.PRIMARY,
    fontWeight: 'bold',
  },
  InputSection: {
    flexDirection: 'row',
    // margin: width * 0.1,
    height: width * 0.16,
    width: width * 0.8,
    marginHorizontal: width * 0.1,
    marginVertical: width * 0.06,
    borderWidth: 2,
    borderColor: Colors.PRIMARY,
    borderRadius: 10,
  },
  InputImg: {
    width: width * 0.06,
    height: width * 0.06,
    marginTop: width * 0.04,
    marginHorizontal: width * 0.03,
    marginLeft: width * 0.05,
  },
  Input: {
    fontSize: RFValue(17),
    fontWeight: 'bold',
    width: width * 0.7,
    // color: '#D1D1D1',
    // backgroundColor: 'red',
  },
  Btn: {
    width: width * 0.8,
    height: width * 0.16,
    backgroundColor: '#77FF74',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  TextBtn: {
    fontSize: RFValue(20),
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
