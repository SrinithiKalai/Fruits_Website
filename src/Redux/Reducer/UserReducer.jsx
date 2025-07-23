import { USER_SUCCESS, USER_REQUEST, USER_FAILURE, GET_USER_REQUEST, GET_USER_FAILURE, GET_USER_SUCCESS, UPDATE_USER_REQUEST, UPDATE_USER_FAILURE, UPDATE_USER_SUCCESS, GET_ID_USER_REQUEST, GET_ID_USER_SUCCESS, GET_ID_USER_FAILURE, UPDATE_REQUEST, UPDATE_FAILURE, UPDATE_SUCCESS, DELETE_REQUEST, DELETE_FAILURE, DELETE_SUCCESS } from "../Types";

const initialState = {
    loading: false,
    data: [],
    error: null,
    editObj: null
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_REQUEST:
        case GET_USER_REQUEST:
        case GET_ID_USER_REQUEST:
        case UPDATE_REQUEST:
        case DELETE_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };

        case USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: [...state.data, action.payload]
            };
        case GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case GET_ID_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                editObj: action.payload
            };
        case UPDATE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.map((item) => item.id === action.payload.id ? action.payload : item),
                editObj: null
            };
        case DELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                data: state.data.filter((res) => res.id !== action.payload.id)
            }

        case USER_FAILURE:
        case GET_USER_FAILURE:
        case GET_ID_USER_FAILURE:
        case UPDATE_FAILURE:
        case DELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};
