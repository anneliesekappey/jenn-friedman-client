// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios'

// export const ContactForm = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')

//   const navigate = useNavigate()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     const newContact = {
//       name,
//       email,
//       message,
//       created_at: new Date().toLocaleDateString(''),
//     }

//     console.log(newContact)
//     try {
//       const { data } = await axios.post(
//         'https://ironrest.herokuapp.com/WDPT80-projects',
//         newContact
//       )
//       const id = data.ops[0]._id
//       navigate(`/project/${id}`)
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label>Email</label>
//         <textarea value={email} onChange={(e) => setEmail(e.target.value)} />
//       </div>
//       <div>
//         <label>Message</label>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//         />
//       </div>
//       <button> Send </button>
//     </form>
//   )
// }

import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data

    console.log('Name: ', name)
    console.log('Email: ', email)
    console.log('Subject: ', subject)
    console.log('Message: ', message)
  }

  return (
    <div className="ContactForm">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="contactForm">
              <form
                id="contact-form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                {/* Row 1 of form */}
                <div className="row formRow">
                  <div className="col-6">
                    <input
                      type="text"
                      name="name"
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Name"
                    ></input>
                    {errors.name && (
                      <span className="errorMessage">
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <div className="col-6">
                    <input
                      type="email"
                      name="email"
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className="form-control formInput"
                      placeholder="Email address"
                    ></input>
                    {errors.email && (
                      <span className="errorMessage">
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className="row formRow">
                  <div className="col">
                    <input
                      type="text"
                      name="subject"
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject',
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters',
                        },
                      })}
                      className="form-control formInput"
                      placeholder="Subject"
                    ></input>
                    {errors.subject && (
                      <span className="errorMessage">
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className="row formRow">
                  <div className="col">
                    <textarea
                      rows={3}
                      name="message"
                      {...register('message', {
                        required: true,
                      })}
                      className="form-control formInput"
                      placeholder="Message"
                    ></textarea>
                    {errors.message && (
                      <span className="errorMessage">
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>
                <button className="submit-btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
