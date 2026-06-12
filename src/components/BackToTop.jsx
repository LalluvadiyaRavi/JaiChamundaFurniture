import "./BackToTop.css";
import { useEffect, useState } from "react";

function BackToTop(){

const [show,setShow]=useState(false);

useEffect(()=>{

const handleScroll=()=>{

setShow(
window.scrollY>400
);

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

const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

return(

<button
className={
show
?
"top-btn show"
:
"top-btn"
}
onClick={scrollTop}
>

↑

</button>

);

}

export default BackToTop;