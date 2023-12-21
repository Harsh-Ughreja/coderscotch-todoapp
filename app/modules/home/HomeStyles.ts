import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { FontFamily } from "../../contants";

const styles = StyleSheet.create({
    emptyList: {
        marginVertical: verticalScale(50),
        flexDirection: "column",
        alignItems: "center",
    },
    emptyListImage: {
        width: horizontalScale(200),
        height: verticalScale(200),
    },
    emptyListText: {
        fontFamily: FontFamily.defaultSemiBold,
        fontSize: moderateScale(20),
        marginTop: verticalScale(30),
        color: Colors.black,
    }
})

export default styles;
