import React from 'react';
import CodeIcon from '@mui/icons-material/Code';
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';



function interests(){

    return(
        <div className='skills'>
            <h2 className='h2'>Interests</h2>
            <ul>
                <li>Programming</li>
                <li>Sport</li>
                <li>Books</li>
            </ul>
            <div className='interests'>
            <CodeIcon style={{fontSize: 40} /**it give us taille for our icons */} />  
            <DirectionsRunIcon style={{fontSize: 40}} />
            <LocalLibraryIcon style={{fontSize: 40}} />
            </div>
        </div>
    )
        
}

export default interests