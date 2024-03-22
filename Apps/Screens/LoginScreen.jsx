import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useWarmUpBrowser } from "../../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <ImageBackground
      className="w-full h-full"
      source={require("./../../assets/images/background.jpeg")}
    >
      <View className=" w-full h-full p-2 flex-col items-center justify-center space-y-10">
        <Image
          source={require("./../../assets/images/marketplace.jpeg")}
          className="w-full h-48 rounded-lg mb-20"
        />
        <Text className="text-white text-3xl font-bold ">
          Community Marketplace
        </Text>
        <Text className="text-gray-300">
          Buy and sell old or new things and make real money
        </Text>
        <View className="w-full">
          <TouchableOpacity onPress={onPress}>
            <Text className="text-gray-200 text-center text-2xl font-bold border border-blue-700 p-3 mt-3 bg-blue-900 rounded-full">
              Get Sarted
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
