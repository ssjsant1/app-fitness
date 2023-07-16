import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import { Dimensions } from 'react-native';

const { screenWidth, screenHeight } = Dimensions.get('window');


const ExerciseList = () => {
  const exercises = [
    { id: 1, title: 'Exercise 1' },
    { id: 2, title: 'Exercise 2' },
    { id: 3, title: 'Exercise 3' },
    { id: 4, title: 'Exercise 4' },
    { id: 5, title: 'Exercise 5' },
    { id: 6, title: 'Exercise 6' },
    { id: 7, title: 'Exercise 7' },
    { id: 8, title: 'Exercise 8' },
    { id: 9, title: 'Exercise 9' },
    { id: 10, title: 'Exercise 10' },

  ];

  const renderExercise = ({ item }) => {
    return (
      <View style={styles.card}>
        <Text>{item.title}</Text>
      </View>
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={renderExercise}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
      />
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
    paddingVertical: 20
  },
  card: {
    width: 200,
    height: 250,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ExerciseList;
