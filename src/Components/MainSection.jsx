/* eslint-disable array-callback-return */
import React from 'react';
import axios from 'axios';
import './MainSection.css';
import XML from '../blog_posts.xml';
import { useEffect, useState } from 'react'
import XMLParser from 'react-xml-parser';
import { Link } from 'react-router-dom';


const MainSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        if(blogs.length<=0){
            getXmlData();
        }
       
    }, [blogs.length])
    const getXmlData = async () => {
        const response = await axios.get(XML, {
            "Content-Type": "application/xml; charset=utf-8"
        })
        var xml = new XMLParser().parseFromString(response.data);
        setBlogs(xml.children)
    }
    return (
        <main className='main'>
            {
                blogs.map((children) => {
                    return (
                        children.children.map((a) => {
                            let b = a.name.toUpperCase();
                            if (b === 'SUMMARY') {
                                const childData = a.children.map(c => {
                                    return c.value
                                })
                                return (
                                    <>
                                        <div className='posts'>
                                            <p ><img src={`${childData[0]}`} alt={`${childData[0]}`}></img></p>
                                        </div>
                                        <h5 style={{ marginLeft:'10px'}}>{b}:</h5>
                                        <p style={{ marginLeft:'10px', marginTop:'-10px'}}>{childData[1]}</p>
                                    </>
                                )
                            }
                            else if (b !== 'BODY') {
                                return (
                                    <div>
                                        <div className='posts'>
                                            <h5 >{b}:</h5>
                                            <p >{b !== 'TITLE' ? a.value : <Link to={`/blog/${a.value}`}>{a.value} </Link>}</p>
                                            {/* {<BlogPost1></BlogPost1> */}
                                        </div>
                                    </div>
                                )
                            }
                          
                        })
                    )

                })
            }
        </main>
    );
}

export default MainSection
