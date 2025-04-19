import React from 'react'

export default function BlogCard({ blog }) {
    
    const showImage = (img) => {
        return (img) ? 'http://localhost:8000/uploads/blogs/'+img : 'https://placehold.co/600x400'
    }

    return (
        <div className='col-12 col-md-2 col-lg-3 mb-4'>
            <div className='card border-0 shadow-lg'>
                <img src={showImage(blog.image)} className='card-img-top' />

                <div className='card-body'>
                    <h5 className='card-title'>{ blog.title }</h5>
                    <p className='card-text'>
                        { blog.shortDesc }
                    </p>
                    <div className='d-flex justify-content-between'>
                        <a href="#" className='btn btn-dark'>Details</a>
                        <a href="#" className='text-dark'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
                            </svg>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}
