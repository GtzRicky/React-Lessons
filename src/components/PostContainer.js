import React, { useEffect, useState } from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import PostList from './PostList'
import PostDetails from './PostDetails'

const PostContainer = () => {
    const [posts, setPosts] = useState([]);

    useEffect( () => {
        
        const url = "https://bender-blog.herokuapp.com/posts";

        const promise = fetch(url);

        promise
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setPosts(data);
        })
    }, [])

    return (
        <Router>
            <Switch>
                <Route exact path="/"><PostList entries={posts}/></Route>

                <Route to="/:id"><PostDetails entries={posts}/></Route>

            </Switch>
        </Router>
    )

}

export default PostContainer