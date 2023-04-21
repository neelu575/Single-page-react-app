import React from 'react'
import Header from '../Components/HeaderSection'
import Nav from '../Components/NavSection'
import Footer from '../Components/FooterSection'
import Xml from '../BlogPosts/Xmlblog3'
const BlogPost3 = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Xml />
                <Nav />
            </div>
            <Footer />
        </div>
    )
}

export default BlogPost3