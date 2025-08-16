import { Image, StyleSheet, View } from 'react-native';

const srcLogo = require('@/assets/images/myyellow.png');

export default function Logo() {

  return(
    <View style={styles.safeContainer}>
      <Image
        style={styles.logo}
        source={srcLogo}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  safeContainer: {
   alignItems: "center",
  },
  logo: {
    backgroundSize: "contain",
    width: 300,
    height: 220,
  },
});