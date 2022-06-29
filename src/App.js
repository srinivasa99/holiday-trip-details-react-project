import { useState } from 'react';
import './App.css';
import mockVacation from './mock_vacation.json';

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const [text, setText] = useState('');

  let handleClickFunction = (e) => {
    setText(e.target.value);
    console.log('text ', text);
    if (text === 'Sedona') {
      setIsClicked(!isClicked);
    }
    console.log('isClicked ', isClicked);
  }


  return (
    <div className="App">
      <header className="App-header">
        <h3 className='Title-header'>
          VACATION DETAILS
        </h3>
        <div className='Body-block'>
          <p>Where do you want to go in USA?</p>
          <label>Enter your city name:
            <input
              type="text"
              placeholder='type city name like Miami'
              value={text}
              onChange={(e) => handleClickFunction(e)}
            />
          </label>
          {/* <button onChange={(e) => handleClickFunction(e)}> Click Me </button> */}
        </div>
        <br />
        <div className='Body'>
          Vacation Trip Details:
          {isClicked ? mockVacation && mockVacation.map(e1 => {
            return (
              <div>
                State: {e1.destination.state}<br />
                City: {e1.destination.city}<br />
                Locations: {e1.destination.locations}<br />
                Temperature: {e1.destination.temperature_range}<br />
                Accommodation: {e1.destination.accommodation}<br />
                Food: {e1.destination.food}<br />
              </div>
            );
          }) : []}
        </div>
      </header>
      <footer className='Footer'>
        <h6>2022 &copy; All Rights Reserved. Terms & Conditions Apply.
        </h6>
      </footer>
    </div>
  );
}

export default App;
