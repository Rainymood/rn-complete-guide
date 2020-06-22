import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [isAddMode, setIsAddMode] = useState(false);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals((currentGoals) => {
            return [...currentGoals, { id: Math.random().toString(), value: goalTitle }];
        });
    };

    const removeGoalHandler = (goalId) => {
        setCourseGoals((currentGoals) => {
            return currentGoals.filter((goal) => goal.id !== goalId);
        });
    };

    return (
        <View style={styles.screen}>
            {/* <Button title ="Add new goal" /> */}
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={courseGoals}
                renderItem={(itemData) => (
                    <GoalItem id={itemData.item.id} title={itemData.item.value} onDelete={removeGoalHandler} />
                )}
            />
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
        borderColor: 'black',
    },
});
