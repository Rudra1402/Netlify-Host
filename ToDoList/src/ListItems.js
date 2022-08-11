import React from 'react';
import './App.css';
import { MdOutlineClose } from 'react-icons/md';

function ListItems({value, del}) {
    return (
        <div className='listContainer d-flex align-items-center justify-content-between'>
            <div className='demoFont'>{value}</div>
            <button className='demoBtn' onClick={() => del()}>
                <MdOutlineClose className='cross' />
            </button>
        </div>
    )
}

export default ListItems;