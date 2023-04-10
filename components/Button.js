import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from '../styles/Button.style'

const Button = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.button}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

export default Button;
