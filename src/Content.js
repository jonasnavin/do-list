import AddItem from './AddItem';
import './CSS/Content.css';
import ListItems from './ListItems';
import SearchItem from './SearchItem';
import { useState } from 'react';

const Content = ({ items, handleChange, handleDelete, newItem, setNewItem, handleSubmit }) => {

    const [searchItem, setSearchItem] = useState('')

    return (
        <main>
            <AddItem
                newItem={newItem}
                setNewItem={setNewItem}
                handleSubmit={handleSubmit}
            />
            
            {
                items.length ? (
                    <SearchItem
                        length={items.length}
                        searchItem={searchItem}
                        setSearchItem={setSearchItem}
                    />
                ) : (
                    <></>
                )
            }

            {
                items.length ? (
                    <ListItems
                        items={items.filter(item => (item.text).toLowerCase().includes(searchItem.toLowerCase()))}
                        handleChange={handleChange}
                        handleDelete={handleDelete}
                    />
                ) : (
                    <p>Your list is empty</p>
                )
            }
        </main>
    )
}

export default Content