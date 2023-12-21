export interface TaskType {
    id: string,
    title: string,
    about: string,
    timestamp: number,
    isComplete: boolean,
}

export interface TaskSliceStateType {
    tasks: TaskType[],
}
