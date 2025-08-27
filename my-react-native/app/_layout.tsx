import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Home', headerShown: false }} />
      <Stack.Screen name="about" options={{ title: 'About', headerShown: false }} />
      <Stack.Screen name="form" options={{ title: 'App', headerShown: false }} />
      <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
      <Stack.Screen name="terms" options={{ title: 'Terms', headerShown: true }} />
    </Stack>
  );
}