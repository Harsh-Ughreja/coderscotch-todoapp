import React, { FC } from "react";
import { Text, View } from "react-native";
import styles from "./HeaderStyles";
import { HeaderButton } from "..";
import { moderateScale } from "../../theme";
import {Plus, X} from 'phosphor-react-native';
import { MainHeaderPropsType, ModalHeaderPropsType } from "./Types";

export const ModalHeader: FC<ModalHeaderPropsType> = ({
    title,
    onPress
}) => {

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.modalheaderTitleText}>
                {title}
            </Text>
            <HeaderButton
                icon={<X size={moderateScale(23)} weight="bold" />}
                onPress={onPress}
            />
        </View>
    )
}
