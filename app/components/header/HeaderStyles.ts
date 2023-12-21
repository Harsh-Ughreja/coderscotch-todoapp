import { StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../theme";
import { FontFamily } from "../../contants";

const styles = StyleSheet.create({

    headerContainer: {
        padding: moderateScale(20),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    headerTitleText: {
        color: Colors.black,
        fontFamily: FontFamily.defaultBold,
        fontSize: 30
    },
    modalheaderTitleText: {
        color: Colors.black,
        fontFamily: FontFamily.defaultSemiBold,
        fontSize: 25
    }
});

export default styles;
