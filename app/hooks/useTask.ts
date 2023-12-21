import { useState } from "react"

export const useTask = () => {

    const [showModal, setShowModal] = useState<boolean>(false);

    const viewNewTaskModal = () => {
        setShowModal(true);
    }

    const closeNewTaskModal = () => {
        setShowModal(false);
    }

    return {
        showModal,
        viewNewTaskModal,
        closeNewTaskModal
    }
}
