import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Route} from "react-router-dom";
import {Home} from "../../page/Home"
import {Info} from "../../page/Info"

export class HomeRouter extends Component {
    constructor(props) {
        super(props);
        this.rootPath = '/'
        this.list = [
            {
                path:"home",
                pathNode: <Home/>
            },
            {
                path:"info",
                pathNode: <Info/>
            }
        ]
    }

    render() {
        return (
            this.list.map((data)=>{
                return (
                    <Route path={this.rootPath+data.path} key={data.path}>
                        {data.pathNode}
                    </Route>
                )
            })
        )
    }
}

HomeRouter.propTypes = {};
