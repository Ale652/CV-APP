import React from 'react';
import './User.css';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
// import LocationOnIcon from '@mui/icons-material/LocationOn';

function User(){

    return(
        <div className='user'>
            <img src="./images/avatar.png" alt="" className='user__avatar'/>
            <h1 className='user__name'>Moise Alexandra</h1>
            <p className='user__profession'>Consultant IT</p>
            <div className='user__infos'>
                <p className='user__info'> <HomeIcon />Bucharest, Distrit 3, Street Ceairului 13, Building M2</p>
                <p className='user__info'> <LocalPhoneIcon /> <a href="tel=+30728521440">0728.521.440</a></p>
                <p className='user__info'> <EmailIcon /> <a href="mailto:mmoisealexandra42@gmail.com">mmoisealexandra42@gmail.com</a></p>
                <p className='user__info'> <EventIcon /> Birth Date: 29.09.1988</p>

            </div>

        </div>
    )
}

export default User