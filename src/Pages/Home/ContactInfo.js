import React, { useState } from 'react';
import emailjs from "emailjs-com"


const Result = () => {
    return (
        <p className='text-green-600'>Your message has been successfully sent.</p>
    )
}
// const ShowError = () => {
//     return (
//         <p className='text-green-600'>Your message has been successfully sent.</p>
//     )
// }

const ContactInfo = () => {
    const [result, setResult] = useState(false)

    const handlesendEmail = event => {
        event.preventDefault()
        const form = event.target;
        console.log(form.email.value);

        emailjs.sendForm('service_5mwaus8', 'template_iioizxe', event.target, '8SiKyRNnNeddMkP4l')
            .then(res => {
                console.log(res);
                setResult(true)

            })
            .catch(error => {
                console.log(error)

            })
        form.reset()

    }


    setTimeout(() => {
        setResult(false)
    }, 5000)
    return (
        <div className='my-10'>
            <div className="hero">
                <div className="hero-content flex-col ">
                    <div className="text-center ">
                        <h1 className="text-5xl font-bold text-primary">Send me a message!</h1>
                        <p className="py-6 text-lg font-bold">Got a question or  proposal, or just want to say hello? Go Ahead.</p>
                    </div>
                    <form onSubmit={handlesendEmail} className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Enter your name" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter your email" required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Message</span>
                                </label>
                                <textarea name='message' className="textarea textarea-bordered" required placeholder="Type your message"></textarea>
                            </div>

                            <input className='w-full  btn btn-neutral' type="submit" value="Send message" />

                            {
                                result ? <Result /> : null
                            }


                        </div>
                    </form>
                    <p>

                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;