import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DetailedReport = () => {
    return (
      <View style={styles.container}>
        <Text>Detailed Report Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default DetailedReport;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});