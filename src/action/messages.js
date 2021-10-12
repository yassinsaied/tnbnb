import {SET_MESSAGE , CLEAR_MESSAGE} from "./types"


export const setMessages = (message) => ({

    type: SET_MESSAGE,
    payload : message

})

export const clearMessages =() => ({

    type: CLEAR_MESSAGE
})