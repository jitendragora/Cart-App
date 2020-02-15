import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    

    render() { 
        //object destructuring..to avoid using "this.props" again and again...
        const { onReset, counters, onDelete, onIncrement, onDecrement} = this.props;//this object destructuring makes our code clear..
        return ( 
            <div className="counters">
                <button onClick={onReset} className="btn btn-outline-info btn-lg reset">
                    Reset
                </button>
                { counters.map(counter => 
                    <Counter 
                        key={counter.id} 
                        onDelete={onDelete} 
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        counter = {counter}
                    />
                )}
            </div>
        );
    }
}
 
export default Counters;