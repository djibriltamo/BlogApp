import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function BlogDetail() {

    const [blog, setBlog] = useState([])
    const params = useParams()

    const fetchBlog = async () => {
        const res = await fetch("http://localhost:8000/api/blogs/"+params.id)
        const result = await res.json();
        setBlog(result.data);
    }

    useEffect(() => {
        fetchBlog()
    }, [])

  return (
    <div className='container'>
        <div className="d-flex justify-content-between pt-4 mb-4">
              <h4>{ blog.title }</h4>
              <div>
                  <a href="/" className='btn btn-dark'>Back to list blogs</a>
              </div>
        </div>

        <div className='row'>
            <div className='col-md-12'>
                  <p>by <strong>{blog.author}</strong> on {blog.date}</p>
                  
                  {
                    (blog.image) && <img className='w-500 border-0 shadow-lg' src={`http://localhost:8000/uploads/blogs/${blog.image}`}  />
                  }

                  <div className='mt-3' dangerouslySetInnerHTML={{ __html:  blog.description }}></div>
            </div>
        </div>
    </div>
  )
}
