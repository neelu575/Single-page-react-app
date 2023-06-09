/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import axios from 'axios';
import XMLData from '../blog_posts.xml';
import { useEffect, useState } from 'react'
import XMLParser from 'react-xml-parser';


const Xml = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        getXmlData();
    }, [])
    const getXmlData = async () => {
        const response = await axios.get(XMLData, {
            "Content-Type": "application/xml; charset=utf-8"
        })
        var xml = new XMLParser().parseFromString(response.data);
        let x = xml.children[0].children;
        setBlogs(x)

    }
    return (
        <div className='main'>
            {
                blogs.map((children) => {
                    let y = children.name.toUpperCase();
                    if (y === 'SUMMARY') {
                        const childData = children.children.map(z => {
                            return z.value
                        })
                        return (
                            <>
                                <div className='posts'>
                                    <p ><img src={`${childData[0]}`}></img></p>
                                </div>
                                <h4>{y}:</h4>
                                <p>{childData[1]}</p>
                            </>
                        )
                    }
                    else {
                        return (
                            <div>
                                <div className='posts'>
                                    <h4>{y}:</h4>
                                    <p>{children.value} </p>
                                </div>
                            </div>
                        )
                    }
                })

            }
        </div>
    );
}



export default Xml
