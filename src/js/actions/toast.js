export const showToastMsg = (text, msgType, id, options) => {
        return{
            type: "SHOW_TOAST_MSG",
            text,
            msgType,
            id,
            options
        }
    },
    resetToastMsg = () => {
        return{
            type: "RESET_TOAST_MSG"
        }
    };