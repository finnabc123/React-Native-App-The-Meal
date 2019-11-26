import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';


import Colors from '../constants/Colors';


const CustomHeaderButtoon = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={Ionicons}
            iconSize={21}
            color={Colors.primaryColor}
        />
    );
}

export default CustomHeaderButtoon;