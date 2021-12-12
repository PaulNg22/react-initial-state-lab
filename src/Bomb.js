// your Bomb code here!
import React from 'react';
class Bomb extends React.Component {
    constructor(props){
        super()
        this.state={
            secondLeft: props.initialCount
        }
    }
    render(){
        const message = this.state.secondLeft === 0 ? 'Boom' : `${this.state.secondLeft} seconds left before I go boom`;
        return(
            <div>{message}</div>
        )
    }
}
export default Bomb;