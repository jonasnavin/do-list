import './CSS/App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import React, { useState } from 'react';

function App() {

  const [items, setItems] = useState(() => {
    const storedData = localStorage.getItem("List Data");
    return storedData ? JSON.parse(storedData) : [];
  })

  const [newItem, setNewItem] = useState('')

  const addData = text => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const addNewData = { id, checked: false, text }
    const newData = [...items, addNewData]
    setItems(newData)
    localStorage.setItem("List Data", JSON.stringify(newData))
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!newItem) return
    addData(newItem)
    setNewItem('')
  }

  const handleChange = id => {
    const newData = items.map(item => (
      item.id === id ? { ...item, checked: !item.checked } : item
    ))
    setItems(newData)
    localStorage.setItem("List Data", JSON.stringify(newData))
  }

  const handleDelete = id => {
    const newData = items.filter(item => (
      item.id !== id
    ))
    setItems(newData)
    localStorage.setItem("List Data", JSON.stringify(newData))
  }

  return (
    <div className="App">
      <Header
        title="To do List"
      />
      <Content
        items={items}
        newItem={newItem}
        setNewItem={setNewItem}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleSubmit={handleSubmit}
      />
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
