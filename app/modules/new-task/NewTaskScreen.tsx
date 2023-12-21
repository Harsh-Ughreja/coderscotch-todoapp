import React from "react";
import { Modal, ScrollView, Text, View } from "react-native";
import { AppStyles } from "../../theme";
import { NewTaskScreenPropsType } from "./Types";
import { CustomInput, CustomInputTextArea, ModalHeader, PrimeActionButton } from "../../components";
import { useNewTask } from "./useNewTask";
import styles from "./NewTaskStyles";

export const NewTaskScreen: React.FC<NewTaskScreenPropsType> = ({
    showModal,
    closeNewTaskModal
}) => {

    const {
        formik
    } = useNewTask(closeNewTaskModal);
    const {
        handleBlur,
        handleChange,
        errors,
        touched,
        values,
        handleSubmit
    } = formik;

    return (
        <Modal
            animationType="slide"
            visible={showModal}
            onRequestClose={() => {
                formik.resetForm();
                closeNewTaskModal();
            }}
        >
            <View style={AppStyles.ScreenContainer}>
                <ModalHeader
                    onPress={() => {
                        formik.resetForm();
                        closeNewTaskModal();
                    }}
                    title="New Task"
                />
                <ScrollView>
                    <View style={styles.formContainer}>
                        <CustomInput 
                            title={"Task Title"}
                            placeholder={"Enter task title here"}
                            formik={formik}
                            name={"title"}
                            onChange={handleChange("title")}
                            onBlur={handleBlur("title")}
                            error={errors?.title}
                            value={values?.title}
                            touched={touched?.title}
                            helperText="eg. Meeting, Assignment, Reviewing Code"
                        />
                        <CustomInputTextArea
                            title={"About Task"}
                            placeholder={"Enter about task here"}
                            formik={formik}
                            name={"about"}
                            onChange={handleChange("about")}
                            onBlur={handleBlur("about")}
                            error={errors?.about}
                            value={values?.about}
                            touched={touched?.about}
                            helperText="Write detailed description about task that what you will do in that task."
                        />
                    </View>
                </ScrollView>
                <View style={styles.formContainer}>
                    <PrimeActionButton
                        text={"+ Add Task"}
                        onPress={handleSubmit}
                    />
                </View>
            </View>
        </Modal>
    )
}
