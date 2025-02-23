import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    TouchableOpacityProps,
    Text
} from 'react-native';
import Colors from '../../../Colors';

import styles from './styles';

import {DefaultButtonTypes} from './types';

const DefaultButton = (props: DefaultButtonTypes & TouchableOpacityProps) => {

    const {
        themeText: text,
        themeSize: size = 'xs',
        themeColor: color = 'success',
        onPress
    } = props;

    const sizes = {
        xs: 151,
        sm: 183,
        md: 256,
        lg: 328,
    }

    return (
        <TouchableOpacity
            onPress={onPress && onPress}
            style={{
                width: sizes[size],
                height: 40,
                backgroundColor: Colors[color],
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
            }}>
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export {DefaultButton};
