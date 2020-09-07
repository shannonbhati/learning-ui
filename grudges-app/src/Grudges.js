import React, { useState } from 'react';
import Grudge from './Grudge.js';
const Grudges=({data,onToggle,onUpdate})=>{
    return(
        data.map(item=>{
            return(
            <Grudge person={item.person}  reason={item.reason} onDel={onToggle} onChange={onUpdate} index={item.id}/>
            )
        })

    )

}
export default Grudges;