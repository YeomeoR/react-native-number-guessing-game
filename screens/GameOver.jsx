import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOver = ({roundsNumber, userNumber, onRestart}) => {
    return (
      <View style={styles.screen}>
            <Text>GAME OVER!</Text>
            <Text>Number of Rounds: {roundsNumber}</Text>
            <Text> Number was: {userNumber}</Text>
            <Button title='New Game?' onPress={onRestart}></Button>
      </View>
    );
}

const styles = StyleSheet.create( {
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})




export default GameOver
