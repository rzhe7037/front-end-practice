import React, { Component } from 'react';
import Icon from '../svg/icons';

class TableElement extends Component {
    render() {
        return (
            <div className="TableElement px-3 py-2">
                <Icon name="octicon-issue-opened" />
                <div className="Element-body mx-2">
                    <div className="Title">{this.props.title}</div>
                    <div className="Discription">{this.props.description}</div>
                </div>
                <div className="messages ml-auto mx-3 form-inline">
                    <i className="far fa-comment-alt mx-1"></i>{this.props.mesNum}
                </div>
            </div>
        );
    }
}

export default TableElement;