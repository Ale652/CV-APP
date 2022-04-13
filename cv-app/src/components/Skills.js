import React from 'react';
import './Skills.css';
import Skill from './Skill';
import Interests from './interests';


function Skills(){

    return<>
        <div className='skills'>
            <h2 className='h2'>Skills</h2>
            <Skill title="HTML" rating="3" />
            <Skill title="CSS" rating="3" />
            <Skill title="JAVASCRIPT" rating="3" />
            <Skill title="REACT" rating="3" />
            <Skill title="JAVA" rating="3" />
            {/* <Skill title="PHP" rating="3" />
            <Skill title="C/C++" rating="2" /> */}
        </div>
        <div className='skills'>
            <h2 className='h2'>Languages</h2>
            <Skill title="English" rating="3" />
            <Skill title="French" rating="4" />
        </div>
        <Interests />
        </>
}

export default Skills