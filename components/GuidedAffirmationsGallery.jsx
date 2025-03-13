import { View, Text, FlatList, Image, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import affirmations_gallery from "../constants/affirmation-gallery";
import { Link } from "expo-router";
const GuidedAffirmationsGallery = ({ AffirmationsData }) => {
  return (
   
      
      <View style={{ flex: 1 ,padding:10}}>
        <FlatList
          data={affirmations_gallery}
          contentContainerStyle={{
            flexGrow: 1,
            gap: 5,
            
          }}
          keyExtractor={(item) => item.data.map((ele)=>ele.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Text style={styles.heading}>{item.title}</Text>
              <FlatList
                contentContainerStyle={{ gap: 10 }}
                data={item.data}
                horizontal
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Link href={`/affirmations/${item.id}`} asChild>
                    <Pressable >
                  <View style={{width:150,height:160,borderRadius: 10 }}>

                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: '100%', height: '100%',objectFit:'cover' ,borderRadius: 10}}
                    />
                    </View>
                    </Pressable>
                    </Link>
                )}
              />
            </View>
          )}
        />
      </View>
   
  );
};

export default GuidedAffirmationsGallery;

const styles = StyleSheet.create({
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white'   }
})