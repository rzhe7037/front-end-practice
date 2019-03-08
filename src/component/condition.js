import React, { Component } from 'react';

class Condition extends Component {
    render() {
        return (
            <div className="Condition">
                <button className="btn dropdown-toggle btn-light query-dropdown" data-toggle="dropdown">{this.props.name}</button>
                <div className="dropdown-menu">
                    <div className="dropdown-label"><strong>{"Filter by "+this.props.name}</strong></div>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-input"><input className="form-control"></input></div>   
                    <a className="dropdown-item" href="#">1</a>
                    <a className="dropdown-item" href="#">1</a>
                    <a className="dropdown-item" href="#">1</a>
                    <a className="dropdown-item" href="#">1</a>
                </div>
            </div>
        );
    }
}

export default Condition;