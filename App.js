import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { ClerkProvider , SignedIn , SignedOut} from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./Apps/Navigations/TabNavigation";

export default function App() {
  return (
    <ClerkProvider publishableKey="pk_test_cHJvcGVyLXJlaW5kZWVyLTk1LmNsZXJrLmFjY291bnRzLmRldiQ">
      <View className="flex-1">
        <StatusBar style="auto" />

        <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
          <LoginScreen />
        </SignedOut>
      </View>
    </ClerkProvider>
  );
}
