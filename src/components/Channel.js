import React from 'react';

class Channel extends React.Component
{
    constructor(){
        super();
    
        this.state ={msg:"born to do big"}
    }
    subscribe(){
        this.setState({msg:"thanks for subscribe"})
    }
    render(){
        return(<div>

        
            <h1>{this.state.msg} </h1>
            <button onClick={()=>{this.subscribe()}}>Subscribe</button>
            </div>
        )
    }
}
export default Channel;
