import { Link } from 'expo-router';
import { StyleSheet, Text, View } from "react-native";

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>Developed by Runastartup.com 2025 &nbsp;
        <Link href={"/terms"} style={styles.link}>Terms</Link>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    position: "fixed",
    width: "100%",
    bottom: 0,
    backgroundColor: "aqua",
    padding: 6,
  },
  text: {
    color: "#515151",
    fontSize: 11,
  },
  link: {
    textDecorationLine: "underline",
  }
})

