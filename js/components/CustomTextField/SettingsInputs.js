import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';
import { colors } from "../../config/styles";

const TitledInput = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    
        return (
            <View style={styles.settingsContainerStyle}>
                <TextInput
                    placeholder={placeholder}
                    placeholderTextColor="white"
                    selectionColor={colors.yellow}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={value}
                    onChangeText={onChangeText}
                    style={styles.inputStyle}
                />
            </View>
        );
};

export default TitledInput;