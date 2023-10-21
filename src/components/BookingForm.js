import { useState } from 'react';
import '../App.css';

export default function BookingForm({availableTimes, dispatch, submitForm}) {
  console.log(dispatch);
  const [formData, setFormData] = useState({
    fullName: '',
    number: "",
    date: '',
    time: '00:00',
    noOfGuests: 1,
    occasion: 'birthday'
  })

  const handleFormChange = (e) => {
    const {name, value} = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  const handleDateChange = async (e) => {
    const {name, value} = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }))
    dispatch({type: "UPDATE_TIMES", payload: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData)
  }

  const currentDate = new Date().toISOString().split('T')[0];
  const options = availableTimes.map((time) => <option key={time}>{time}</option>)

    return (
      <main className='form-container'>
        <p>Reserve your table!!</p>
          <form className='form' onSubmit={handleSubmit} >
          
            <div className='formLabel'>
              <label htmlFor='full-name'>Full Name: </label>
                <input type='text' id='full-name' name='fullName' onChange={handleFormChange} value={formData.fullName} placeholder='Full Name' required/>
            </div>

            <div className='formLabel'>
              <label htmlFor='contact-number'>Phone Number: </label>
                <input type='phone' id='contact-number' name='number' onChange={handleFormChange} value={formData.number} placeholder='TelePhone Number' required/>
            </div>

            <div className='formLabel'>
              <label htmlFor='res-date'>Choose date: </label>
                <input type='date' id='res-date' name='date' onChange={handleDateChange} value={formData.date} required min={currentDate}/>
            </div>

            <div className='formLabel'>
              <label htmlFor='res-time'>Choose time: </label>
              <select id='res-time' value={formData.time} name='time' onChange={handleFormChange} required>
                {options}
              </select>
            </div>

            <div className='formLabel'>
              <label htmlFor='no-guests'>Number of guests: </label>
                <input type='number' id='no-guests' placeholder='1' min='1' max='10' name='noOfGuests' required value={formData.noOfGuests} onChange={handleFormChange} />
            </div>
            
            <div className='formLabel'>
              <label htmlFor='res-occasion'>Occasion: </label>
                <select id='res-occasion' value={formData.occasion} name='occasion' onChange={handleFormChange}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>other</option>
                </select>
            </div>

            <button disabled={!formData.fullName} type='submit'>Book Your Table</button>

          </form>
        </main>
)}
