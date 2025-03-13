import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import GuidedAffirmationsGallery from "../../../components/GuidedAffirmationsGallery";
import affirmations_gallery from "../../../constants/affirmation-gallery";
const affirmations = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        style={styles.linearGradient}
        colors={["#2e1f58", "#54426b", "#a790af"]}
      >
        <Text style={styles.text}>Change your beliefs withy affirmations</Text>
        <View style={{ flex: 1 }}>
          <GuidedAffirmationsGallery />
        </View>
      </LinearGradient>
    </View>
  );
};

export default affirmations;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  linearGradient: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 50,
    padding: 10,
    textAlign: "left",
  },
});
