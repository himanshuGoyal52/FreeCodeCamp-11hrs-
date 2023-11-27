import React , {useEffect, useState} from 'react'


const style = {
    'backgroundColor' : 'black',
    'width' : '5rem',
    'height' : '5rem',
    'borderRadius' : '50%',
    'color' : 'white',
    'display' : 'flex',
    'alignItem' : 'center',
    'justifyContent' : 'center',
    'cursor':'pointer'
}

export function Prac() {
    const [isGoingOut,setIsGoingOut] = useState(true);

    const change = function (){
        setIsGoingOut(!isGoingOut);
        // setIsGoingOut(prevState => !prevState);
    }
    // bina call back function ke bhi runn ho raha hai sir


  return (
    <div onClick={change} style={style}>
        <h2>{isGoingOut ? 'YES' : 'NO'}</h2>
    </div>
  )
}

export function WithArray(){
    const [arr,setArr] = useState(['Thing 1','Thing 2']);

    
    const JSXarr = arr.map(item=><p>{item}</p>);
    function addItem(){
        let newItem = `Thing ${arr.length + 1}`;
        
        setArr(prevState => [...prevState,newItem]);
        // prevState.push will return the length of the array
    }

    return (
        <>
            <div>
                <div className='form_button' onClick={addItem}>add item</div>
                {JSXarr}
            </div>
        </>
    )
}

export function WithObj(){
    const [contact , setContact ] = useState({
        firstName : 'Himanshu Goyal',
        lastName : 'Goyal',
        phone : '+91-7412972658',
        email : 'goyalhimanshu424@gmail.com',
        isFavorite : false
    })

    let starIcon = contact.isFavorite ? 'star-filled.png' : 'star-empty.png';

    function toggleFavorite(){
        setContact(prevContact => {
            return {
                ...prevContact,
                isFavorite : !prevContact.isFavorite
            }
        })
    }  

    return (
        <>
            <img onClick={toggleFavorite} src={`../images/${starIcon}`} alt='star'/>
        </>
    )
}



// passing state as props : 


// Forms : 
export function Form(){

    const [firstName , setFirstName ] = useState('');
    const [lastName , setLastName ] = useState('');

    function handleFirstNameChange(event){
        // event passed by browser
        // event.target = <input type='text' placeholder = 'First Name' onChange={handleChange}/>
        // actually the event.target is object 
        // event.target.value

        setFirstName(event.target.value); 
        // simple :)
    }

    function handleLastNameChange(event){
        setLastName(event.target.value);
    }
    // repetation i don't like :(
        
    // now ;)
    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'' ,
        comment:'',
        isFriendly : true,
        employment : '',
        favColor : ''
    })
    function handleChange(event){
        // event.target.name
        setFormData(prevFormData => {
            const {name ,value , type , checked} = event.target;

            return {
                ...prevFormData,
                [name] : type === 'checkbox' ? checked : value
            }
        })
    }

    function handleSubmit(e){
        e.preventDefault() // it won't refresh our page 
        // submitToApi(formData);
        console.log(formData)

    }
        
    return (
        <form onSubmit={handleSubmit}>
        {/* <input type='text' placeholder = 'First Name' onChange={handleFirstNameChange}/> */}
        {/* <input type='text' placeholder = 'First Name' onChange={handleLastNameChange}/> */}
        {/* repetation i don't like :( */}
        <input name="firstName" type='text' placeholder = 'First Name' onChange={handleChange} value={formData.firstName} />
        <input name='lastName' type='text' placeholder = 'First Name' onChange={handleChange} value={formData.lastName} />
        <input name='email' type='email' placeholder = 'Email' onChange={handleChange} value={formData.email} />

        {/* actual textarea */}
        {/* <textarea>Whatever you put inside</textarea> */}

        {/* React wala textarea */}
        <textarea value={formData.comment} placeholder='Enter your comment' name='comment' onChange={handleChange}/>

        {/* checkbox */}
        <label htmlFor='isFriendly'>Are you friendly?</label>
        <input name='isFriendly' type='checkbox' id="isFriendly" checked={formData.isFriendly} onChange={handleChange}/>

        {/* Radio  */}
        <fieldset >
            <legend>Current employment status</legend>

            <input name='employment' value='unemployed' type='radio' id='unemployed' onChange={handleChange} checked={formData.employment === 'unemployed'}/>
            <label htmlFor='unemployed'>Unemployed</label>
            <br />
            <input name='employment' value='part-time' type='radio' id='part-time' onChange={handleChange} checked={formData.employment === 'part-time'}/>
            <label htmlFor='part-time'>Part-time</label>
            <br />
            <input name='employment' value='full-time' type='radio' id='full-time' onChange={handleChange} checked={formData.employment === 'full-time'} />
            <label htmlFor='full-time'>Full-time</label>
            <br />
        </fieldset>

        {/* Select box */}
        <label htmlFor='favColor'>What is your favorite color?</label>
        <select name='favColor' id='favColor' value={formData.favColor} onChange={handleChange}>
            <option value=''>-- Choose --</option>
            <option value='red'>Red</option>
            <option value='orange'>Orange</option>
            <option value='yellow'>Yellow</option>
            <option value='green'>Green</option>
            <option value='blue'>Blue</option>
        </select>

        {/* <input type='submit' value='Send'/> */}
        <button>Send</button>

    </form>
    )
}


///////////// Making API Calls ////////////
//////////////// useEffect() //////////////////
export function App(){
    const [data,setData] = useState({});

    //1. GET the data (fetch)
    //2. Save the data to state

    // console.log('Component rendered')  // this will run infinite times

    // fetch('https://swapi.dev/api/people/1')
    //     .then(res => res.json())
    //     .then(data => setData(data))
    
    // useEffect
    React.useEffect(()=>{
        fetch('https://swapi.dev/api/people/1')
            .then(res => res.json())
            .then(data => setData(data))
        
    } , [])

    return (
        <div>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
}

//// using dependinces ///
export function App2(){
    const [data,setData] = useState({});
    const [count,setCount] = useState(1);
    
    // useEffect
    React.useEffect(()=>{
        fetch('https://swapi.dev/api/people/'+count)
            .then(res => res.json())
            .then(data => setData(data))
        
    } , [count])

    return (
        <div>
            <pre>{JSON.stringify(data,null,2)}</pre>
        </div>
    )
}


///// Window Tracker /////
/// mermory leak : when we stop WindowTracker for rendering then eventListener is run and react will show error (``` can't update state of unMounted compontet ```)
export function WindowTracker(){
    const [windowWidth , setWindowWidth]=useState(window.innerWidth);
    useEffect(()=>{
      function watchWidth(){
        setWindowWidth(this.window.innerWidth)
      }
  
      window.addEventListener('resize' , watchWidth)
  
      return function(){
        window.removeEventListener('resize',watchWidth)
      }
    },[])
  
    return (
      <h1>Window width : {windowWidth}</h1>
    )
  }