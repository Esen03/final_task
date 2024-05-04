import React, { useState, useEffect } from "react";
import { base_url } from "../../../../constants/url";

const BlogsCreatePage = () => {
    const [popularPosts, setPopularPosts] = useState([]);
    const [tags, setTags] = useState([]);

   
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = base_url + 'tags';
            const res = await fetch(url);
            const data = await res.json();
            setPopularPosts(data || []);
            setTags(data || []);
        } catch (error) {
            console.error(error);
        }
    };

    //--------------POSTS--------------
    // const createNewPost = () => {
    //     const newPost = {
    //         id: popularPosts.length + 1,
    //         title: "New Post",
    //         titleDesc: "Description of the new post",
    //         createDate: new Date().toISOString()
    //     };

        
    //     setPopularPosts([newPost, ...popularPosts]);
    // };

   
    // useEffect(() => {
    //     createNewPost();
    // }, []);

    return (
        <div className="w3-container">
            <div className="w3-panel w3-card-4 w3-auto">
                <div className="w3-indigo w3-panel">
                    <h1>Tags</h1>
                </div>
                <div className="w3-panel">
{/*-----------------POSTS-------------- */}
                    {/* <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>TitleDesc</th>
                                <th>Create Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popularPosts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.titleDesc}</td>
                                    <td>{post.createDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
{/*----------------POPULARPOSTS-------------- */}
                            {/* <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {popularPosts.map(post => (
                                <tr key={post.id}>
                                    <td>{post.id}</td>
                                    <td>{post.title}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table> */}
{/*-----------------TAGS------------------- */}
<table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {tags.map(tag => (
                        <tr key={tag.id}>
                            <td>{tag.id}</td>
                            <td>{tag.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                </div>
            </div>
        </div>
    );
};

export default BlogsCreatePage;
