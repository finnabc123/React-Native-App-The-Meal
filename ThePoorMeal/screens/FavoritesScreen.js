import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FavoritesScreen = props => {
    return (
        <View style={styles.screen}>
            <Text> This is Favorites Screen </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FavoritesScreen;