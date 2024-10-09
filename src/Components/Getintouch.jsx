import React from 'react'
import { Container } from 'react-bootstrap'
import { BsDashLg } from 'react-icons/bs'
import { Link } from 'react-router-dom'

function Getintouch() {
    return (
        <>
            <Container className='d-xl-flex py-5 align-items-center '>
                <p className='text-black fs-2 heebo m-0'>Get In Touch</p>
                <div className=''>
                    <span className='text-black mx-2'><BsDashLg /></span>
                    <Link to='/home' className='p-2 fw-medium text-black'>Home</Link>
                    <a href="#" className='mx-1 fw-medium text-black'>/</a>
                    <a href="#" className='p-2 fw-medium text-black'>Get In Touch</a>
                </div>
            </Container>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25121.173780110457!2d-0.19533191607703604!3d51.52691953421106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876100984687661%3A0x23dd74295948267f!2sPaddington%20Recreation%20Ground!5e0!3m2!1sen!2sin!4v1715408262541!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}

export default Getintouch
