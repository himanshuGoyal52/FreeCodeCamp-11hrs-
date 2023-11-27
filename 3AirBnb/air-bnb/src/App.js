import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Prop from './components/prop';
import data from './data';

function App() {
  const JSXData = data.map((item)=> {
    return (<Card 
    // key= {item.id}
    // img = {item.coverImg}
    // rating = {item.stats.rating}
    // country={item.location}
    // title={item.title}
    // price = {item.price}
    // openSpots = {item.openSpots}

    key = {item.id}
    // item = {item}

    /* or we can also do this */
    {...item}
  />)
  })

  return (
    <>
      {/* <Prop/> */}
      <NavBar />
      <Hero/>

      {/* <Card 
        img = './images/image12.png'
        rating = {5.0}
        country='USA'
        title='Life lessons with Katie Zaferes' 
        price = {136}
      />
      <Card 
        img = './images/mountain-bike 1.png'
        rating = {5.0}
        country='USA'
        title='Life lessons with Katie Zaferes' 
        price = {136}
      /> */}
      {JSXData}
    </>
  );
}

export default App;
