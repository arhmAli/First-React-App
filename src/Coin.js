import React, { Component } from 'react';
import { choice } from './Helpers';
import Flip from './Flip';
class Coin extends Component{
    static defaultProps={
        coins:[       
    {side:'heads',imgUrl:"https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg"},
    {side:'tails',imgUrl:'https://www.nicepng.com/png/full/146-1464848_quarter-tail-png-tails-on-a-coin.png'}
        ]
    }
constructor(props){
    super(props);
    this.state={
        currCoin:null,
        nFlips:0,
        nHeads:0,
        nTails:0
    }
    this.handleClick=this.handleClick.bind(this)
}
flipCoin(){
const newCoin=choice(this.props.coins);
this.setState(st=>{
    let newState={
        ...st,
        currCoin:newCoin,
        nFlips:st.nFlips +1
    } 
    if(newCoin.side==="heads"){
        newState.nHeads +=1;
    }
    else{
        newState.nTails +=1;
    }
    return newState;
        
    
})
}
handleClick(e){
this.flipCoin()
}
     render(){
    return(
        <div className='Coin'>
            <h2>Lets Flip a Coin</h2>
            {this.state.currCoin&&<Flip info={this.state.currCoin}/>}
            <button onClick={this.handleClick}>Flip This</button>
            <p>Out of {this.state.nFlips} flips there have been {this.state.nHeads} heads and {this.state.nTails} tails</p>
        </div>
    )
}
}
export default Coin;