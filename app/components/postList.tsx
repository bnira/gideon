import React from "react";
import Post from "./post";
interface postListProps {
    posts: Array<{
        title: string;
        author: string;
        date: string;
        content: string;
    }>
}
const PostList: React.FC<postListProps> = ({ posts }) => (
    <div>
        {posts.map((post, index) => (<Post key={index} post={post} />))}
    </div>
)
export default PostList;