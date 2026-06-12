import "./ScrollProgress.css";
import { useEffect, useState } from "react";

function ScrollProgress() {

const [scroll,setScroll]=useState(0);

useEffect(()=>{

const handleScroll=()=>{

const total=

document.documentElement.scrollHeight-
window.innerHeight;

const progress=

(window.scrollY/total)*100;

setScroll(progress);

};

window.addEventListener(
"scroll",
handleScroll
);

return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};

},[]);

return(

<div
className="progress-bar"
style={{
width:`${scroll}%`
}}
></div>

);

}

export default ScrollProgress;