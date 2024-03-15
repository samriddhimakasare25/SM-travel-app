import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useLayoutEffect } from "react";
import * as Animatable from "react-native-animatable";

import { useNavigation } from "@react-navigation/native";
import {BImage} from "../assets";

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-black flex-1 relative">
      {/* First Section */}

      <View className="flex-row px-6 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-white rounded-full items-center justify-center">
          <Text className="text-[#00BCC9] text-3xl font-semibold">SM</Text>
        </View>

        <Text className="text-[#ffffff] text-3xl font-semibold">Travel</Text>
      </View>

      {/* Second Section */}
      <View className="px-6 mt-8 space-y-3">
        <Text className="text-[#5da1c3] text-[42px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[38px] font-bold">
          Good Moments
        </Text>

        <Text className="text-[#00BCC9] text-base">
          S Travel Find the best Travel Jounery here
        </Text>
      </View>

       {/* Image Section */}
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={{
            uri:
              'https://www.pngall.com/wp-content/uploads/8/World-Travel-Transparent.png',
          }}
          style={{ width: 550, height: 550, top: 150, resizeMode: 'cover' }}
        />

        <TouchableOpacity
          onPress={() => navigation.navigate("Discover")}
          className="absolute bottom-20 w-24 h-24 border-l-2 border-r-2 border-t-4 border-[#00BCC9] rounded-full items-center justify-center"
        >
          <Animatable.View
            animation={"pulse"}
            easing="ease-in-out"
            iterationCount={"infinite"}
            className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]"
          >
            <Text className="text-gray-50 text-[36px] font-semibold">Go</Text>
          </Animatable.View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;