/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useRef } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    
    const [showMessage, setShowMessage] = useState(false);

    const notify = () => toast.success("Thanks for contact me!");
    const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(e.currentTarget);

        const mailData = {
            name: data.get('name'),
            email: data.get('email'),
            phone: data.get('phone'),
            subject: data.get('subject'),
            comment: data.get('comment'),
        }
        notify()

        localStorage.setItem('mailData', JSON.stringify(mailData));

        setShowMessage(true);

        setTimeout(() => {
            setShowMessage(false);
        }, 3000);

        
        

        emailjs.sendForm('service_hz032ns', 'template_8pgqqbj', '#myForm', {
          publicKey: 'A7DgYVga6iCcsy-np',
        })
        .then(() => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );

        form.reset();

    }


    const userName = JSON.parse(localStorage.getItem('mailData'))
    console.log(userName);




    return (
        <section className="section-padding">
            <div className="container">
                <div className="flex gap-[100px] md:flex-row flex-col-reverse">
                    <div className="contact-details w-full md:w-2/5">
                        <div className="contact-details-all">
                            <div className="contact-detail">
                                <h3>Phone:</h3>
                                <p>01719048200</p>
                            </div>
                            <div className="contact-detail">
                                <h3>E-mail:</h3>
                                <p>tanvirkabir47@gmail.com</p>
                            </div>
                            <div className="contact-detail">
                                <h3>Website:</h3>
                                <p>tanvirkabir47.netlify.app</p>
                            </div>
                            <div className="contact-detail">
                                <h3>Address:</h3>
                                <p>Tarash, Sirajganj, Bangladesh</p>
                            </div>
                        </div>

                        <div className="follow-me">
                            <h2 className='text-2xl'>Follow me</h2>
                        </div>
                    </div>
                    <div className="contact-details w-full md:w-3/5">
                        <div className="contact-title bg-[--bg-color]">
                            <div className="p-8">
                                <p>|| Get In Touch</p>
                                <h2>If you have any porject or need help, Contact me.</h2>
                            </div>
                            
                            <div className="contact-form-input">
                                <form ref={form} onSubmit={handleSubmit} id='myForm'>
                                    <div className="flex gap-3 flex-col md:flex-row">
                                        <input type="text" name="name" id="" className="w-full md:w-1/2" placeholder="Name" required />
                                        <input type="email" name="email" id="" className="w-full md:w-1/2" placeholder="E-mail" required />
                                    </div>
                                    <div className="flex gap-3 flex-col md:flex-row"> 
                                        <input type="tel" name="phone" id="" className="w-full md:w-1/2" placeholder="Phone" required />
                                        <input type="text" name="subject" id="" className="w-full md:w-1/2" placeholder="Subject" required />
                                    </div>
                                    <textarea name="comment" id="" rows="5" className="w-full" placeholder="Comment" required></textarea>
                                    <button>Send Message</button>
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {showMessage && (
                <div className='form-submission-message'>
                    <h2>Thanks! "<span>{userName.name}</span>" for contacting me.</h2>
                </div>
            )}
            <ToastContainer />
        </section>
    );
};

export default ContactForm;