import * as Type from "../Types";

export const userRequest = (data) => {
    
   return{
      type : Type.USER_REQUEST,
      payload  : data
   }
}
export const userSuccess = (data) => {
    return{
       type : Type.USER_SUCCESS,
       payload : data
    }
}
export const userFailure = (error) => {
    return{
        type : Type.USER_FAILURE,
        payload : error
    }
}


export const getRequest = (data) => {
    return{
        type : Type.GET_USER_REQUEST,
        payload  : data
    }
}
export const getSuccess = (data) => {
    return{
        type : Type.GET_USER_SUCCESS,
        payload : data
    }
}
export const getFailure = (error) => {
    return{
        type : Type.GET_USER_FAILURE,
        payload  : error
    }
}


export const getIdRequest = (id) => {
    return{
        type : Type.GET_ID_USER_REQUEST,
        payload : id
    }
}
export const getIdSuccess = (data) => {
    return{
        type : Type.GET_ID_USER_SUCCESS,
        payload : data
    }
}
export const getIdFailure = (error) => {
    return{
        type : Type.GET_ID_USER_FAILURE,
        payload : error
    }
}


export const updateRequest = (data) => {
    
    return{
       type : Type.UPDATE_REQUEST,
       payload  : data
    }
 }
 export const updateSuccess = (data) => {
     return{
        type : Type.UPDATE_SUCCESS,
        payload : data
     }
 }
 export const updateFailure = (error) => {
     return{
         type : Type.UPDATE_FAILURE,
         payload : error
     }
 }


 export const deleteRequest = (data) => {
    return{
        type : Type.DELETE_REQUEST,
        payload : data
    }
 }
 export const deleteSuccess = (data) => {
    return{
        type : Type.DELETE_SUCCESS,
        payload : data
    }
 }
 export const deleteFailure = (error) => {
    return{
        type : Type.DELETE_FAILURE,
        payload : error
    }
 }


 