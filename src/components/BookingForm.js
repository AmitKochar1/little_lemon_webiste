import { useState } from 'react';
import '../App.css';


export default function BookingForm({time, onChange}) {
  const [name, setName] = useState('');
  const [date, setDate] = useState();
  const [numberOfGuests, setNumberOfGuests] = useState('0');


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
        <form className='form' onSubmit={handleSubmit} >
          <label className='formLabel'  htmlFor='name'> Name: 
            <input type='text' id='name' onChange={handleName} value={name}/>
          </label>
          <label className='formLabel' htmlFor='res-date'>Choose date: 
            <input type='date' id='res-date'onChange={handleDate} value={date} />
          </label>
          <label className='formLabel' htmlFor='res-time'>Choose time:
            <select id='res-time' value={time} onChange={onChange}>
              <option value='5:00pm'>5:00 pm</option>
              <option value='6:00pm'>6:00 pm</option>
              <option value='7:00pm'>7:00 pm</option>
              <option value='8:00pm'>8:00 pm</option>
              <option value='9:00pm'>9:00 pm</option>   
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
          <button disabled={!name || !date } type='submit'>Book Your Table</button>
        </form>
      </div>
  
)}

  