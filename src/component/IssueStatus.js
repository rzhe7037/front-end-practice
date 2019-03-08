import React, { Component } from 'react';
import Icon from '../svg/icons';

class IssueStatus extends Component {
    render() {
        return (
            <div className="Status ml-3">
                <i className={this.props.icon + " mt-1"}></i>
                <div className="mx-2">
                    {this.props.number + " " + this.props.status}
                </div>    
            </div>
        );
    }
}

export default IssueStatus;