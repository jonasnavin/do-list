import React from 'react'
import './CSS/Footer.css'

const Footer = ({ length }) => {
  return (
    <footer>
      <h3>
        {
          (length > 1) ? `${length} items` : (length === 1) ? `${length} item`: `Empty list`
        }
      </h3>
    </footer>
  )
}

export default Footer