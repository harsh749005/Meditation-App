import {
  View,
  Text,
  ImageBackground,
  Pressable,
  StyleSheet,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams ,router} from "expo-router";
import meditationData from "../../constants/MeditationData1";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from '../../components/CustomButton'
const meditate = ({initialSeconds = 10}) => {
  const { id } = useLocalSearchParams();
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const [isMeditaing,setMeditaing] = useState(false);
  const [dynamicText,setDynamicText] = useState(false);
  useEffect(() => {
    
    let intervalId;

    if (timeLeft === 0) {
      setTimeLeft(initialSeconds);
      setMeditaing(false)
      setDynamicText(true);
      return;
    } // Stop when the countdown reaches 0
    if (isMeditaing) {      
      intervalId = setTimeout(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    }
 
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [timeLeft,isMeditaing]);

  //format the time to ensure 2 digits are displayed
  const formattedTimeMinutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const formattedTimeSeconds = String(timeLeft % 60).padStart(2, "0");
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{ height: '100%',width: '100%' }}
        resizeMode="cover"
        source={meditationData[Number(id) - 1].image}
      >
        <LinearGradient
          style={{ flex: 1 ,padding:10}}
          colors={["transparent", "rgba(0,0,0,0.8)"]}
        >
          <Pressable onPress={() => router.back()} style={style.button}>
            <Ionicons name="chevron-back-outline" size={24} color="white" />
          </Pressable>
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
          <View style={style.clock}>
            <Text style={style.clockText}>{formattedTimeMinutes }:{formattedTimeSeconds}</Text>
          </View>
        </View>
        <View style={{alignItems:"center"}}>
          <CustomButton title={dynamicText?"Start Again":"Start Meditation"} onPress={() => {
  if (!isMeditaing) {
    setMeditaing(true);
  }
}}/>
        </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default meditate;

const style = StyleSheet.create({
  button: {
    backgroundColor: "transparent",
    width: 40,
    height: 40,
    borderRadius: 25,
    borderColor: "white",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  
  },
  clock:{
    backgroundColor:"white",
    width:100,
    height:100,
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center"
  },
  clockText:{
    fontSize:18,
    fontWeight:"bold"
  }
});
