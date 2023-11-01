import React, { useState }from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { BlurView } from "expo-blur";

import { GET_IMG } from "./apiService"; // Import GET_IMG function from apiService
const { width, height } = Dimensions.get("window");

const size = ["S", "M", "L"];
const choice = ["White Chocolate", "Milk Chocolate", "Dark Chocolate"];
function ProductDetail({ route, navigation }) {
  const [activeSize, setActiveSize] = useState(null);
  const [activeChoice, setActiveChoice] = useState(null);
  const { cof } = route.params;

  return (
    <>
    <ScrollView
      style={{
        backgroundColor: "white",
      }}
    >
      <SafeAreaView>
        <ImageBackground
          source={{
            uri: GET_IMG("products", cof.photo),
          }}
          resizeMode="cover"
          style={{
            height: height / 2 + 10 * 2,
            marginHorizontal: 10,
            justifyContent: "space-between",
          }}
          imageStyle={{
            borderRadius: 10 * 4,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 10 * 2,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor:"white",
                padding: 10,
                borderRadius: 10 * 2,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons
                name="arrow-back"
                color="black"
                size={10 * 2}
              />
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                backgroundColor: "white",
                padding: 10,
                borderRadius: 10 * 2,
              }}
            >
              <Ionicons name="heart" size={10 * 2} color="red" />
            </TouchableOpacity>
          </View>
          {/* Frame */}
          <View
            style={{
              borderRadius: 10 * 4,
              overflow: "hidden",
            }}
          >
            <BlurView
              intensity={80}
              tint="default"
              style={{
                padding: 10 * 2,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 10 * 2,
                    color: "white",
                    fontWeight: "600",
                    marginBottom: 10,
                  }}
                >
                  {cof.name}
                </Text>
                <Text
                  style={{
                    fontSize: 10 * 1.3,
                    color: "#beb7b0",
                    fontWeight: "500",
                    marginBottom: 10,
                  }}
                >
                  {cof.included}
                </Text>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <Ionicons
                    name="star"
                    color="#d17842"
                    size={10 * 1.5}
                  />
                  <Text
                    style={{
                      color: "white",
                      marginLeft: 10,
                      fontWeight: "bold",
                    }}
                  >
                    4.5
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "35%",
                  justifyContent: "space-between",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View
                    style={{
                      padding: 10 / 2,
                      borderRadius: 10,
                      width: 10 * 5,
                      height: 10 * 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="cafe"
                      size={10 * 3}
                      color="white"
                    />
                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                      }}
                    >
                      coffee
                    </Text>
                  </View>

                  <View
                    style={{
                      padding: 10 / 2,
                      width: 10 * 5,
                      borderRadius: 10,
                      height: 10 * 5,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Ionicons
                      name="water"
                      size={10 * 3}
                      color="white"
                    />

                    <Text
                      style={{
                        color: "white",
                        fontSize: 10,
                      }}
                    >
                      Milk
                    </Text>
                  </View>
                </View>

                <View
                  style={{
                    padding: 10 / 2,
                    borderRadius: 10 / 2,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 10 * 1.3,
                      fontWeight: "bold",
                    }}
                  >
                    Medium roasted
                  </Text>
                </View>
              </View>
            </BlurView>
          </View>
        </ImageBackground>

        <View
          style={{
            padding: 10,
          }}
        >
          <Text
            style={{
              
              fontSize: 10 * 1.7,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Description
          </Text>
          <Text
            style={{
              color: "#beb7b0",
            }}
            numberOfLines={3}
          >
            {cof.description}
          </Text>
          {/* click choice of chocolate */}
          <View
            style={{
              marginVertical: 10 * 2,
            }}
          >
            <Text
              style={{
                
                fontSize: 10 * 1.7,
                marginBottom: 10,
                fontWeight: "bold",
              }}
            >
              Choice of Chocolate
            </Text>
            <FlatList
              data={choice}
              horizontal={true}
              showsHorizontalScrollIndicator={false} // Tắt thanh cuộn
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  onPress={() => setActiveChoice(index)}
                  key={index}
                  style={[
                    {
                      borderWidth: 1,
                      borderColor: "#967259",
                      paddingHorizontal: 10 * 2, // Thêm padding ngang
                      paddingVertical: 10 / 2,
                      marginHorizontal: 5,
                      borderRadius: 10 * 10,
                      backgroundColor: "white",
                      flex: 1, // Sử dụng flex để tự động điều chỉnh kích thước
                      alignItems: "center",
                      justifyContent: "center",
                    },
                    activeChoice === index && {
                      borderColor: "#967259",
                      backgroundColor: "#967259",
                    },
                  ]}
                >
                  <Text
                    style={[
                      {
                        color: "#beb7b0",
                        fontSize: 10 * 1.9,
                      },
                      activeChoice === index && {
                        color: "white",
                      },
                    ]}
                  >
                    {item}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          {/* Click size */}
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                flex: 1,
                marginVertical: 10 * 1,
              }}
            >
              <Text
                style={{
                  
                  fontSize: 10 * 1.7,
                  marginBottom: 10,
                  fontWeight: "bold",
                }}
              >
                Size
              </Text>

              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {size.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => setActiveSize(index)}
                    key={index}
                    style={[
                      {
                        borderRadius: 0.5 * (width / 3 - 10 * 4),
                        backgroundColor: "#beb7b0",
                        marginHorizontal: 5,
                        alignItems: "center", // Căn giữa theo chiều ngang
                        justifyContent: "center", // Căn giữa theo chiều dọc
                        minWidth: 50, // Đặt kích thước tối thiểu cho ô vuông
                        minHeight: 50, // Đặt kích thước tối thiểu cho ô vuông
                      },
                      activeSize === index && {
                        borderColor: "#967259",
                        backgroundColor: "#967259",
                      },
                    ]}
                  >
                    <Text
                      style={[
                        {
                          color: "#777777",
                          fontWeight: "bold",
                          textAlign: "center",
                          fontSize: 14, // Đặt kích thước chữ theo ý muốn
                        },
                        activeSize === index && {
                          color: "white",
                          fontWeight: "bold",
                        },
                      ]}
                    >
                      {item}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <View style={{ flex: 1, alignItems: "center" }}>
              <Text
                style={{
                  flex: 1,
                  
                  fontSize: 10 * 1.7,
                  marginBottom: 10,
                  fontWeight: "bold",
                }}
              >
                Quantity
              </Text>
              <View
                style={{
                  flex: 2,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TouchableOpacity>
                  <Image source={require("../assets/images/minu.png")} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 28,
                    marginHorizontal: 20,
                  }}
                >
                  1
                </Text>
                <TouchableOpacity>
                  <Image
                    source={require("../assets/images/plus.png")}
                    style={{}}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>

    <SafeAreaView
      style={{
        backgroundColor: "white",
        justifyContent: "space-between",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
          paddingLeft: 10 * 3,
        }}
      >
        <Text
          style={{ color: "#beb7b0", fontSize: 10 * 1.5 }}
        >
          Price
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              color: "#967259",
              fontSize: 10 * 2.5,
              fontWeight: "bold",
            }}
          >
            $
          </Text>
          <Text
            style={{
              
              fontSize: 10 * 2.4,
              fontWeight: "bold",
              marginLeft: 10 / 2,
            }}
          >
            {cof.price}
          </Text>
        </View>
      </View>
      <TouchableOpacity
    
        style={{
          backgroundColor: "#967259",
          width: width / 2 + 10 * 3,
          marginRight: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10 * 4,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 10 * 2,
            fontWeight: "700",
          }}
        >
          Buy Now
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  </>
  );
}

export default ProductDetail;
