import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, // we are aliasing this module for a cleaner call
  Route,
  Link
  // etc.
} from 'react-router-dom';
import reportWebVitals from '../reportWebVitals';

class List extends Component{
    constructor(){
        super();
        this.state={
            list: [],
            entryName: ""
        }
    }

    handleINput=(event)=>{
        this.setState({entryName:event.target.value})
    }
    handleClick=()=>{
        let entryObj = {entryName:this.state.entryNaame};
        this.setState({list: [...this.state.list,
            entryObj], entryName:""});
            console.log(this.state.ist);
        }
        handleSort = () => {

        }
        render(){
            let input = <input
            value={this.state.entryName}
            onChange={this.handleInput}
            placeholder="Enter Items"
            >

            </input>
            let addButton = <button onClick={this.handleClick}
            >Add</button>
            let sortButtonAplhabet=<button style={{ color: "red", backgroundColor: "darkslategray" }}>Sort alphabetically</button>
let listArr = this.state.list.map((item, index) => {
    return{
        <div key={index}>
        <div>{item.entryName}</div>
        </div>
)
    }
}
return ()
<div>
    {sortButtonAlphabet}<br/><br/>
    <span>{input}{addButton}</span>
    {listArr}
    </div>
    )
};
}
export defaul List;
