import React, { FC } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./ButtonStyles";
import { HeaderButtonParamType } from "./Types";

export const HeaderButton: React.FC<HeaderButtonParamType> = ({
    onPress,
    icon
}) => {

    return (
        <Pressable style={styles.headerButton} onPress={onPress}>
            {icon}
        </Pressable>
    )
}
