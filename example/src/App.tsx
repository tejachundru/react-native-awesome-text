import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Typography, TypographyProvider } from 'react-native-awesome-text';
import { material } from 'react-native-typography';

export default function App() {
  const style = {
    base: {
      // base can be used to declare common items , that applies for the all variants like fontfamily,textColor etc
      fontSize: 16,
      color: 'black',
      fontFamily: 'Lato-Medium',
    },
    // Variants
    HeadLine: {
      fontSize: 30,
      color: '#111111',
      fontFamily: 'Lato-Bold',
    },
    SubHeadLine: {
      fontSize: 26,
      color: '#333333',
      fontFamily: 'Lato-Bold',
    },
    Title: {
      fontSize: 24,
      color: '#444444',
      fontFamily: 'Lato-Bold',
    },
    SubTitle: {
      fontSize: 22,
      color: '#666666',
      fontFamily: 'Lato-Bold',
    },
    Body1: {
      fontSize: 18,
      color: '#444444',
      fontFamily: 'Lato-Medium',
    },
    Body2: {
      fontSize: 16,
      color: '#555555',
      fontFamily: 'Lato-Medium',
    },
    Caption: {
      fontSize: 12,
      color: 'grey',
      fontFamily: 'Lato-Medium',
    },
    display1: material.display1,
  };

  return (
    <TypographyProvider typography={style}>
      <View style={styles.container}>
        <Typography variant="HeadLine">Headline</Typography>
        <Typography variant="SubHeadLine">SubHeadline</Typography>
        <Typography variant="Title">Title</Typography>
        <Typography variant="SubTitle">SubTitle</Typography>
        <Typography variant="Body1">Body1</Typography>
        <Typography variant="Body2">Body2</Typography>
        <Typography variant="Caption">Caption</Typography>
        <Typography variant="display1">display1</Typography>
      </View>
    </TypographyProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
