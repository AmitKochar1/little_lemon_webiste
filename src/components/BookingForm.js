import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

export default function BookingForm(availableTimes, dispatch, submitForm) {
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
    setFormData((pervFormData) => ({
      ...pervFormData,
      [name]: value
    }))
  }

  const handleDateChange = async(e) => {
    const {name, value} = e.target
    setFormData((pervFormData) => ({
      ...pervFormData,
      [name]: value
    }))
    dispatch({type: "UPDATE_TIMES", payload: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm(formData)
  }

  const currentDate = new Date().toString().split('T')[0];
  const options = availableTimes.map(time => <option key={time}>{time}</option>)

  // const [fullName, setFullName] = useState('');
  // const [email, setEmail] = useState('');
  // const [tel, setTel] = useState('');
  // const [date, setDate] = useState();
  // const [people, setPeople] = useState('0');
  // const [occasion, setOccasion] = useState('');
  // const [comments, setComments] = useState('')
  // const [finalTime, setFinalTime] = useState( ''
  //   // props.availableTimes.map((times) => <option> {times} </option>)
  // )

  // const handleName = (e) => {
  //   setFullName(e.target.value);
  // }

  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  // }

  // const handleTel = (e) => {
  //   setTel(e.target.value);
  // }

  // const handlePeople = (e) => {
  //   setPeople(e.target.value);
  // }

  // const handleOcassion = (e) => {
  //   setOccasion(e.target.value);
  // }

  // const handleComments = (e) => {
  //   setComments(e.target.value);
  // }

  // function handleDateChange(e){
  //   setDate(e.target.value);

  //   var dateString = e.target.value;
  //   const date = new Date(dateString);

  //   props.updateTimes(date);
    
  //   setFinalTime('')

  //   // setFinalTime(props.availableTimes.map((times) => <option>{times}</option>))
  // }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   alert('Your table has been booked!!');
  //   setFullName("");
  //   setPeople("0");
  // }
    return (
      <main>
        <h1>Please, fill in the form below to book your table </h1>
          <form className='form' onSubmit={handleSubmit} >
            <div className='formLabel'>
              <label htmlFor='fullName'> Full Name </label>
                <input type='text' id='fullName' onChange={handleFormChange} value={formData.fullName} placeholder='Full Name'/>
            </div>

            <div className='formLabel'>
              <label htmlFor='teleNumber'>Phone Number </label>
                <input type='phone' id='teleNumber' onChange={handleFormChange} value={formData.number} placeholder='TelePhone Number'/>
            </div>

            <div className='formLabel'>
              <label className='formLabel' htmlFor='date'>Choose date: </label>
                <input type='date' id='date'onChange={handleDateChange} value={formData.date} required min={currentDate}/>
            </div>

            <div className='formLabel'>
              <label className='formLabel' htmlFor='time'>Choose time: </label>
              <select id='time' value={formData.time} onChange={handleFormChange} required>
                {options}
              </select>
            </div>
            
            <div className='formLabel'>
              <label className='formLabel' htmlFor='occasion'>Occasion: </label>
                <select id='occasion' value={formData.occasion} onChange={handleFormChange}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                  <option>Engagement</option>
                  <option>other</option>
                </select>
            </div>

            <div className='formLabel'>
              <label className='formLabel' htmlFor='guests'>Number of guests: </label>
                <input type='number' id='guests' placeholder='1' min='1' max='10' required value={formData.noOfGuests} onChange={handleFormChange} />
            </div>

            {/* <div className='formLabel'>
              <label htmlFor='comments'>Additonal Comments:<br />
              <textarea id='comments' placeholder='Additonal Comments' value={comments} onChange={handleComments}/>            
              </label>
            </div> */}
            
            <button disabled={!formData.fullName} type='submit'>Book Your Table</button>
          </form>
        </main>
)}

  