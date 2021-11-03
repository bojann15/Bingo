import React, { useState } from 'react';

const App = () => {

  const [numbers, setNumbers] = useState([]);
  const yellow = [1, 9, 17, 25, 33, 41];
  const orange = [2, 10, 18, 26, 34, 42];
  const red = [3, 11, 19, 27, 35, 43];
  const pink = [4, 12, 20, 28, 36, 44];
  const purple = [5, 13, 21, 29, 37, 45];
  const darkBlue = [6, 14, 22, 30, 38, 46];
  const blue = [7, 15, 23, 31, 39, 47];
  const green = [8, 16, 24, 32, 40, 48];

  const selectNumber = (e, item) => {
    e.stopPropagation();
    setNumbers([...numbers, item])
  }
  const handleRandom = () => {
    let results = [];

    for (let i = 1; i < 48; i++) {
      const random = Math.ceil(Math.random() * 48);
      !results.includes(random) && results.push(random)
    }
    setNumbers(results.slice(0, 6));
  }

  if (numbers.length > 10) { alert("Izabrali ste više brojeva nego što je dozvoljeno"); numbers.length = 10 };

  return (
    <>
      <div className="container">
        <div >
          {yellow.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'yellow', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'yellow' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'yellow' }} onClick={() => setNumbers(yellow)}></button>
        </div>
        <div>
          {orange.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'orange', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'orange' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'orange' }} onClick={() => setNumbers(orange)}></button>
        </div>
        <div>
          {red.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'red', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'red' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'red' }} onClick={() => setNumbers(red)}></button>
        </div>
        <div>
          {pink.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'pink', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'pink' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'pink' }} onClick={() => setNumbers(pink)}></button>
        </div>
        <div>
          {purple.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'purple', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'purple' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'purple' }} onClick={() => setNumbers(purple)}></button>
        </div>
        <div>
          {darkBlue.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'darkblue', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'darkblue' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'darkblue' }} onClick={() => setNumbers(darkBlue)}></button>
        </div>
        <div>
          {blue.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'blue', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'blue' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'blue' }} onClick={() => setNumbers(blue)}></button>
        </div>
        <div>
          {green.map((item, index) => {
            return (
              numbers.includes(item) ? <button key={index} className="selector" style={{ backgroundColor: 'green', opacity: 0.3 }} onClick={(e) => selectNumber(e, item)}>{item}</button>
                : <button key={index} className="selector" style={{ backgroundColor: 'green' }} onClick={(e) => selectNumber(e, item)}>{item}</button>
            )
          })}
          <button className="Ball" style={{ backgroundColor: 'green' }} onClick={() => setNumbers(green)}></button>
        </div>

      </div>
      <button className="random" onClick={() => handleRandom()}>Slučajnih 6</button>
      <button className="reset" onClick={() => setNumbers([])} >Poništi</button>
      <p id="title">Brojevi</p>
      <hr />
      <div className="numbers">
        {numbers?.map((item, index) => {
          return (
            orange.includes(item) ?
              <p key={index} className="Ball" style={{ backgroundColor: 'orange' }} >{item}</p>
              : yellow.includes(item) ?
                <p key={index} className="Ball" style={{ backgroundColor: 'yellow' }}>{item}</p>
                : red.includes(item) ?
                  <p key={index} className="Ball" style={{ backgroundColor: 'red' }}>{item}</p>
                  : pink.includes(item) ?
                    <p key={index} className="Ball" style={{ backgroundColor: 'pink' }}>{item}</p>
                    : purple.includes(item) ?
                      <p key={index} className="Ball" style={{ backgroundColor: 'purple' }}>{item}</p>
                      : darkBlue.includes(item) ?
                        <p key={index} className="Ball" style={{ backgroundColor: 'darkblue' }}>{item}</p>
                        : blue.includes(item) ?
                          <p key={index} className="Ball" style={{ backgroundColor: 'blue' }}>{item}</p>
                          : green.includes(item) ?
                            <p key={index} className="Ball" style={{ backgroundColor: 'green' }}>{item}</p>
                            : <p key={index} className="Ball" >{item}</p>
          )
        })}
      </div>
    </>
  )
};

export default App;
