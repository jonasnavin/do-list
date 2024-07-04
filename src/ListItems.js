import './CSS/ListItems.css'
import React from 'react'
import { TbTrashXFilled } from "react-icons/tb";

const ListItems = ({ items, handleChange, handleDelete }) => {
    return (
        <ul>
            {items.map(item => (
                <li
                    key={item.id}
                >
                    <input
                        type="checkbox"
                        checked={item.checked}
                        onChange={() => handleChange(item.id)}
                    />
                    <label onClick={() => handleChange(item.id)}>
                        {item.text}
                    </label>
                    <TbTrashXFilled
                        role='button'
                        onClick={() => handleDelete(item.id)}
                    />
                </li>
            ))}
        </ul>
    )
}

export default ListItems