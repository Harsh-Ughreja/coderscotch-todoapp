import React, { FC } from "react";
import { Text, View } from "react-native";
import styles from "./HeaderStyles";
import { HeaderButton } from "..";
import { moderateScale } from "../../theme";
import {Plus} from 'phosphor-react-native';
import { MainHeaderPropsType } from "./Types";

export const MainHeader: FC<MainHeaderPropsType> = ({
    onPress
}) => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerTitleText}>
                Will ToDo
            </Text>
            <HeaderButton
                icon={<Plus size={moderateScale(23)} weight="bold" />}
                onPress={onPress}
            />
        </View>
    )
}
