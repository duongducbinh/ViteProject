import React from "react";
import { useEffect } from "react";
import { useState } from "react";


/**
1. update DOM
    - F8 blog title
2. Call API
3. Listen DOM events
    - Scroll
    - Resize
 */


//1. useEffect(callback)
// - gọi callback sau mỗi khi component re-render
// - Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
// - Chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])
// - Callback sẽ được gọi lại mỗi khi dept thay đổi


//-------------------------------------------------
//1. Callback luôn được gọi sau khi component mounted

const tabs = ["posts", "comments", "albums", "photos", "todos", "users"]

function About() {
    const [title, setTitle] = useState("About Page")
    const [data, setData] = useState([])
    const [type, setType] = useState("posts")

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setData(posts)
            })
        }, [type]
    )

    return (
        <div style={{ padding: '1rem' }}>
            <h1>Wellcome to About</h1>
            <p>This is the AboutPage</p>
            <ul>
                {tabs.map(tab => (
                    <button key={tab} onClick={() => setType(tab)}>{tab}</button>
                ))}
            </ul>
            <input value={title} type="text" onChange={e => setTitle(e.target.value)}/>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title || post.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default About;