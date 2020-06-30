import React from 'react'
import './listitems.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Reactflipmove from 'react-flip-move'


function ListItems(props){
    const items=props.items
    const ListItems= items.map(item=>{
        return <div className="list" key={item.key}>
                <p>
                <input type="text" id={item.key} 
                value={item.text}
                onChange={(e)=>{
                    props.setUpdate(e.target.value,item.key)
                }}
                /> 
                <span>
                    <FontAwesomeIcon
                     className="faicons" icon='trash'
                     onClick={()=>props.deleteItem(item.key )}
                     />
                    

                </span>
                </p>
                


        </div>
    })
    
    return(
        <div>
        <Reactflipmove duration={300} easing="ease-in-out">
        {ListItems}
        </Reactflipmove>
        </div>
       
    )
}

export default ListItems;