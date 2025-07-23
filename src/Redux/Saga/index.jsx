import {all} from 'redux-saga/effects'
import Saga from './UserSaga'
export default function* rootSaga(){
    yield all([
        Saga()
    ])
}