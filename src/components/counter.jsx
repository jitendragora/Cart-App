import React, { Component } from 'react';

class Counter extends Component {

    render() { 
        
        return (
        <React.Fragment> 
            <h4>{this.props.id}</h4>
            <button onClick={() => this.props.onDecrement(this.props.counter) } className="btn btn-secondary btn-sm m-2" >-</button>       
            <span className = { this.getBadgeClasses() }>{this.formatCount()}</span>
            <button onClick={() => this.props.onIncrement(this.props.counter) } className="btn btn-primary btn-sm m-2">+</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-3">Delete</button>
        </React.Fragment>
        ); //'React.Fragment' is used to avoid using another 'div'....
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount() {

        //Object destructuring...
        const { value: ct } =this.props.counter;
        return ct === 0 ? "Zero" : ct;
    }
}
 
export default Counter;