import React, { useEffect, useState } from 'react';
// import { data } from './memeData'
// https://api.imgflip.com/get_memes

// read this docs please 
// all eventListner
// https://reactjs.org/docs/events.html#mouse-events

export default function Form() {
    // let [url,setUrl] = React.useState('https://i.imgflip.com/30b1gx.jpg');
    
    /* now after complex states */
    const [meme , setMeme] = React.useState({
      topText : '',
      bottomText : '',
      imgUrl : 'https://i.imgflip.com/30b1gx.jpg',
    })
    const [allMemeImages , setAllMemeImages] = React.useState({});

    useEffect(()=>{
      // using async await 
      async function getMemes(){
        const res = await fetch('https://api.imgflip.com/get_memes');
        const data = await res.json();
        setAllMemeImages(data);
      }
      getMemes();


      // fetch('https://api.imgflip.com/get_memes')
      //   .then(res => res.json())
      //   .then(data => setAllMemeImages(data))

    },[])



    function getMemeImage(){
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        // const {url} = memesArray[randomNumber];
        setMeme(prevState => ({
          ...prevState,
          imgUrl : url
        }));
    }

    function handleChange(e){
      const {name , value} = e.target;
      setMeme((prevMeme)=>({
        ...prevMeme,
        [name] : value
      }))
    }

  return (
    <main>
        <div className='form'>
            <input name='topText' value={meme.topText} onChange={handleChange} type="text" className='form_input' placeholder='Top text'/>
            <input name='bottomText' value={meme.bottomText} onChange={handleChange} type="text" className='form_input' placeholder='Bottom text'/>
            <button onClick={getMemeImage} className='form_button'>Get a new meme image  🖼</button>
            <div className='meme'>
              <img className='meme_img' src={meme.imgUrl} alt='gnadu'/>
              <h2 className='meme_text top'>{meme.topText}</h2>
              <h2 className='meme_text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    </main>
  )
}

