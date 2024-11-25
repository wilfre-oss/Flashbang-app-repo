import React from 'react';
import {LinearGradient} from 'expo-linear-gradient';
import { Text, Button } from 'react-native';
import { Dimensions, StyleSheet, View } from 'react-native';
import {
  calcTextColor,
  CCTPicker,
  RGBPicker,
} from 'react-native-light-color-picker';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('screen');

const Color = require('color')

export default function SetColorView({groupColor, handleSetColor, handleSetBrightness}) {
  const [color, setColor] = React.useState (groupColor);

  const [value, setValue] = React.useState (50);

  const [mode, setMode] = React.useState (0);

  const [sendColor, setSendColor] = React.useState(Color(color).lightness(value).hex())

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.SafeAreaView}>
        <View>
          <Button 
            title='Switch mode'
            onPress={() => {
              setMode(mode === 0 ? 1 : 0);
            }}
          >
            
          </Button>
        </View>
        {mode === 0 && (
          <>
            <RGBPicker
              value={color}
              onChangeComplete={() => {
                let temp = Color(color)
                setSendColor(temp.hex())
                handleSetColor(temp.hex())
              }}
              onChange={setColor}
            />
            <View
              style={[
                styles.demo,
                {
                  backgroundColor: color,
                },
              ]}
            >
              <Button
                title='Default'
                labelStyle={{
                  color: calcTextColor(color),
                }}
                onPress={() => {
                  setColor('#FF0000');
                }}
              >
              </Button>
            </View>
          </>
        )}
        {mode === 1 && (
          <>
            <CCTPicker
              value={value}
              onChangeComplete={ () => { 
                let temp = Color(color).lightness(value)
                setSendColor(temp.hex())
                handleSetBrightness(value)
                handleSetColor(temp.hex())
              }}
              onChange={setValue}
            />
            <View
              style={[
                styles.demo,
                {
                  backgroundColor: color,
                },
              ]}
            >
              <Button
                title='Default'
                labelStyle={{
                  color: calcTextColor(color),
                }}
                onPress={() => {
                  setValue(70);
                }}
              >
              </Button>
              <Text style={styles.text}>{value.toFixed(0)}</Text>
            </View>
          </>
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    width,
    height,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  demo: {
    width: '100%',
    height: 100,
  },
  text: {
    alignSelf: 'center',
  },
});

