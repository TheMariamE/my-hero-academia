import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, Button, Icon } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import EmailValidator from 'email-validator';

const SERVICE_ID = "service_yg0fepv";
const TEMPLATE_ID = "template_zp5gpxo";
const USER_ID = "user_QzD5No57f2JCp8waEvgvZ";

const SuscriptionForm = () => {
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
            Swal.fire({
              icon: 'success',
              title: 'Message Sent Successfully'
            })
          }, (error) => {
            console.log(error.text);
            Swal.fire({
              icon: 'error',
              title: 'Ooops, something went wrong',
              text: error.text,
            })
          });
        e.target.reset()
    };
    const [emailInput, setEmail] = useState("");
    const [validEmail, validateEmail] = useState(true);

  return (
    <>  
     <Form onSubmit={handleOnSubmit}>
     <div className="row">
        <div className="col-lg-8">
            <Form.Field
            id='form-input-control-name-sus'
            control={Input}
            name='user_name'
            placeholder='Full Name*'
            icon='user circle outline'
            iconPosition='left'
            required
            />
            <Form.Field
            id='form-input-control-email-sus'
            control={Input}
            name='user_email'
            placeholder='Email*'
            icon='mail outline'
            iconPosition='left'
            required
            value={emailInput}
            onChange={e => {
                setEmail(e.target.value);                               
                validateEmail(EmailValidator.validate(e.target.value));
            }}
            error={validEmail ? false : {
                content: 'Please enter a valid email address.',
                pointing: 'below'
            }}
            />
            </div>
            <div className="col-lg-4">
                <Button type='submit' color='green'><Icon name='send' />Suscribe</Button>
            </div>
      </div>
      </Form>
    </>
  )
}

export default SuscriptionForm;