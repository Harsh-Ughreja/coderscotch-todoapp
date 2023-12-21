import { StyleSheet } from "react-native";
import { Colors, horizontalScale, moderateScale, verticalScale } from "../../theme";
import { FontFamily } from "../../contants";

const styles = StyleSheet.create({
    taskCard: {
        marginHorizontal: horizontalScale(20),

        // Card Theme 1
        // paddingTop: verticalScale(30),
        // paddingBottom: verticalScale(30),
        // borderBottomWidth: 0.5,
        // borderBottomColor: Colors.lightgrey,

        // Card Theme 2
        backgroundColor: "#f7f7f7",
        marginVertical: verticalScale(13.5),
        borderRadius: 10,
        padding: horizontalScale(15),
    },
    taskTitle: {
        fontFamily: FontFamily.default,
        fontSize: moderateScale(10),
        color: Colors.grey,
    },
    taskTitleValue: {
        fontFamily: FontFamily.defaultSemiBold,
        fontSize: moderateScale(16),
        color: Colors.black,
    },
    aboutTaskValue: {
        fontFamily: FontFamily.default,
        fontSize: moderateScale(12),
        color: Colors.black,
        marginTop: verticalScale(5),
    },
    taskCardFooter: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: verticalScale(15),
        alignItems: "flex-end",
    },
    taskStatusText: {
        fontFamily: FontFamily.defaultSemiBold,
        fontSize: moderateScale(14),
        color: Colors.green,
    },
    completedTaskText: {
        color: Colors.green,
    },
    remainingTaskText: {
        color: Colors.red,
    },
    taskDate: {
        fontFamily: FontFamily.default,
        fontSize: moderateScale(12),
        color: Colors.black,
    },
    cardFooterButtonContainer: {
        flexDirection: "row",
        alignItems: "center",
        columnGap: horizontalScale(20),
    }
})

export default styles;
