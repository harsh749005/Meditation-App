import { View, Text, Image, StatusBar, ImageBackground, Pressable, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import affirmations_gallery from "../../../constants/affirmation-gallery";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from '@expo/vector-icons/Ionicons';

const AffirmationsPractice = () => {
  const [affirmationData, setAffirmationData] = useState([]);
  const [etext, settext] = useState("");
  const [ImageSrc, setImageSrc] = useState("");
  const [sentences, setsentences] = useState([]);
  const { itemId } = useLocalSearchParams(); // user clicked id

  useEffect(() => {
    const flattenedData = affirmations_gallery.flatMap((item) => item.data);
    setAffirmationData(flattenedData); // setAffirmationData
  }, []);
  useEffect(() => {
    // Once affirmationData is updated, set etext
    if (affirmationData.length > 0 && itemId !== undefined) {
      settext(affirmationData[itemId].text || "No text found");
      setImageSrc(affirmationData[itemId - 1].image); // set ImageSrc
    }
  }, [affirmationData, itemId]);

  useEffect(() => {
    // Split sentences when etext is updated
    if (etext) {
      const splitSentences = etext.split('.').filter(sentence => sentence.trim() !== '');
      setsentences(splitSentences);
    }
  }, [etext]);

  // split sentences
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={ImageSrc}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      >
        <LinearGradient
          style={{ flex: 1,padding:10 }}
          colors={["rgba(0,0,0,0.3)", "rgba(0,0,0,0.6)"]}
        >
          <Pressable onPress={()=> router.back()} style={style.button}>
          <Ionicons name="chevron-back-outline" size={24} color="white" />
          </Pressable>
          <View style={{paddingTop:10}}>

         
          <ScrollView
            
          showsVerticalScrollIndicator={true} 
          >
            
                

          {
            sentences.map((sentence,index)=>{
              return(
            
                <Text style={style.affirmation} key={index}>{sentence}</Text>
                
              )
            })
            
          }
          
        
          </ScrollView>
          </View>
        </LinearGradient>
      </ImageBackground>
      <StatusBar
        hidden={true}
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
    </View>
  );
};

export default AffirmationsPractice;

const style = StyleSheet.create({
  button:{

    backgroundColor:'transparent',
    width:40,
    height:40,
    borderRadius:25,
    borderColor:'white',
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    marginTop:50,
  },
  affirmation:{
    color:'white',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    marginTop:50,
    marginBottom:20,
    paddingHorizontal:20,
    lineHeight:25,

  },
  innerView:{
    height:150,
    backgroundColor:'pink'
  }
})
