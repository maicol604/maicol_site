import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import './styles.scss';

const Form = () => {
   const frmContact = { userEmail:'', emailDetails:'', userName:'' };
   const [contact,setContact] = useState(frmContact);
   const [showMessage, setShowMessage] = useState(false);
   const handleChange = e => { 
		const {name,value} = e.target;
		setContact({...contact,[name]:value}); 
   };
   const handleSubmit = e =>{
	    e.preventDefault();
	   
		emailjs.send('maicol_fario_gmail_com','template_rPf2MKnL', contact, 'user_VQ4AUuGruLhYEYBQlxaVu')
		.then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setContact(frmContact);
            setShowMessage(true);
		}, (err) => {
			console.log('FAILED...', err);
		});
   }
  return (
    <div className="contact-form-wrapper">
		{ showMessage ? <div className="alert" role="alert">Email Send Success!!</div> : ''}
		<form onSubmit={handleSubmit}>
            <input className="form-control" required type="text" value={contact.userEmail} name="userEmail" onChange={handleChange} placeholder="Your email" />
            <input className="form-control" required type="text" value={contact.userName} name="userName" onChange={handleChange} placeholder="Your Name" />
            <textarea className="form-control" required name="emailDetails" onChange={handleChange} placeholder="Describe your concerns" value={contact.emailDetails}></textarea>
            <button className="btn-submit">Contact</button>
		</form>	
	</div>
  );
}
export default Form;