import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = ({title,onPress}) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    color: 'white',
    width: '90%',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    position:'absolute',
    bottom: 20,
  },
  text:{
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  }
})