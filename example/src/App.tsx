import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { Typography, TypographyProvider } from 'react-native-awesome-text';
import { material } from 'react-native-typography';

export default function App() {
  const style = {
    base: { fontSize: 14, color: 'black', fontFamily: 'Lato-Medium' },
    h1: { color: 'red' },
    h2: { fontSize: 22, color: 'green' },
    h3: { fontSize: 20, color: 'blue' },
    h4: { fontSize: 18, color: 'purple' },
    h5: { fontSize: 16, color: 'orange' },
    h6: { fontSize: 14, color: 'yellow' },
    display2: material.display2,
  };

  return (
    <TypographyProvider typography={style}>
      <View style={styles.container}>
        <Typography>Result: ******</Typography>
        <Typography variant="h1">Result: ******</Typography>
        <Typography variant="h2">Result: ******</Typography>
        <Typography variant="h3">Result: ******</Typography>
        <Typography variant="h4">Result: ******</Typography>
        <Typography variant="h5">Result: ******</Typography>
        <Typography
          variant="h6"
          style={{
            color: 'red',
          }}
        >
          Result: ******
        </Typography>
        <Typography variant="display2">Result: ******</Typography>
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
