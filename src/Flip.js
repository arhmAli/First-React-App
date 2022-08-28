import React, { Component } from 'react';
import "./Flip.css"
class Flip extends Component{
    render(){
        return (
            <div className='images'>
        <img src={this.props.info.imgUrl}alt={this.props.info.side}/>
        </div>
    )}

}
export default Flip;