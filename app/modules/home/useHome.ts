import { TaskActions, TaskType, useAppDispatch, useAppSelector } from "../../redux";

export const useHome = () => {

    const {
        tasks
    }: {
        tasks: TaskType[]
    } = useAppSelector(state => state.task);
    const dispatch = useAppDispatch();

    const deleteTask = (id: string) => {
        dispatch(TaskActions.deleteTask(id));
    }

    const toggleTaskStatus = (id: string) => {
        dispatch(TaskActions.toggleTaskStatus(id));
    }

    return {
        tasks,
        deleteTask,
        toggleTaskStatus
    }
}
