import { StyleSheet } from "react-native";
import { FontFamily } from "../../contants";
import { Colors, moderateScale, verticalScale } from "../../theme";

const styles = StyleSheet.create({

    headerButton: {
        padding: moderateScale(8),
        borderRadius: 100,
        backgroundColor: "#f0f0f0",
    },
    primeActionButton: {
        height: verticalScale(50),
        borderRadius: 100,
        backgroundColor: Colors.primeBlue,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    primeButtonText: {
        fontFamily: FontFamily.default,
        color: Colors.white,
        textAlign: "center",
        fontSize: moderateScale(14),
    }
})

export default styles;
