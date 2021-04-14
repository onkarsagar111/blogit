import React, { useState } from 'react';
import Main from '../../helper/main/main';
import FullPost from '../fullPost/fullPost';

import Post from '../post/post';
import classes from './allposts.module.css';

const AllPosts = (props) => {

    const posts = [
        {
            title: "BLOG 1",
            content: "This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.",
            readtime: "2 mins"
        },
        {
            title: "BLOG 2",
            content: "This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.",
            readtime: "2 mins"
        },
        {
            title: "BLOG 3",
            content: "This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.",
            readtime: "2 mins"
        },
        {
            title: "BLOG 4",
            content: "This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.",
            readtime: "2 mins"
        },
        {
            title: "BLOG 5",
            content: "This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.",
            readtime: "2 mins"
        },
        {
            title: "BLOG 6",
            content: "This document is intended for developers who want to write applications that can interact with the Blogger API. Blogger is a tool for creating websites that allow people to publish their thoughts on an ongoing basis.",
            readtime: "2 mins"
        }
    ];

    const fullPostHandler = (title, content, readtime) => {
        console.log('postsList');
        setContent(<FullPost title={title} content={content} readtime={readtime} />);
    }
    let postsList = posts.map((post) => {
        return (
            <Post
                key={post.title}
                title={post.title}
                content={post.content}
                readtime={post.readtime}
                clicked={() => fullPostHandler(post.title, post.content, post.readtime)}
            />
        )
    })

    const [content, setContent] = useState(postsList);




    return (
        <Main miniMode={props.miniMode}>
            <div className={classes.AllPosts}>
                {content}
            </div>
        </Main>
    )
}

export default AllPosts;