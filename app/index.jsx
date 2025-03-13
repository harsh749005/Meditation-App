import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Reacr from "react";
import { LinearGradient } from "expo-linear-gradient";
import "../global.css";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
export default function Index({colors}) {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <ImageBackground
        source={require("../assets/meditation-images/beach.webp")}
        style={styles.background}
        resizeMode="cover"
      >
        <LinearGradient 
          style={styles.backgroundGradient}
          colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}
        >
          <SafeAreaView style={styles.safeArea}>
            <Text style={styles.heading}>Simple Meditation</Text>
            <Text style={styles.text}>Simplying Meditation for Everyone</Text>
            <CustomButton
              onPress={() => router.push("/NatureMeditate")}
              title="Get Started"
            />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    ...StyleSheet.absoluteFillObject, // This makes the image take up the entire screen
  },
  backgroundGradient: {
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
