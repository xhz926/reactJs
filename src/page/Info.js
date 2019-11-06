import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {addCounter,getCounter} from "../redux/action/counter/counter";

export class Info extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Info
            </div>
        );
    }
}

Info.propTypes = {};

