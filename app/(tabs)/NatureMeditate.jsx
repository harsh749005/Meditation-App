import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  FlatList,
  Pressable,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import meditationData from "../../constants/MeditationData1";
import { router } from "expo-router";

const NatureMeditate = () => {
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <LinearGradient
        style={styles.linearGradient}
        colors={["#161b2e", "#0a4d4a", "#766e67"]}
      >
        <View>
          <Text style={styles.heading}>Welcome Harsh</Text>
          <Text style={styles.text}>Start your meditation practice today</Text>
        </View>
        <View style={{marginTop:20,}}>
          <FlatList
            contentContainerStyle={{
              flexGrow: 1,
              alignItems: "center", // Centers items horizontally
              justifyContent: "center", // Centers items vertically
              gap: 5,
              paddingBottom: 120,
            }}
            data={meditationData}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                style={{ width: "95%", borderRadius: "5px" }}
                onPress={() => router.push(`/meditate/${item.id}`)}
              >
                <ImageBackground
                  source={item.image}
                  style={{ width: width * 0.95, height: width * 0.5 }}
                >
                  <LinearGradient colors={['transparent','rgba(0,0,0,0.6)']}
                  style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.Imageheading}>
                    {item.title}
                  </Text>
                  </LinearGradient>

                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </LinearGradient>
    </View>
  );
};

export default NatureMeditate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  linearGradient: {
    width: "100%",
    height: "100%",
  },
  heading: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 40,
    marginLeft: 20,
  },
  text: {
    color: "white",
    fontSize: 15,
    textAlign: "left",
    marginTop: 10,
    marginLeft: 20,
  },
  Imageheading:{
    color: "white",
    fontSize: 20,
    fontWeight:'bold',
    textAlign:'center',
    margin:'auto',
  }
});
