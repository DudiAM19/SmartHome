import React from "react";
import { StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const defaultStyle ={
    flex: 1
}
const Container = ({ children, backgroundColor, barStyle, barColor }) => (
    <SafeAreaProvider style={[{...defaultStyle, ...{backgroundColor: backgroundColor}}]}>
        <StatusBar barStyle={barStyle} backgroundColor={barColor}/>
        <SafeAreaView style={{flex: 1}}>
            {children}
        </SafeAreaView>
    </SafeAreaProvider>
)

Container.defaultProps = {
    barStyle: 'dark-content',
    barColor: '#fff',
    backgroundColor: 'transparent'
}

export default Container;