import './index.css';
import React, { useState } from 'react';

function Coffee() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="logo">
          <img src='/images/coffe.png'/>
        </div>
        <nav className={isMenuOpen ? 'open' : ''}>
          <ul>
            <li><a href="#" className="active">About us</a></li>
            <li><a href="#">Our Product</a></li>
            <li><a href="#">Delivery</a></li>
            <div class="navbar-search">
            <input type="text" className="search-input" placeholder="Cappucino"/>
            
            </div>
           
              
            
          </ul>
        </nav>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
      <div className='hero'>
    <div className='hero-text'>
    <h1>Enjoy your <b className='b'>Coffee</b> </h1>
    <h1>before your activity</h1>
    <p className='p'>Boost your productivity and build your <br/> mood with a glass of coffee in the morning</p>
    <button className='btn'>Order now</button>
    </div>
    <div className='coffeecup'>
      <img src='/images/cofeecup.png'/>
    
    </div>
      </div>
      <div className='popular'>
        <h1>Popular <span class="underline">Now</span></h1>
      </div>
      <div className='section'>
      <div className=''>
        <div>
          <img src='/images/cupcoffee.jpeg'className='cup'/>
        </div>
        <div className='latte'>
        <div>
          <h3>Vanilla Latte</h3>
        </div>
        <h3>21k</h3>

        </div>
        <div className='styled-button'>
        <div>
          <button className='c'>Hot</button>
          
          <button className='c'>Cold</button>
        </div>
        <div>
          <img src='/images/cartIcon.png'className='icon'/>
        </div>
        </div>
      </div>
      <div>
      <div>
          <img src='/images/coffeee.jpeg'className='cofee'/>
        </div>
        <div className='latte'>
        <div>
          <h3>Espresso</h3>
        </div>
        <h3>12k</h3>

        </div>
        <div className='styled-button'>
        <div>
          <button className='c'>Hot</button>
          
          <button className='c'>Cold</button>
        </div>
        <div>
          <img src='/images/cartIcon.png'className='icon'/>
        </div>
        </div>
      </div>
      <div>
      <div>
          <img src='/images/capuccino.jpeg'className='cap'/>
        </div>
        <div className='latte'>
        <div>
          <h3>Hazelnut Latte</h3>
        </div>
        <h3>23k</h3>

        </div>
        <div className='styled-button'>
        <div>
          <button className='c'>Hot</button>
          
          <button className='c'>Cold</button>
        </div>
        <div>
          <img src='/images/cartIcon.png'className='icon'/>
        </div>
        </div>
      </div>
      
      </div>
      <div className='delivery'>
        <h1>How to use delivery <span className='underline'>Service</span></h1>
      </div>
      <div className='summary'>
        <div>
          <img src='/images/hotcoffee.jpeg'/>
          <h3>choose your coffee</h3>
          <p>there are 20+ coffees for you</p>
        </div>
        <div>
          <img src='/images/transit.png'/>
          <h3>we delivery it to you</h3>
          <p>choose delivery service</p>
        </div>
        <div>
          <img src='/images/coffeeDrink.png'/>
          <h3>Enjoy your coffee</h3>
          <p>choose delivery service</p>
        </div>
      </div>
      <div className='company'>
        <div className='l'>
          <img src='/images/latte.jpeg'className='l'/>
        </div>
        <div>
          <div className='about'>
            <h1>About <span className='underline'>us</span></h1>
            <h3 className='h'>we provide quality coffee, and ready to deliver.</h3>
            <p>We are a company that makes and distributes<br/> delicious drinks.Our main product is made with a<br/> secret recipe and available in stores worldwide.</p>
            <button className='btn'>Get your coffee</button>
          </div>
        </div>
      </div>
      <div className='menu'>
        <h1>Special menu <span className='underline'>for you</span></h1>
      </div>
      <div className='flip'>
      <div className='item'>
        <div className='san'>
          <img src='/images/sandwich.jpeg'className='w'/>
        </div>
        <div className='sandwich'>
          <div>
            <h3>Sandwich</h3>
          </div>
          <div>
            <h3>12K</h3>
          </div>
        </div>
        <div className='bread'>
          <div className='m'>
            <p>bread with meat <br/>and vegetables</p>
          </div>
          <div>
            <img src='/images/cartIcon.png'className='i'/>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='san'>
          <img src='/images/sandwich.jpeg'className='w'/>
        </div>
        <div className='sandwich'>
          <div>
            <h3>Sandwich</h3>
          </div>
          <div>
            <h3>12K</h3>
          </div>
        </div>
        <div className='bread'>
          <div className='m'>
            <p>bread with meat <br/>and vegetables</p>
          </div>
          <div>
            <img src='/images/cartIcon.png'className='i'/>
          </div>
        </div>
      </div>
      <div className='item'>
        <div className='san'>
          <img src='/images/sandwich.jpeg'className='w'/>
        </div>
        <div className='sandwich'>
          <div>
            <h3>Sandwich</h3>
          </div>
          <div>
            <h3>12K</h3>
          </div>
        </div>
        <div className='bread'>
          <div className='m'>
            <p>bread with meat <br/>and vegetables</p>
          </div>
          <div>
            <img src='/images/cartIcon.png'className='i'/>
          </div>
        </div>
      </div>

      </div>
      </div>
  )}
  export default Coffee