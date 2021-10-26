import {StyleSheet, Dimensions} from 'react-native';
import {Colors, Fonts} from 'styles';
const {width} = Dimensions.get('window');
import {RFValue} from 'react-native-responsive-fontsize';

export default StyleSheet.create({
  Page: {
    alignItems: 'center',
    backgroundColor: 'white',
    flex: 1,
  },
  img: {
    width: width * 0.6,
    height: width * 0.6,
    marginTop: width * 0.5,
  },
  Btn: {
    height: width * 0.13,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width * 0.1,
    // borderWidth: 1,
    // borderColor: Colors.PRIMARY,
    borderRadius: 30,
    shadowColor: Colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 2,
  },
  TextBtn: {
    fontFamily: Fonts.PRegular,
    color: Colors.BLACK_TEXT,
    fontWeight: 'bold',
  },
});
