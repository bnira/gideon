import React from "react";
interface postProps {
    post: {
        title: string;
        author: string;
        date: string;
        content: string;
    }
}
const Post: React.FC<postProps> = ({ post }) => (
    <div>
        <h3>{post.date}</h3>
        <h3>{post.author}</h3>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
    </div>
)
export default Post;