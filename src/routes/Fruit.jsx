import React from 'react'

const Fruit = () => {

let someFruit = ["apple", "mango", "banana", "orange"]

    function fruitClickLogger(fruit, event) {
        console.log(`You clicked on the ${fruit}. This event was a ${event.type} and occurred in the ${event.target.nodeName} element.`);
    }

    return (
        <div className="App" >
            {someFruit.map((fruit) => {
                return <p key={fruit} onClick={(event) => fruitClickLogger(fruit, event)} >Super awesome {fruit}</p>

            })}
        </div>
    );
}
  
export default Fruit