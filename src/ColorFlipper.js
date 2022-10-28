import { useEffect } from 'react';

function ColorFlipper() {
    useEffect(() => {
        // use vanilla JS here
        const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
        const btn = document.getElementById("btn");
        const color = document.querySelector(".color");

        btn.addEventListener("click", function(){
            const randomNumber = getRandomNumber();

            document.body.style.backgroundColor = colors[randomNumber];
            color.textContent = colors[randomNumber];
        });

        function getRandomNumber() {
            return Math.floor(Math.random() * colors.length);
        }

    }, []);

    return (
        <>
            <div className="container">
                <h2>Color Flipper App</h2>
                <span className="color">#00000</span>
                <button id="btn" className="btn btn-hero">Click to change Color</button>
            </div>
        </>
    )
}

export default ColorFlipper;