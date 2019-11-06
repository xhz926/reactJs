import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter,Switch} from "react-router-dom";
import {HomeRouter} from "./home/HomeRouter";

class RouterManager extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <HomeRouter/>
                </Switch>
            </BrowserRouter>
        );
    }
}

RouterManager.propTypes = {};

export default RouterManager;
