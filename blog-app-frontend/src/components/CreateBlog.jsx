import {React, useState} from 'react'
import { toast } from 'react-toastify';
import Editor from 'react-simple-wysiwyg';
import { useForm, Form } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {

    const [html, setHtml] = useState('');
    const [imageId, setImageId] = useState('');
    const navigate = useNavigate();

    const handleFileChange = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append("image", file)

        const res = await fetch("http://localhost:8000/api/save_image/", {
            method: 'POST',
            body: formData
        })

        const result = await res.json()

        if (result.status == false)
        {
            alert(result.errors.image)
            e.target.value == null
        }

        setImageId(result.image.id)
    }

    function onChange(e) {
        setHtml(e.target.value);
    }

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const formSubmit = async (data) => {
        const newData = { ...data, "description": html, image_id: imageId}
        const res = await fetch("http://localhost:8000/api/blogs/store", {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newData)
        })
        toast("Blog Added Successfully!")
        navigate('/')
    }

  return (
    <div className='container mb-5'>
        <div className="d-flex justify-content-between pt-4 mb-4">
            <h4>Create Blog</h4>
            <a href="/" className='btn btn-dark'>Back</a>
        </div>      
        
        <div className='card border-0 shadow-lg'>
            <form onSubmit={handleSubmit(formSubmit)}>
                <div className='card-body'>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                          <input
                            { ...register('title', {required: true}) }
                            type="text"
                            className={`form-control ${errors.title && 'is-invalid'}`}
                            placeholder='Enter a title'
                          />
                          {errors.title && <span className='invalid-feedback'>This title is required</span>}
                      </div>
                      
                    <div className='mb-3'>
                        <label className='form-label'>Short Description</label>
                        <textarea
                            { ...register('shortDesc') }
                            cols="30" rows="5" className="form-control"
                        ></textarea>
                      </div>
                      
                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <Editor
                            containerProps={{ style: { height: '400px' } }}
                            value={html} onChange={onChange}
                        />
                      </div>
                      
                    <div className='mb-3'>
                        <label className='form-label'>Image</label><br />
                        <input onChange={handleFileChange} type="file" />
                    </div>
                      
                    <div className='mb-3'>
                        <label className='form-label'>Author</label>
                          <input
                            { ...register('author', {required: true}) }
                            type="text"
                            className={`form-control ${errors.author && 'is-invalid'}`}
                            placeholder='Enter a author'
                          />
                          {errors.author && <span className='invalid-feedback'>This author is required</span>}
                    </div>

                    <button className='btn btn-dark'>Create</button>
                </div>
            </form>
        </div>
    </div>
  )
}
