import { useState } from 'react';
import '../App.css';

export default function Reservations() {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState();

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
    alert('Your table has been booked!!')
  }

    return (
      <div>
        <form className='form' onSubmit={handleSubmit}>
          <label className='formLabel'  htmlFor='res-name'> Name: 
            <input type='text' id='res-name' onChange={handleName}/>
          </label>
          <label className='formLabel' htmlFor='res-date'>Choose date: 
            <input type='date' id='res-date'onChange={handleDate} />
          </label>
          <label className='formLabel' htmlFor='res-time'>Choose time:
            <select>
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </label>
          <label className='formLabel' htmlFor='guests'>Number of guests:
            <input type='number' placeholder='1' min='1' max='10' id='guests' onChange={handleGuests} />
          </label>
          <label className='formLabel' htmlFor='occasion'>Occasion:
            <select id='occasion'>
              <option>Birthday</option>
              <option>Anniversary</option>
            </select>
          </label>
          <input className='formLabel' type='submit' value='Make Your reservation' />
        </form>
      </div>
    );
  }
  