import { useState } from 'react';
import '../App.css';


export default function BookingForm(props) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [date, setDate] = useState();
  const [people, setPeople] = useState('0');
  const [occasion, setOccasion] = useState('');
  const [comments, setComments] = useState('')
  const [finalTime, setFinalTime] = useState( ''
    // props.availableTimes.map((times) => <option> {times} </option>)
  )

  const handleName = (e) => {
    setFullName(e.target.value);
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleTel = (e) => {
    setTel(e.target.value);
  }

  const handlePeople = (e) => {
    setPeople(e.target.value);
  }

  const handleOcassion = (e) => {
    setOccasion(e.target.value);
  }

  const handleComments = (e) => {
    setComments(e.target.value);
  }

  function handleDateChange(e){
    setDate(e.target.value);

    var dateString = e.target.value;
    const date = new Date(dateString);

    props.updateTimes(date);
    
    setFinalTime('')

    // setFinalTime(props.availableTimes.map((times) => <option>{times}</option>))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your table has been booked!!');
    setFullName("");
    setPeople("0");
  }
    return (
      <>
      <h1>Book a Table</h1>
        <form className='form' onSubmit={handleSubmit} >
          <div className='formLabel'>
            <label htmlFor='fullName'> Full Name<br />
              <input type='text' id='fullName' onChange={handleName} value={fullName} placeholder='Full Name'/>
            </label>
          </div>

          <div className='formLabel'>
            <label htmlFor='emailAdd'> Email Address<br />
              <input type='email' id='emailAdd' onChange={handleEmail} value={email} placeholder='Email Address'/>
            </label>
          </div>

          <div className='formLabel'>
            <label htmlFor='teleNumber'>Phone Number <br />
              <input type='phone' id='teleNumber' onChange={handleTel} value={tel} placeholder='TelePhone Number'/>
            </label>
          </div>

          <div className='formLabel'>
            <label className='formLabel' htmlFor='guests'>Number of guests:<br />
              <input type='number' id='guests' placeholder='1' min='1' max='10' value={people} onChange={handlePeople} />
            </label>
          </div>

          <div className='formLabel'>
            <label className='formLabel' htmlFor='date'>Choose date:<br />
              <input type='date' id='date'onChange={handleDateChange} value={date} />
            </label>
          </div>

          <div className='formLabel'>
            <label className='formLabel' htmlFor='time'>Choose time:<br />
            <select id='time' required>
              {finalTime}
            </select>
            </label>
          </div>
          
          <div className='formLabel'>
            <label className='formLabel' htmlFor='occasion'>Occasion:<br />
              <select id='occasion' value={occasion} onChange={handleOcassion}>
                <option>None</option>
                <option>Birthday</option>
                <option>Anniversary</option>
                <option>Engagement</option>
                <option>other</option>
              </select>
            </label>
          </div>

          <div className='formLabel'>
            <label htmlFor='comments'>Additonal Comments:<br />
            <textarea id='comments' placeholder='Additonal Comments' value={comments} onChange={handleComments}/>            
            </label>
          </div>
          
          <button disabled={!fullName} type='submit'>Book Your Table</button>
        </form>
        </>
)}

  