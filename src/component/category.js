import React, { Component } from 'react';
import Icon from '../svg/icons';

class Category extends Component {
    constructor(props){
        super(props);
        if(this.props.number == null){
            this.state = {
                number : 0
            }
        }
        else{
            this.state = {
                number : this.props.number
            }  
        }
    }
    render() {
        return (
            <div className="category">               
                <button className="btn-light btn">
                    <Icon name={this.props.iconName}/><span>{this.props.name+" "+this.state.number}</span>
                </button>           
            </div>
        );
    }
}

export default Category;