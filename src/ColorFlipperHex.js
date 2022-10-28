import { useEffect } from 'react';

const hoverBtn = {
    cursor: "pointer"
}
function ColorFlipperHex() {
    useEffect(() => {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        const btn = document.getElementById("btn");
        const color = document.querySelector(".color");
        
        btn.addEventListener("click", function(){
            let hexColor = "#"; 
            
            for(let i= 0; i < 6; i++)  {
                hexColor += hex[getRandomNumber()];
            }

            // result will be: #00AA99 for example

            color.textContent = hexColor;
            document.body.style.backgroundColor = hexColor;
        })
        function getRandomNumber() {
            return Math.floor(Math.random() * hex.length);
        }
    },[]);
    
    return (
        <>
            <div className="container">
                <h2>{`Color Flipper with Hex`}</h2>
                <span className="color">#f15025</span><br></br>
                <button style={hoverBtn} className="btn" id="btn">Click me to change background color</button>
            </div>
        </>
    )
}

export default ColorFlipperHex