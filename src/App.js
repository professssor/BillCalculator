import { useState } from "react";
import "./App.css";

function App() {
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setinputTwo] = useState("");
  const [message, setMessage] = useState("");

  const [numberOfNotes, setNumberOfNotes] = useState([]);

  const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

  function calculateChange() {
    if (inputOne > 0) {
      if (inputTwo >= inputOne) {
        const amountToBeReturned = inputTwo - inputOne;

        //any function to calculate the change with each note
        manageChangeToBeReturned(amountToBeReturned);
      } else if (inputOne > inputTwo) {
        setMessage("quick !! the dishes are waiting for you ");
      }
    } else {
      setMessage("enter valid bill amount!! ");
    }
  }

  function manageChangeToBeReturned(amount) {
    let d = {};
    for (let i = 0; i < availableNotes.length; i++) {
      //number of note needed of each type
      const sortingTheNunberOfNotes = Math.trunc(amount / availableNotes[i]);
      // new amount to be returned for the  remaining cycle of loop
      amount = amount % availableNotes[i];
      d[i] = sortingTheNunberOfNotes;

      // rendering the cash amount in html
    }
    const ArrayOfNotes = Object.values(d);

    setNumberOfNotes(ArrayOfNotes);
  }

  return (
    <div className="App">
      <section className="header-container">
        <h1>Cash Register Manager</h1>
        <p>
          {" "}
          Enter the bill amount and cash given by the customer and know minimum
          number of notes to return
        </p>
      </section>
      <section className="input-container">
        <div className="bill-div">
          {" "}
          <h3>Bill Amount</h3>
          <input
            onChange={(event) => setInputOne(event.target.value)}
            type="text
          "
          />
        </div>

        {/* rendering the   second input when the input one has some value****** BONUS*/}

        {!inputOne ? null : (
          <div>
            <h3>Cash Given</h3>
            <input
              onChange={(event) => setinputTwo(event.target.value)}
              type="text"
            />
          </div>
        )}
      </section>
      <button onClick={calculateChange}> Check</button>

      <section className="cash-table">
        <table>
          <caption>Return change</caption>
          <thead>
            <tr>
              <th>No of Notes</th>

              <td>{numberOfNotes[0]}</td>
              <td>{numberOfNotes[1]}</td>
              <td>{numberOfNotes[2]}</td>
              <td>{numberOfNotes[3]}</td>
              <td>{numberOfNotes[4]}</td>
              <td>{numberOfNotes[5]}</td>
              <td>{numberOfNotes[6]}</td>
            </tr>{" "}
          </thead>
          <tbody>
            <tr>
              <th>Note</th>
              <td>2000</td>
              <td>500</td>
              <td>100</td>
              <td>20</td>
              <td>10</td>
              <td>5</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </section>
      <footer>
        <h3>{message}</h3>
      </footer>
    </div>
  );
}

export default App;
