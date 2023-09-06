import axios from "axios"

// const BaseURl = `http://203.215.165.26:808`


export const axiosClient = axios.create({
        baseURL: "http://203.215.165.26:808",
      });

// export const allQuestion = () => {
//     return axios.get(`${BaseURl}/api/questioncategories`)
// }

export const allQuestion= () => {
    return axiosClient.get(`/api/questioncategories`)
}

export const submitQuestion = (data) => {
    return axiosClient.post(`/api/bills`, data)
}