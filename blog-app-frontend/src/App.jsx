import { useState } from 'react'
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { Route, Routes } from 'react-router-dom';
import CreateBlog from './components/CreateBlog';
import BlogDetail from './components/BlogDetail';
import { ToastContainer, toast } from 'react-toastify';

function App() {

  return (
    <>
      <div className='bg-dark text-center py-2 shadow-lg'>
        <h1 className='text-white'>React & Laravel Blog App</h1>
      </div>

      <Routes>
        <Route path='/' element={<Blogs />} />
        <Route path='/create' element={<CreateBlog />} />
        <Route path='/blog/:id' element={ <BlogDetail /> } />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
