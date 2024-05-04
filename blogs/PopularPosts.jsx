import React, { useState, useEffect } from "react";
import { base_url } from "../../../../constants/url";

const BlogsCreatePage = () => {
    const [popularPosts, setPopularPosts] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const url = base_url + 'popularPosts';
            const res = await fetch(url);
            const data = await res.json();
            setPopularPosts(data || []);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="w3-container">
            <div className="w3-panel w3-card-4 w3-auto">
                <div className="w3-indigo w3-panel">
                    <h1>Popular Posts</h1>
                </div>
                <div className="w3-panel">
                    <table>
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
                    </table>
                </div>
            </div>
        </div>
    );
};

export default BlogsCreatePage;
