import React from "react";
import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { FontFamily } from "../../contants";

const styles = StyleSheet.create({
    inputFieldTitle: {
        fontSize: moderateScale(14),
        marginBottom: verticalScale(5),
        fontFamily: FontFamily.default,
        color: Colors.black,
    },
    inputTextField: {
        padding: moderateScale(10),
        fontSize: moderateScale(14),
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        fontFamily: FontFamily.default,
    },
    inputField: {
        marginBottom: verticalScale(30),
    },
    inputFieldHelptext: {
        marginTop: verticalScale(5),
        fontSize: moderateScale(10),
        fontFamily: FontFamily.default,
        color: Colors.black,
    },
    inputFieldInstructionText: {
        fontSize: moderateScale(10),
        color: Colors.red,
        marginTop: verticalScale(5),
        fontFamily: FontFamily.default,
    }
})

export default styles;
