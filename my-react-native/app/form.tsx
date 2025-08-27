import Footer from '@/components/footer'
import Logo from '@/components/logo'
import Menu from '@/components/menu'
import React from "react"
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

export default function App() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Menu />  
      <ScrollView>
        <Logo />
        <View style={styles.bodyContainer}>
          <Text style={styles.bodyText}>
            Welcome to My React Native App.
            {'\n'}{'\n'}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.
            {'\n'}Let us know what you think!
          </Text>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: "#FFF",
    marginBottom: 26,
  },
  bodyContainer: {
    marginHorizontal: 14,
    marginBottom: 30,
    padding: 14,
    lineHeight: 20,
    color: '#000',
    borderWidth: 3,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: '#ffeebc',
    
  },
  bodyText: {
    fontFamily: "SpaceMono",
    fontSize: 14,
  }
});