import React from 'react';
import Layout from './Layout';
import { Link, useRouteMatch, Switch, Route, useParams } from 'react-router-dom';

const Topic = () => {
    let { topicId } = useParams();
    return <p>Este es mi tema {topicId}</p>
}

const getDataFromAPI = [
    {
        topic: "react",
        title: "Learn React"
    },
    {
        topic: "redux",
        title: "Learn Redux"
    },
    {
        topic: "router",
        title: "Learn React-router"
    },
    {
        topic: "unity",
        title: "Learn Unity"
    }
];
 
const Topics = () => {
    let { path, url } = useRouteMatch();
    return (
        <Layout>
            <ul>
                {getDataFromAPI.map((value) => <li><Link to={`${url}/${value.topic}`}>{value.title}</Link></li>)}
            </ul>

            <Switch>
                <Route exact path={`${path}`}>
                    Esta es mi ruta Topics
                </Route>
                <Route path={`${path}/:topicId`} component={Topic}/>  
                
                {/* Usando el hook useParams se crea un 
                    componente dinámico en lugar de crear una ruta por cada tema*/}
            </Switch>
        </Layout>
    )
};

export default Topics