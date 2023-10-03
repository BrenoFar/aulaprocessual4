import * as React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';

interface CustomImageProps {
  fromWeb?: boolean;
  image: any; // Change 'any' to a more specific type if needed
  title: string;
  width: number;
  height: number;
}

export default function CustomImage({ fromWeb, image, title, width, height }: CustomImageProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.tituloImage}>{title}</Text>
      {fromWeb || <Image source={image} style={{ width, height }} />}
      {!fromWeb || <Image source={{ uri: image }} style={{ width, height }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Center horizontally
    justifyContent: 'center', // Center vertically
  },
  tituloImage: {
    paddingTop: 10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#8D4600',
  },
});
