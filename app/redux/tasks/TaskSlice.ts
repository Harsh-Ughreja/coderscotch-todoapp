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
            state.tasks = state?.tasks?.filter((value: TaskType) => {
                return action?.payload != value.id;
            })
        },
        toggleTaskStatus: (state: TaskSliceStateType, action: PayloadAction<string>) => {
            state.tasks = state?.tasks?.map((value: TaskType) => {
                if(action.payload === value.id) {
                    value.isComplete = !value?.isComplete;
                }
                return value;
            })
        },
    }
})

export const TaskReducer = TaskSlice.reducer;
export const TaskActions = TaskSlice.actions;
