import React from 'react'

function Section() {
  return (
    <section className='Header'>
    <button className='Header__button'>Book a table</button>
    <div className='Header__div'>
      <form className='Header__form'>
        <input type="text" placeholder='Name' />
        <input type="text" placeholder='Phone' />
        <input type="date" />
        <input type="time" />
        <input type="text" placeholder='Person' />
        <button className='Div__button'>Book a table</button>
      </form>
    </div>
  </section>
  )
}

export default Section