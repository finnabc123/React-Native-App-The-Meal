import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridTitle = props => {

    let TouchableComponent = TouchableOpacity;

    if (Platform.OS === 'android' && Platform.Version > 20) {
        TouchableComponent = TouchableNativeFeedback;
    }

    return (
        <View style={styles.gridItem}>
            <TouchableComponent
                style={styles.touchableComp}
                onPress={() => props.onSelect()}>
                <View
                    style={{ ...styles.container, ...{ backgroundColor: props.color } }}>
                    <Text style={styles.title} numberOfLines={2}> {props.title} </Text>
                </View>
            </TouchableComponent>
        </View>
    );
}
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 10,
        height: 121,
        borderRadius: 5,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        shadowColor: 'gray',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 4,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'

    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 21,
        textAlign: 'right'
    },
    touchableComp: {
        flex: 1
    }
});

export default CategoryGridTitle;