import React from 'react';
import './App.css';
import Product from './Components/Product/Products';
import Cart from './Components/Cart/Cart';

function App() {
  return (
    <>
      <React.Fragment>
      <header>
        <h2>React Context API</h2>
      </header>
      <section>
        <article>
          <Product />
        </article>
        <Cart />
      </section>

      <footer>
        <p></p>
      </footer>
    </React.Fragment>
    </>
  )
}

export default App
