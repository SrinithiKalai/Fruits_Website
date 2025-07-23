import axios from "axios"
import { Log } from "../URL/Api"

export function userService(payload){
    return axios({
        method : "POST",
        url : Log,
        data : payload
    })
}

export function getService(){
    return axios({
        method : "GET",
        url : Log
    })
}

export function getIdService(id, data){
    return axios({
        method : "GET",
        url : Log + "/" + id
    })
}

export function updateService(payload){
    return axios({
        method : "PUT",
        url : Log + "/" + payload.id,
        data : payload
    })
}

export function deleteService(id){
    return axios({
        method : "DELETE",
        url : Log + "/" + id,
       
    })
}