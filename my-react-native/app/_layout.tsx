import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import React from 'react';

export default function RootLayout() {
  useFonts({
    'SpaceMono': require('@/assets/fonts/SpaceMono-Regular.ttf'),
  });

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