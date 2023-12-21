import React, { FC } from "react"
import { FlatList, Image, Text, View } from "react-native"
import { AppStyles } from "../../theme"
import { MainHeader, TaskCard } from "../../components"
import { useTask } from "../../hooks"
import { NewTaskScreen } from ".."
import styles from "./HomeStyles"
import { Images } from "../../assets"
import { useHome } from "./useHome"
import { TaskType } from "../../redux"

export const HomeScreen: FC = () => {

    const {
        showModal,
        closeNewTaskModal,
        viewNewTaskModal
    } = useTask();

    const {
        tasks,
        deleteTask,
        toggleTaskStatus
    } = useHome();

    return (
        <>
            <View style={AppStyles.ScreenContainer}>
                <MainHeader
                    onPress={viewNewTaskModal}
                />
                <FlatList 
                    data={tasks}
                    renderItem={({item, index}: {item: TaskType, index: number}) => {
                        return (
                            <TaskCard 
                                task={item}
                                deleteTask={deleteTask}
                                toggleTaskStatus={toggleTaskStatus}
                                index={index}
                            />
                        )
                    }}
                    ListEmptyComponent={<EmptyTaskList />}
                    keyExtractor={(item: TaskType) => item.id}
                />
            </View>
            <NewTaskScreen
                showModal={showModal}
                closeNewTaskModal={closeNewTaskModal}
            />
        </>
    )
}


const EmptyTaskList = () => {

    return (
        <View style={styles.emptyList}>
            <Image source={Images.taskTarget} style={styles.emptyListImage} />
            <Text style={styles.emptyListText}>
                Oops!, No task added yet.
            </Text>
        </View>
    )
}
