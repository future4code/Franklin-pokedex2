import { useState, useEffect } from "react";
import axios from 'axios';

const useRequestData = (url, initialState) => {
    const [data, setData] = useState(initialState)
useEffect(() => {
    axios.get(url)
    .then((res) => {
        setData(res.data)
    })
    .catch((err) => {
        console.log(err)
        alert('Ocorreu um erro')
    })
}, [url])
    return data
}
export default useRequestData 
