import React from 'react';
import Layout from './Layout';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';

const Topics = () => {
    let { path, url } = useRouteMatch();
    return (
        <Layout>
            <ul>
                <li>
                    <Link to={`${url}/redux`}>Redux</Link>
                </li>
                <li>
                    <Link to={`${url}/react`}>React</Link>
                </li>
                <li>
                    <Link to={`${url}/router`}>Router</Link
                ></li>
            </ul>

            <Switch>
                <Route exact path={`${path}`}>
                    Esta es mi ruta Topics
                </Route>
                <Route path={`${path}/redux`}>
                    Este es mi tema Redux
                </Route>
                <Route path={`${path}/react`}>
                    Este es mi tema React
                </Route>
                <Route path={`${path}/router`}>
                    Este es mi tema Router
                </Route>
            </Switch>
        </Layout>
    )
};

export default Topics