import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>
            How It Works
          </Text>
          <Text>
            {'\n\n'}Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            {'\n\n'}Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
            {'\n'}
          </Text>
          <Text>{'\n\u2022'} Bullet-style List Item 1</Text>
          <Text>{'\n\u2022'} Bullet-style List Item 2</Text>
          <Text>{'\n\u2022'} Bullet-style List Item 3</Text>
        </Text>
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