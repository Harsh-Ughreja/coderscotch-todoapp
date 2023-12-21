import { TaskType } from "../../redux";

export interface TaskCardPropsType {
    task: TaskType,
    deleteTask: (id: string) => void,
    toggleTaskStatus: (id: string) => void,
    index: number
}
