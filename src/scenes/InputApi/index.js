import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {Container, Icon} from 'components';
import {Colors} from 'styles';
import styles from './styles';

const InputApi = ({navigation}) => {
  const [isFocused, setFocused] = useState(false);

  return (
    <Container backgroundColor="#2D3436">
      <SafeAreaView>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" type="Feather" style={styles.Icon} />
        </TouchableOpacity>
        <Text style={styles.TextApi}>Input Api System</Text>
        <View style={styles.Card}>
          <Text style={styles.Text}>API key</Text>
          <View style={styles.InputSection}>
            <Image
              source={require('../../assets/key.png')}
              style={styles.InputImg}
            />
            <TextInput
              placeholder="Api Key ..."
              style={styles.Input}
              placeholderTextColor={
                isFocused ? Colors.BLACK : Colors.BLACK_LIGHT
              }
              onFocus={() => setFocused(true)}
              onBlur={() => setFocused(false)}
            />
          </View>
          <TouchableOpacity style={styles.Btn}>
            <Text style={styles.TextBtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Container>
  );
};

export default InputApi;
