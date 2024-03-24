import React from 'react';
import {View, Text, useColorScheme, StyleSheet} from 'react-native';
import {Appearance} from 'react-native';

function AppPro() {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={styles.container}>
      <Text style={isDark ? styles.darkText : styles.lightText}>
        Tushar Verma
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {  
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightText: {
    color: '#000000',
  },
  darkText: {
    color: '#ffffff',
  },
});

export default AppPro;
