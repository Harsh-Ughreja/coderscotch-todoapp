export const getDisplayTime = (timestamp: number) => {

    const date = new Date(timestamp);
    const today = new Date();

    if(today.getMonth() === date.getMonth() && today.getDate() === date.getDate() && today.getFullYear() === today.getFullYear()) {
        if(date.getHours() >= 12) {
            return `Today at ${date.getHours() - 12} : ${date.getMinutes()} PM`
        }
        else {
            return `Today at ${date.getHours()} : ${date.getMinutes()} AM`
        }
    }
    else {
        return `${date.getDate().toString().padStart(2, "0")}-${(date.getMonth()+1).toString().padStart(2, "0")}-${date.getFullYear()}`
    }
}
