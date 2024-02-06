import axios from "axios";

//instance
const axiosIns = axios.create({
    baseURL: "http://localhost:5600"
})

//read All
const readAllUser = () => {
    return axiosIns.request({
        url: `/users`,
        method: "GET"
    })
}
//read Single
const readSingleUser = () => {
    return axiosIns.request({
        url: `/users`,
        method: "GET"
    })
}

// create
export const createUser = () => {
    return axiosIns.request({
        url: `/users`,
        method: "POST",
        data: user
    })
}

//update
export const updateUser = () => {
    return axiosIns.request({
        url: `/users/${id}`,
        method: "PATCH",
        data: user
    })
}
//delete
export const deleteUser = () => {
    return axiosIns.request({
        url: `/users/${id}`,
        method: "DELETE",
        
    })
}