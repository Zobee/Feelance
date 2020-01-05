import React, {useState} from 'react'
import {Card, Alert} from 'react-bootstrap'
import * as emailjs from 'emailjs-com'

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const validate = (mail) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        reg.test(mail) ? console.log('true') : alert("Invalid Email Address")
    }

    const reset = () => {
        setEmail('')
        setName('')
        setSubject('')
        setMessage('')
    }

    const handleSubmit = (e) => {
        let sendName = ''
        name === '' ? sendName = 'Friend' : sendName = name;
        validate(email);

        emailjs.send(
            'gmail',
            process.env.REACT_APP_TEMPLATE_KEY,
            {from_name: name, 
            to_name: 'Zoheb', 
            email_add: email, 
            email_subject: subject,
            message_html : message},
            process.env.REACT_APP_API_KEY
        )

        alert(`Mail Sent! Thanks ${sendName}!`)

        reset()
    }
    console.log(process.env.REACT_APP_TEMPLATE_KEY);
    console.log(process.env.REACT_APP_API_KEY);
    return (
        <div>
            <h1 className='my-3 text-center bold'>Get in Touch</h1>
            <h5 className='text-center mt-3 mb-5 mx-3 italic'>Whatever your writing needs, I'm happy to pen to paper for you!</h5>

            <Card style={{width: '85%', margin: '10px auto', boxShadow : 'black'}}>
            <form className='w-100'>
                <input className='w-100 mt-2 textbox' type='text' name='Name' onChange={(e)=>{setName(e.target.value)}} value={name} placeholder='Name:'></input>
                <input className='w-100 mt-4 textbox' type='text' name='Email' required onChange={(e)=>{setEmail(e.target.value)}} value={email} placeholder='Email Address:'></input>
                <input className='w-100 mt-4 textbox' type='text' name='Subject' required onChange={(e)=>{setSubject(e.target.value)}} value={subject} placeholder='Subject:'></input>
                <textarea className='w-100 mt-2 pb-5 textbox' type='textarea' name='Message' required onChange={(e)=>{setMessage(e.target.value)}} value={message} placeholder='Message:'></textarea>
                <button type='submit' onClick={(e)=>handleSubmit(e)} className='mt-2 btn btn-block btn-secondary'>Submit</button>
            </form>
            </Card>

            <p style={{fontSize : '2em'}}className='my-3 text-center'>You can also email me directly at <a href='mailto:zohebboga@gmail.com'>zohebboga@gmail.com</a></p>

        </div>

    )
}

export default Contact