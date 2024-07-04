import './CSS/AddItem.css'
import React from 'react'
import { BsFileEarmarkPlus } from "react-icons/bs";

const AddItem = ({ newItem, setNewItem, handleSubmit }) => {
    return (
        <form className='addItem' onSubmit={handleSubmit}>
            <label
                htmlFor="addItem"
            >
                Add Item
            </label>
            <input
                autoFocus
                type="text"
                id='addItem'
                placeholder='Add Item'
                value={newItem}
                autoComplete='off'
                onChange={e => setNewItem(e.target.value)}
            />
            <button
                type='submit'
            >
                <BsFileEarmarkPlus />
            </button>
        </form>
    )
}

export default AddItem