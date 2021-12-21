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
    width: width * 0.9,
    height: width * 0.5,
    marginTop: width * 0.1,
  },
  HeadingText: {
    marginTop: width * 0.2,
    textAlign: 'center',
    fontFamily: Fonts.PRegular,
    color: Colors.BLACK_TEXT,
    fontWeight: 'bold',
    fontSize: RFValue(16),
    padding: width * 0.1,
    lineHeight: 23,
  },
  Btn: {
    height: width * 0.13,
    width: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: width * 0.1,
    color: 'blue',
    fontWeight: 'bold',
    backgroundColor: '#cde8e7',
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
