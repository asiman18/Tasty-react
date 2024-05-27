import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useParams } from 'react-router-dom'



function Edit() {

    const { id } = useParams();

    const [info, setInfo] = useState({});
    const [image, setImage] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8000/api/' + id)
            .then(res => {
                setInfo(res.data)
                setImage(res.data.photof)
            })
    }, [])

    const convertToBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result)
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: async () => {
            let response = await axios.get('http://localhost:8000/api/' + id)
            return response.data
        }

    })

    const onSubmit = (obj) => {
        axios.patch('http://localhost:8000/api/' + id, {...obj, photo : image})

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', width: '35%' }}>
            <label> Name :
                <input {...register("name")} defaultValue={info.name} />
            </label>

            <label> Price :
                <input {...register("price")} type='number' defaultValue={info.price} />
            </label>
            <label> Year :
                <input {...register("year")} type='number' defaultValue={info.year} />
            </label>

            <label> Image : <input type="file" onInput={(e) => convertToBase64(e.target.files[0])} /></label>
            {image && <img src={image} style={{ width: "100px", height: "100px" }} />}






            <button type="submit" style={{padding: "5px", width: "90px"}}>Add element</button>
        </form>
    )

}

export default Edit