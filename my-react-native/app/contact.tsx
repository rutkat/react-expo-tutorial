import EmailContactForm from '@/components/emailContactForm'
import Footer from '@/components/footer'
import Logo from '@/components/logo'
import Menu from '@/components/menu'
import React from 'react'
import {
    KeyboardAvoidingView,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text
} from 'react-native'

export default function Contact() {
  
  return (
    <SafeAreaView style={styles.container}>
      <Menu />  
      <ScrollView>  
        <Logo />
        <KeyboardAvoidingView style={styles.formContainer}>
          <Text style={styles.formTitle}>
            Contact
          </Text>
        <EmailContactForm />
        </KeyboardAvoidingView>
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
    marginBottom: 20,
  },
  formContainer: {
    marginHorizontal: 15,
    marginBottom: 30,
    padding: 12,
    fontSize: 12,
    color: '#000',
    borderWidth: 3,
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: '#ffeebc',
  },
  formTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: '#00cbff',
    textAlign: 'center',
    fontFamily: "SpaceMono",
  },
});