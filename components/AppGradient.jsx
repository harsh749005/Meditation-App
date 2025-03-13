import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const AppGradient = ({children, colors}) => {
  return (
    <LinearGradient colors={colors} style={styles.backgroundGradient}>
      <Text>AppGradient</Text>
    </LinearGradient >
  )
}

export default AppGradient

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject, // This makes the image take up the entire screen
  },
  backgroundGradient: {
    flex:1,
    ...StyleSheet.absoluteFillObject, // Ensures the gradient covers the whole screen
  },
  safeArea: {
    paddingTop: 40,
    flex: 1,
    justifyContent: "between",
    alignItems: "center",
  },
  heading: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  text: {
    color: "white",
    textAlign: "center",
    marginVertical: 10,
    fontSize: 20,
  },
});