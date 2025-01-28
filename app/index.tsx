import { Colors } from "@/assets/colors/Colors";
import CustomButton from "@/components/CustomButton";
import { images } from "@/constants";
import { router } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.safeView}>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View style={styles.imageView}>
          <Image
            source={images.logo}
            style={styles.imageLogo}
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            style={styles.imageCard}
            resizeMode="contain"
          />
        </View>

        <View style={styles.textView}>
          <Text style={styles.mainText}>
            Discover Endless Possibilites{" "}
            <Text style={styles.logoText}>Aora</Text>
          </Text>

          <CustomButton
            title="Continue With Email"
            containerStyle={{ width: "100%", marginTop: 17 }}
            handlePress={() => router.push("/sign-in")}
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" barStyle="default" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    flex: 1,
    backgroundColor: Colors.primary,
    paddingHorizontal: 12,
  },
  imageView: {
    width: "100%",
    paddingHorizontal: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLogo: {
    width: 130,
    height: 84,
  },
  imageCard: {
    maxWidth: 380,
    width: "100%",
    height: 300,
  },
  textView: {
    marginTop: 20,
    display: "flex",
    alignItems: "center",
  },
  mainText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#ffffff",
    fontSize: 30,
  },
  logoText: {
    color: `${Colors.secondary[200]}`,
  },
});
