import React, { Component } from 'react';
import Icon from '../svg/icons';

class Tag extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="form-inline mx-1 tag">
                
                <button className="btn btn-light" data-toggle="tooltip" data-placement="bottom" title={this.props.title}>
                    <Icon name={this.props.iconName} /><span>{this.props.labelName}</span>
                </button>
                <button className="btn btn-light">
                    {this.props.number}
                </button>
            </div>
        );
    }
}

export default Tag;