import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Button
        title="Press to change screen"
        onPress={() => navigation.navigate('Second')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
});

export default Home;
