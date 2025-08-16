import { Link } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function Menu() {

  return (
    <View style={styles.navContainer}>
      <Link href="/" style={styles.button} push>
        HOW
      </Link>
      <Link href="/about" style={styles.button}>
        ABOUT
      </Link>
      <Link href="/app" style={styles.button}>
        FORM
      </Link>
      <Link href="/contact" style={styles.button}>
        CONTACT
      </Link>
      <Link href="/blog" style={styles.button}>
        BLOG
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    alignSelf: "stretch",
    padding: 10,
  },
  button: {
    fontFamily: "SpaceMono", 
    fontSize: 12,
    textDecorationLine: 'none',
    color: '#00cbff',
    backgroundColor: "#ffeebc",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 4,
    borderRadius: 10,
  },
});
