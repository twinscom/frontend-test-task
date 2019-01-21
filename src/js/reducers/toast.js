const defStateToast = {
    text: "",
    id: null,
    msgType: "success",
    options: {}
};

export default (state = defStateToast, action) => {
    let text, msgType, id, options;

    switch (action.type) {
        case "SHOW_TOAST_MSG":
            text = action.text;
            msgType = action.msgType;
            id = action.id ? action.id : null;
            options = action.options ? action.options : {};
            return {
                ...state,
                id,
                text,
                msgType,
                options
            };

        case "RESET_TOAST_MSG":
            text = "";
            msgType = "success";
            id = null;
            options = {};
            return {
                ...state,
                id,
                text,
                msgType,
                options
            };

        default:
            return state;
    }
}