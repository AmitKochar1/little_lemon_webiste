import { useState } from 'react';
import '../App.css';

function AvaiableTime() {
  const timeArray = ['17:00', '18:00', '19:00', '20:00'];
  const avaiableTime= timeArray.map((time) => <li key={time.toString()}>{time}</li>);
  return(
    <ul>{avaiableTime}</ul>
  )
}

export default function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState('10');

  
  const [avatimes, setAvaTimes] = useState(AvaiableTime);


  const handleName = (e) => {
    setName(e.target.value);
  }

  const handleDate = (e) => {
    setDate(e.target.value);
  }

  const handleGuests = (e) => {
    setNumberOfGuests(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your table has been booked!!');
    setName("");
    setNumberOfGuests("0");
  }
    return (
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <label className='formLabel'  htmlFor='name'> Name: 
            <input type='text' id='name' onChange={handleName} value={name}/>
          </label>
          <label className='formLabel' htmlFor='res-date'>Choose date: 
            <input type='date' id='res-date'onChange={handleDate} value={date} />
          </label>
          <label className='formLabel' htmlFor='res-time'>Choose time:
            <select id='res-time'>
              <option>
                <select>{avatimes}</select>
              </option>
            </select>
          </label>
          <label className='formLabel' htmlFor='guests'>Number of guests:
            <input type='number' id='guests' placeholder='1' min='1' max='10' value={numberOfGuests} onChange={handleGuests} />
          </label>
          <label className='formLabel' htmlFor='occasion'>Occasion:
            <select id='occasion'>
              <option value='ocassion'>Choose an Occasion</option>
              <option value='Birthday'>Birthday</option>
              <option value='Anniversary'>Anniversary</option>
            </select>
          </label>
          <button disabled={!name} type='submit'>Book Your Table</button>
        </form>
      </div>
    );
  }
  