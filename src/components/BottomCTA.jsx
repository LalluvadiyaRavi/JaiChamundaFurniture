import "./BottomCTA.css";

function BottomCTA({onQuoteClick}) {

return (

<div className="bottom-cta">

<button
onClick={onQuoteClick}
>

Request Quote

</button>

<a
href="https://wa.me/919978264852"
target="_blank"
rel="noopener noreferrer"
>

WhatsApp

</a>

</div>

);

}

export default BottomCTA;