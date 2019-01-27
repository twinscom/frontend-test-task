export const showToastMsg = (text, msgType) => {
        return{
            type: "SHOW_TOAST_MSG",
            text,
            msgType,
        }
    },
    resetToastMsg = () => {
        return{
            type: "RESET_TOAST_MSG"
        }
    };