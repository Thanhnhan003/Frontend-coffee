import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Animated,
  Easing,
  ImageBackground,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";


const HomePage = ({ navigation }) => {
  return (
    <View
      style={{ backgroundColor: "white", flex: 1, flexDirection: "column" }}
    >
      <ImageBackground
        source={require("../assets/img/login/homepage2.png")}
        style={{ flex: 1 }}
      >
        <View style={{ resizeMode: "contain" }}>
          <Image
            source={require("../assets/img/login/homepage1.png")}
            style={{ width: "auto" }} // Điều chỉnh kích thước theo mong muốn
          />
        </View>
      </ImageBackground>
      <View style={{ flex: 1, flexDirection: "column" }}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            width: 192,
            height: 187,
            marginLeft: 50,
          }}
        >
          <View style={{ flex: 1 }}>
            <Image source={require("../assets/img/login/thap.png")} />
          </View>
          <View style={{ flex: 2 }}>
            <Text style={{ fontSize: 36, color: "#55a0f5" }}>Lorem</Text>
            <Text style={{ fontSize: 24, color: "#55a0f5" }}>
              consequat duis enim velit{" "}
            </Text>
          </View>
        </View>
        <ImageBackground
          source={require("../assets/img/login/homepage3.png")}
          style={{
            flex: 0.6,
            height: null,
            bottom: 0,
            width: "auto",
            flexDirection: "row-reverse",
            resizeMode: "contain",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 144,
              height: 60,
              borderWidth: 1,
              borderColor: "white",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 7,
              marginRight: 20,
            }}
          >
            <Text style={{ color: "white", fontSize: 24 }}>Get Started</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </View>
  );
};

export default HomePage;
