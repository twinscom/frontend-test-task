const defStateToast = {
    text: "",
    msgType: "success",
};

export default (state = defStateToast, action) => {
    let text, msgType;

    switch (action.type) {
        case "SHOW_TOAST_MSG":
            text = action.text;
            msgType = action.msgType;
            return {
                ...state,
                text,
                msgType,
            };

        case "RESET_TOAST_MSG":
            return defStateToast;

        default:
            return state;
    }
}