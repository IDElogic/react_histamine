import React from 'react';
import { Navbar } from '../../components';
import Brochure from '../Brochure/Brochure';
import Cards from '../Cards/Cards';
import Cards_2 from '../Cards/Cards_2';
import FoodList from '../FoodList/FoodList';
import Footer from '../Footer/Footer';
import Gallery2 from '../../components/Gallery/Gallery2';
import Gallery3 from '../../components/Gallery/Gallery3';
import Gallery4 from '../../components/Gallery/Gallery4';
import Gallery5 from '../../components/Gallery/Gallery5';
import Grocery from '../Grocery/Grocery';
import Guide from '../Guide/Guide';
import Info from '../Info/Info';
import Recipes from '../Recipes/Recipes';
import './Home.css';

const Home = () => {
return (
<div>
<Navbar/>
<header className='home' id='home'>
  <div className='glass'>
    <h1 className='h-glass'>Histamine</h1>
    <div></div>
  </div>
  <h1 className='h-regular'>App</h1>
</header>
<Info/>
<Cards/>
<FoodList/>
<Gallery3/>
<Grocery/>
<Gallery5/>
<Cards_2 />
<Recipes/>
<Gallery2/>
<Guide/>
<Gallery4/>
<Brochure/>

<Footer/>
</div>
 ) 
};

export default Home;