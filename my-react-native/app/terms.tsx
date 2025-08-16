import { Platform, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

export default function Terms() {
  const url = "https://www.lipsum.com/"

  return Platform.OS === "web" ? (
    <iframe src={url} height={'100%'} width={'100%'} />
  ) : (
    <WebView
        originWhitelist={['*']}
        style={styles.webview}
        source={{ uri: url }}
    />
  );
}

const styles = StyleSheet.create({
  webview: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});