import { useFormik } from "formik";
import * as Yup from "yup";
import { NewTaskInitialState } from "./Types";
import { useEffect } from "react";
import { TaskActions, useAppDispatch } from "../../redux";
import { Alert } from "react-native";
import uuid from 'react-native-uuid';

const newTaskSchema = Yup.object().shape({
    title: Yup.string()
        .transform((value) => (value ? value.trim() : value))
        .min(2, "Minimum 2 characters are required")
        .max(50, "Maximum 50 characters are allowed")
        .required("Task title is required"),
    about: Yup.string()
        .transform((value) => (value ? value.trim() : value))
        .min(10, "Minimum 10 characters are required")
        .max(500, "Maximum 500 characters are allowed")
        .required("About task is required"),
})

const initialValues: NewTaskInitialState = {
    id: '',
    title: "",
    about: "",
    timestamp: 0,
    isComplete: false,
}

export const useNewTask = (closeNewTaskModal: () => void) => {

    const dispatch = useAppDispatch();

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: newTaskSchema,
        onSubmit: (values: NewTaskInitialState) => {
            values.id = uuid.v4().toString();
            values.timestamp = new Date().getTime();
            dispatch(TaskActions.addNewTask(values));
            formik.resetForm();
            closeNewTaskModal();
            Alert.alert("New Task Added","", [{
                text: "OK",
            }]);
        }
    })
    
    return {
        formik
    }
}
