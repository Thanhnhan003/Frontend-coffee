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

const Login = () => {
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
        ></View>
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
      <View style={{ backgroundColor: "red",width:"100%",height:"60%", position: 'absolute',  marginHorizontal:15}}></View>
    </View>
  );
};

export default Login;
