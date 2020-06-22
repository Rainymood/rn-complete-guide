import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);

    const addGoalHandler = (goalTitle) => {
        setCourseGoals([...courseGoals, { key: Math.random().toString(), value: goalTitle }]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput onAddGoal={addGoalHandler} />
            <FlatList
                data={courseGoals}
                renderItem={(itemData) => <GoalItem title={itemData.item.value} onDelete={() => console.log('Click on GoalItem')} />}
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
