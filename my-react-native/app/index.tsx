import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text>Edit app/index.tsx to edit this screen.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    color: '#00cbff;',
    backgroundColor: '#FFF',
    marginBottom: 20,
  },
  bodyContainer: {
    marginHorizontal: 18,
    padding: 18,
    fontSize: 14,
    textAlign: 'center',
  },
});