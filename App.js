import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState('');
    const [courseGoals, setCourseGoals] = useState([]);

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
      setCourseGoals([...courseGoals, enteredGoal])
    }

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} value={enteredGoal}/>
                <Button title='ADD' onPress={addGoalHandler}/>
            </View>
            <ScrollView>
              {courseGoals.map((goal) => <View style={styles.listItem}><Text key={goal}>{goal}</Text></View>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
    },
    listItem: {
      padding: 10,
      marginVertical: 10,
      backgroundColor: '#ccc',
      borderWidth: 1,
      borderColor: 'black'
    }
});
