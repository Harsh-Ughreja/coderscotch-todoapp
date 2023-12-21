import { Clock, Trash } from "phosphor-react-native";
import React, { FC, useState } from "react";
import { Switch, Text, View } from "react-native";
import { HeaderButton } from "..";
import { Colors, moderateScale } from "../../theme";
import { getDisplayTime } from "../../utils";
import styles from "./CardStyles";
import { TaskCardPropsType } from "./Types";

export const TaskCard: FC<TaskCardPropsType> = ({
    task,
    deleteTask,
    toggleTaskStatus,
    index
}) => {

    const [viewFullData, setViewFullData] = useState<boolean>(false);
    const handleOnContentPress = () => {
        setViewFullData(!viewFullData);
    }

    return (
        <View style={styles.taskCard}>
            <Text style={styles.taskTitle}>
                Task Title [{index + 1}]
            </Text>
            <Text style={styles.taskTitleValue} numberOfLines={viewFullData ? 0 : 2} onPress={handleOnContentPress}>
                {task?.title}
            </Text>
            <Text style={styles.aboutTaskValue} numberOfLines={viewFullData ? 0 : 5} onPress={handleOnContentPress}>
                {task?.about}
            </Text>
            <View style={styles.taskCardFooter}>
                <View>
                    {task?.isComplete ?
                        <Text style={[styles.taskStatusText, styles.completedTaskText]}>COMPLETED</Text> :
                        <Text style={[styles.taskStatusText, styles.remainingTaskText]}>REMAIN</Text>
                    }
                    <Text style={styles.taskDate}>
                        <Clock size={moderateScale(10)} weight="bold" />
                        &nbsp;&nbsp;
                        {getDisplayTime(task?.timestamp)}</Text>
                </View>
                <View style={styles.cardFooterButtonContainer}>
                    <Switch
                        thumbColor={task?.isComplete ? Colors.primeBlue : 'grey'}
                        value={task?.isComplete}
                        onValueChange={() => toggleTaskStatus(task?.id)}
                    />
                    <HeaderButton
                        icon={<Trash size={moderateScale(15)} weight="bold" color={Colors.red} />}
                        onPress={() => deleteTask(task?.id)}
                    />
                </View>
            </View>
        </View>
    )
}
