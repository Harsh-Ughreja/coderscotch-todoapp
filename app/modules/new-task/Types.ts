import { TaskType } from "../../redux";

export interface NewTaskScreenPropsType {
    showModal: boolean,
    closeNewTaskModal: () => void,
}

export interface NewTaskInitialState extends TaskType {}
