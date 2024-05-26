import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'


function Add() {

    const [image, setImage] = useState(null);

    const convertToBase64 = (file) =>{
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () =>{
            setImage(reader.result)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (obj) => {
        axios.post('http://localhost:3000/api', {...obj, photo : image})
            .then(res => console.log(res))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
            <label> Name :
                <input {...register("name")} />
            </label>

            <label> Price :
                <input {...register("price")} type='number' />
            </label>

            <label> Year :
                <input {...register("year")} type='number' />
            </label>

            <label> Image : <input type="file" onInput={(e) => convertToBase64(e.target.files[0])}/></label>
            {image && <img src={image} style={{width: "100px", height: "100px"}}/>}






            <button type="submit" style={{padding: 5, width: 90}}>Add element</button>
        </form>
    )

}

export default Add