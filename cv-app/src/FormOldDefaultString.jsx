import React from 'react';
import {useState} from "react";
import axios from 'axios';

import { Input } from 'react-input-component';
import e from 'cors';

function Form(){
	
	
const [firstname, setFirstName] = useState("");
const [lastname, setLastName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [sent, setState] = useState(false);
	
	

const handleFirstName=(e)=>{
    setFirstName(e.target.value);
}

const handleLastName=(e)=>{
  setLastName(e.target.value);
}

const handleEmail=(e)=>{
  setEmail(e.target.value);
}


const handleMessage=(e)=>{
  setMessage(e.target.value);
}

//  end handle iputs 


// for reseting intial data
const resetForm=()=>{
  setName(" ");
  setLastName(" ");
  setEmail(" ");
  setMessage(" ");
  

  setTimeout(()=>{
    setState(false);
  },3000)
}


const formSubmit=(e)=>{
  e.preventDefault();
  
  let data ={
    d_name: firstname,
    d_lastname: lastname,
    d_email: email,
    d_message: message
  }

  console.log(data);

  axios.post('/api/forma',data)
  .then(res=>{
	  setState(true);
    // reset();
	  resetForm();
    console.log(sent);
    console.log('message SENT');
  }).catch(()=>{
    console.log('message not sent');
  }) 

}

    return(
    <div className='container'>
        <form onSubmit={e =>formSubmit(e)}>
        {/* <form> */}
            {/**single item */}   
             <div className='singleItem'>
                <label htmlFor='firstname'>Name</label>
                {console.log(firstname)}
                <Input type='text'
                name='firstname' 
                className='firstname'
                id='firstname' 
                // placeholder='your name...'
                autoComplete="off" 
                onChange={e => handleFirstName(e)}
                // defaultValue="default value"
                value="default"
                />

                {console.log(firstname)}     
            </div>
             {/** end of single item */}  


               {/**single item */}   
              <div className='singleItem'>
                <label htmlFor='lastname'>Lastname</label>
                <input type="text" 
                name='lastname' 
                className='lastname' 
                placeholder='your lastname...' 
                value={lastname}
                onChange={e => handleLastName(e)}
                />
            </div>
             {/** end of single item */}  

              {/**single item */}   
              <div className='singleItem'>
                <label htmlFor='email'>Email</label>
                <input type="text" 
                name='email' 
                className='email' 
                placeholder='your email...' 
                value={email}
                onChange={e => handleEmail(e)}
                required
                />
            </div>
             {/** end of single item */}   

             {/**single item */}  
              <div className='textArea singleItem'>
                  <label htmlFor='message'>Message</label>
                  <textarea name='message' 
                  id="" cols={30} 
                  rows={5}
                  value={message}
                  onChange={e => handleMessage(e)}
                  ></textarea>
              </div>
                {/** end of single item */}
            <div className ={sent ? 'msg' : 'msgAppear'}>Message has been sent</div>
            <div className='btn'>
            <button>Submit</button>
            </div>   


        </form>

    </div>
    )
	

}
export default Form