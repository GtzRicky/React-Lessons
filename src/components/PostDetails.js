import React from 'react'
import { Link, Route, Switch, useRouteMatch } from 'react-router-dom'

const PostDetails = ({entries}) => {

    let { path } = useRouteMatch();

    return (
        <div>
            <Switch>
                {entries.map((value) => (
                    <Route key={value.id} path={`${path}/${value.id}`}>
                        <h3>{value.title}</h3>
                        <p>{value.content}</p>
                        <Link to="/">Back to Home</Link>
                    </Route>
                ))}
                <Route path="*">
                    <h1>Error 404 Page Not Found</h1>
                    <Link to="/">Back to Home</Link>
                </Route>
            </Switch>
        </div>
    )
}

export default PostDetails