import Footer from '@/components/footer';
import Logo from '@/components/logo';
import Menu from '@/components/menu';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';

export default function About() {
  return (
    <SafeAreaView style={styles.container}>
      <Menu />
      <ScrollView>
        <Logo />
        <Text style={styles.bodyContainer}>
          <Text style={styles.bodyTitle}>
            About{'\n'}{'\n'}
          </Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin tortor purus platea sit eu id nisi litora libero. Neque vulputate consequat ac amet augue blandit maximus aliquet congue. Pharetra vestibulum posuere ornare faucibus fusce dictumst orci aenean eu facilisis ut volutpat commodo senectus purus himenaeos fames primis convallis nisi.
          {'\n'}{'\n'}Phasellus fermentum malesuada phasellus netus dictum aenean placerat egestas amet. Ornare taciti semper dolor tristique morbi. Sem leo tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus mollis nisi mollis enim fermentum laoreet.
          {'\n'}{'\n'}Curabitur semper venenatis lectus viverra ex dictumst nulla maximus. Primis iaculis elementum conubia feugiat venenatis dolor augue ac blandit nullam ac phasellus turpis feugiat mollis. Duis lectus porta mattis imperdiet vivamus augue litora lectus arcu. Justo torquent pharetra volutpat ad blandit bibendum accumsan nec elit cras luctus primis ipsum gravida class congue.
          {'\n'}Let us know what you think!
        </Text>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFF",
    marginBottom: 26,
  },
  bodyContainer: {
    marginHorizontal: 14,
    padding: 14,
    lineHeight: 20,
    fontSize: 12,
    color: '#000',
    borderWidth: 3,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: '#ffeebc',
    fontFamily: "SpaceMono",
    textAlign: "center",
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#00cbff',
  },
});