import { useEffect } from 'react';

// Export the function to Main

function Counter() {
    // use vanilla js inside React
    useEffect(() => {
      // set inital value to zero
      let count = 0;
      // select value and buttons
      const value = document.querySelector("#value");
      const btns = document.querySelectorAll(".btn");

      btns.forEach(function (btn) {
        btn.addEventListener("click", function (e) {
          const styles = e.currentTarget.classList;
          if (styles.contains("decrease")) {
            count--;
          } else if (styles.contains("increase")) {
            count++;
          } else {
            count = 0;
          }

          if (count > 0) {
            value.style.color = "green";
          }
          if (count < 0) {
            value.style.color = "red";
          }
          if (count === 0) {
            value.style.color = "#222";
          }
          value.textContent = count;
        });
      });
    }, []);
        
    return (
        <>
            <h2>Counter</h2>
            <span id="value">0</span>
            <div className="button-container">
                {[
                    ['Decrease','decrease'],
                    ['Reset','reset'],
                    ['Increase','increase']
                ].map(([button_name,button_class]) => (
                    <button key={button_class}
                        className={`btn ${button_class}`}>{button_name}</button>
                ))}
            </div>
        </>
    )
}

export default Counter;