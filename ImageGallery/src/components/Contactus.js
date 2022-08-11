import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Contactus() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [feedback, setFeedback] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value); 
    }
    const onChangeFeedback = (e) => {
        setFeedback(e.target.value);
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        alert("Name - "+name+"\nEmail - "+email+"\nFeedback - "+feedback+"\n\nThank You!");
        setName("");
        setEmail("");
        setFeedback("");
    }

    return (
        <div className='contact'>
            <div className='containForm'>
                <form onSubmit={onSubmitHandler}>
                    <div className='containFlex'>
                        <div className='box'>
                            <div className='name'>Name</div>
                            <input type='text' onChange={onChangeName} value={name} placeholder='Name' required />
                        </div>
                        <div className='box'>
                            <div className='email'>Email</div>
                            <input type='email' onChange={onChangeEmail} value={email} placeholder='Email' required />
                        </div>
                    </div>
                    <div className='textarea'>
                        <div className='feedback'>Feedback</div>
                        <textarea placeholder='Feedback' onChange={onChangeFeedback} value={feedback} rows={4} maxLength={150} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>
                <div className='socials'>
                    <Link to='https://www.linkedin.com/'><i className="fa fa-linkedin-square"></i></Link>
                    <Link to='https://github.com/'><i className="fa fa-github-square"></i></Link>
                    <Link to='https://twitter.com/'><i className="fa fa-twitter-square"></i></Link>
                    <Link to='https://www.youtube.com/'><i className="fa fa-youtube-play"></i></Link>
                </div>
            </div>
        </div>
    )
}

export default Contactus