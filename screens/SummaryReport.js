import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SummaryReport = () => {
    return (
      <View style={styles.container}>
        <Text>Summary Report Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default SummaryReport;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});