import './CSS/SearchItem.css'
import React from 'react'
import { TiDelete } from "react-icons/ti";

const SearchItem = ({ searchItem, setSearchItem }) => {

    const handleRemove = () => {
        setSearchItem('')
    }

    return (
        <form
            className='searchItem'
            onSubmit={e => e.preventDefault()}
        >
            <input
                type="text"
                placeholder='Search Item'
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
                autoComplete='off'
            />
            <button
                type='button'
                onClick={handleRemove}
            >
                <TiDelete />
            </button>
        </form>
    )
}

export default SearchItem