import React, { useState, useEffect } from 'react';
import axios from '../../axios';
import Interweave from 'interweave';

import Main from '../../helper/main/main';
import FullPost from '../fullPost/fullPost';


import Post from '../post/post';
import classes from './allposts.module.css';

const AllPosts = (props) => {

    const [content, setContent] = useState();

    useEffect(() => {
        axios.get("/blogs.json")
            .then(res => {
                let data = [];
                for (let blogIndex in res.data) {
                    data.push(res.data[blogIndex]);
                }
                let blogs = data.map((post) => {
                    console.log(post)

                    let contentPost = <Interweave content={post.content} />
                    return (
                        <Post
                            key={post.title}
                            title={post.title}
                            content={contentPost}
                            readtime='2 mins'
                            clicked={() => fullPostHandler(post.title, post.content, '2 mins')}
                        />
                    )
                })
                setContent(blogs);
            }).catch(error => {
                console.log('error in fetching data... allposts.js', error);
            })
    }, [])

    const fullPostHandler = (title, content, readtime) => {
        // setContent(<FullPost title={title} content={content} readtime={readtime} />);
        console.log(props);
        console.log(readtime);
        props.history.push({
            pathname: '/fullpost',
            state: { title: title , content: content, readtime: readtime }
        })

    }

    return (
        <Main miniMode={props.miniMode}>
            <div className={classes.AllPosts}>
                {content}
            </div>
        </Main>
    )
}

export default AllPosts;