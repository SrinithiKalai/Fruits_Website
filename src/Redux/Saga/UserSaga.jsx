import * as Type from "../Types";
import { userSuccess, userFailure, getSuccess, getFailure, getIdSuccess, getIdFailure, updateSuccess, updateFailure, deleteSuccess, deleteFailure } from "../Action/UserAction";
import { deleteService, getIdService, getService, updateService, userService } from "../Service/UserService";
import { call, put, takeLatest } from 'redux-saga/effects';

function* userSaga({payload}){
    try{
        const userResponse = yield call(userService, payload)
        yield put(userSuccess(userResponse.data))
    }
    catch(err){
        yield put(userFailure(err))
    }
} 

function* getSaga(){
    try{
        const getResponse = yield call(getService)
        yield put(getSuccess(getResponse.data))
    }
    catch(err){
        yield put(getFailure(err))
    }
}

function* getIdSaga({payload}){
    try{
        const getIdResponse = yield call(getIdService, payload)
        yield put(getIdSuccess(getIdResponse.data))
    }
    catch(err){
        yield put(getIdFailure(err))
    }
}

function* updateSaga({payload}){
    try{
        const updateResponse = yield call(updateService, payload)
        yield put(updateSuccess(updateResponse.data))
    }
    catch(err){
        yield put(updateFailure(err))
    }
} 

function* deleteSaga({payload}){
    try{
        const deleteResponse = yield call(deleteService, payload)
        yield put(deleteSuccess(deleteResponse.data))
    }
    catch(err){
        yield put(deleteFailure(err))
    }
}


export default function* Saga(){
    yield takeLatest(Type.USER_REQUEST,userSaga)
    yield takeLatest(Type.GET_USER_REQUEST,getSaga)
    yield takeLatest(Type.GET_ID_USER_REQUEST,getIdSaga)
    yield takeLatest(Type.UPDATE_REQUEST,updateSaga)
    yield takeLatest(Type.DELETE_REQUEST,deleteSaga)
}
