import React from 'react';
import {useState} from "react";
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness2Icon from '@mui/icons-material/Brightness2';

//checck
function DarkMode(){

const [themeMode, setThemeMode] = useState("light");

    let clickedClass =   "clicked"
    const body = document.body 
    const lightTheme ="light"
    const darkTheme ="dark"

    let theme  /**we will need local storage  to check if we have light or dark */

    if(localStorage){

        theme = localStorage.getItem("theme");
    }

    if(theme === lightTheme || theme === darkTheme){
        body.classList.add(theme) /**we add the class dark or light on the body; then the elements inherited/ on the body will inherit this class also*/ 
    }else{
        body.classList.add(lightTheme)
    }

    const switchTheme =  e => {
        if(theme === darkTheme){
            body.classList.replace(darkTheme,lightTheme)
            /**https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
             * The Element.classList is a read-only property that returns a live DOMTokenList collection of the class attributes of the element. This can then be used to manipulate the class list.

            Using classList is a convenient alternative to accessing an element's list of classes as a space-delimited string via element.className.
             */
            e.target.classList.remove(clickedClass)
            localStorage.setItem("theme","light")
            theme = lightTheme
        }else{
            body.classList.replace(lightTheme,darkTheme)
            e.target.classList.add(clickedClass)
            localStorage.setItem("theme","dark")
            theme = darkTheme
        }

        setThemeMode(theme)
        
    }

    return(
        <button className={theme === 'dark' ? clickedClass : ""} id="darkMode" onClick={ e =>switchTheme(e)}>
            {themeMode  === "light" || theme === "light" ? <Brightness2Icon /> :  <LightModeIcon /> }
                     
        </button>
    )   
        
}

export default DarkMode