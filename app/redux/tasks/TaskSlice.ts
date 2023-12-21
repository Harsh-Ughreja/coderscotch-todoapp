import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TaskSliceStateType, TaskType } from "./Types";

const initialState: TaskSliceStateType = {
    tasks: [],
}

const TaskSlice = createSlice({
    name: "task",
    initialState: initialState,
    reducers: {
        addNewTask: (state: TaskSliceStateType, action: PayloadAction<TaskType>) => {
            state.tasks = [action?.payload, ...state?.tasks];
        },
        deleteTask: (state: TaskSliceStateType, action: PayloadAction<string>) => {
            state.tasks = state?.tasks?.filter((task: TaskType) => {
                return action?.payload != task.id;
            })
        },
        toggleTaskStatus: (state: TaskSliceStateType, action: PayloadAction<string>) => {
            state.tasks = state?.tasks?.map((task: TaskType) => {
                if(action.payload === task.id) {
                    task.isComplete = !task?.isComplete;
                }
                return task;
            })
        },
    }
})

export const TaskReducer = TaskSlice.reducer;
export const TaskActions = TaskSlice.actions;
