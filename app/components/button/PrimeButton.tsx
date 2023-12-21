import React, { FC } from "react";
import { Pressable, Text } from "react-native";
import styles from "./ButtonStyles";
import { PrimeButtonPropsType } from "./Types";

export const PrimeActionButton: FC<PrimeButtonPropsType> = ({
    text,
    onPress,
}) => {

    return (
        <Pressable style={styles.primeActionButton} onPress={onPress}>
            <Text style={styles.primeButtonText}>
                {text}
            </Text>
        </Pressable>
    )
}
