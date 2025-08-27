import React, { useState } from 'react';
import {
    ActivityIndicator,
    Alert,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

export default ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const NETWORK_ERR_MSG = 'Network error. Please check your connection and try again.';
  const SUBMIT_ERR_MSG = 'Error submitting form:';

  const POST_URL = '#'

  const validate = () => {
    const newErrors = {};
    
    if (!name.trim()) newErrors.name = 'Name is required';
    
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    setAlertMessage('');
    if (!validate()) return;
    setIsLoading(true);

    try {
      const response = await fetch(POST_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });
      
      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', data.message);
        // setAlertMessage(SENT_MSG)
        setAlertMessage(data.message)
        // Reset form
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
      } else {
        Alert.alert('Error', data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', NETWORK_ERR_MSG);
      console.error(SUBMIT_ERR_MSG, error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        {alertMessage !== '' && <Text style={styles.alertText}>{alertMessage}</Text>}
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          value={name}
          onChangeText={setName}
          placeholder="Your name"
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={[styles.input, errors.email && styles.inputError]}
          value={email}
          onChangeText={setEmail}
          placeholder="Your email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Message</Text>
        <TextInput
          style={[styles.textArea, errors.message && styles.inputError]}
          value={message}
          onChangeText={setMessage}
          placeholder="Your message"
          multiline
          numberOfLines={4}
          textAlignVertical="top"
        />
        {errors.message && <Text style={styles.errorText}>{errors.message}</Text>}
      </View>
      
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSubmit}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Submit</Text>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    width: '100%',
  },
  textArea: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    width: '100%',
  },
  inputError: {
    borderColor: 'red',
  },
  alertText: {
    fontSize: 16,
    color: '#00d311',
    fontStyle: 'italic',
    marginBottom: 15,
    marginTop: 0,
    textAlign: 'center'
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
  button: {
    backgroundColor: 'aqua',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
