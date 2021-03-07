import React from 'react'
import {
    Link,
    useRouteMatch,
  } from "react-router-dom";

const PostList = ({entries}) => {

    let { url } = useRouteMatch();

    return (
        <div>
            <ul>
                {entries.map((value) => (
                    <li key={value.id}>
                        <Link to={`${url}/${value.id}`}>{value.title}</Link>
                        <p>Published by {value.author} on {value.publishedAt}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList