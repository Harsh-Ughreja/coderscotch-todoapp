import React, { FC } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "./InputStyles";
import { Colors } from "../../theme";
import { CustomInputParamsType } from "./Types";


export const CustomInputTextArea: FC<CustomInputParamsType> = ({
    title,
    placeholder,
    name,
    value,
    formik,
    autoCapitalize,
    helperText,
    touched,
    error,
}) => {

    const {
        handleChange,
        handleBlur
    } = formik;

    return (
        <View style={styles.inputField}>
            {title && (
                <View style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}>
                    <Text style={styles.inputFieldTitle}>
                        {title}
                    </Text>
                </View>
            )}
            <TextInput
                style={[styles.inputTextField, {
                    verticalAlign: "top",
                }]}
                placeholder={placeholder}
                placeholderTextColor={Colors.grey}
                onChangeText={handleChange(name)}
                onBlur={handleBlur(name)}
                value={value}
                autoCapitalize={autoCapitalize == false ? "none" : "sentences"}
                numberOfLines={10}
                multiline
            />
            {helperText && (
                <Text style={styles.inputFieldHelptext}>
                    {helperText}
                </Text>
            )}
            {touched && error && (
                <Text style={styles.inputFieldInstructionText}>
                    {error}
                </Text>
            )}
        </View>
    )
}
