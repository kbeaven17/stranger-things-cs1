import { useState, useEffect } from 'react'
import { getAllPosts } from '../API/index'
import { useNavigate } from 'react-router-dom'

const PostList = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const getPosts = async () => {
            try {
                const posts = await getAllPosts();
                setPosts(posts);
            } catch (error) {
               console.error('error', error) 
            }
        };

        getPosts();
    }, []);

    return (
        <div>
            <h1>Stranger's Things</h1>
            <div>
                {posts.map(post => (
                    <div key={post._id}>
                        <h2>{post.title}</h2>
                        <p>Description: {post.description}</p>
                        <p>Price: {post.price}</p>
                        <p>Location: {post.location}</p>
                        <p>Will Deliver: {post.willDeliver ? 'Yes' : 'No'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PostList;