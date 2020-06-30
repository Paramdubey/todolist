import React, { Component } from 'react'
import './App.css'
import ListItems from './listitems'

import {library} from '@fortawesome/fontawesome-svg-core'
import {faTrash} from '@fortawesome/free-solid-svg-icons'


library.add(faTrash);


class App extends Component {
  constructor(props){
    super(props);
    this.state= {
      items:[],
      currentItem:{
        text:'',
        key:''
      }

    }

  }
  handleInput=(e)=>{
    this.setState({
      currentItem:{
        text:e.target.value,
        key:Date.now()
      }
    })
  }  
  addItem=(e)=>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem);
    if(newItem!==""){
      const newItems=[...this.state.items,newItem]
      this.setState({
        items:newItems,
        currentItem:{
          text:'',
          key:''
        }
      })
    }

  }

  deleteItem=(key)=>{
    const filteredItems=this.state.items.filter(item=>
      item.key!==key);
      this.setState({
        items:filteredItems
      })
      
  }
  
  setUpdate=(text,key)=>{
    const items=this.state.items;
    items.map(item=>{
      if(item.key==key){
        item.text=text;
      }
    })
    this.setState({
      items:items
    })
  }

  
  render() {
    return (
      <div className="App">
        <header>

        <h1 id="header"><center>TO-DO APP</center></h1>
        <form id="todoform" onSubmit={this.addItem}> 
        <input type="text" placeholder="Enter Action" value={this.state.currentItem.text}
        onChange={this.handleInput}></input>
        <button type="submit">ADD</button>

        </form>
        </header>  
        <ListItems items={this.state.items}
        deleteItem={this.deleteItem}
        setUpdate={this.setUpdate}
        />
        <h5 id="param">https://github.com/Paramdubey</h5>
        </div>
    )
  }
}

export default App