import React from "react";
import Button from "@material-ui/core/Button";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const FormUserDetails = ({values, handleChange, nextStep}) => {

    return (
        <React.Fragment>
            <ValidatorForm onSubmit={nextStep}>
                <TextValidator
                    required
                    placeholder="Enter Your First Name"
                    id="FirstName" label="Fist Name" value={values.firstName} onChange={handleChange('firstName')}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>
                <TextValidator
                    required
                    placeholder="Enter Your Last Name"
                    id="LastName" label="Last Name" value={values.lastName} onChange={handleChange('lastName')}
                    validators={['required']}
                    errorMessages={['this field is required']}
                />
                <br/>
                <TextValidator
                    required
                    placeholder="Enter Your Email"
                    helperText="Enter Your Real Email Here"
                    label="Email"
                    onChange={handleChange('email')}
                    name="email"
                    value={values.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'email is not valid']}
                />
                <br/>
                <Button variant="contained" color="primary" style={styles.button} type='submit'>Next</Button>
            </ValidatorForm>
        </React.Fragment>
    )
};

const styles = {
    button: {
        margin: 15
    }
};

export default FormUserDetails;

//<form onSubmit={next}>
//<TextField required id="FirstName" label="Fist Name" value={values.firstName} onChange={handleChange('firstName')} />
//<br/
//<TextField required id="LastName" label="Last Name" value={values.lastName} onChange={handleChange('lastName')} />
//<br/>
//<TextField required id="email" label="Email" placeholder="Enter Your Email" helperText="Enter Your Email Here" value={values.email}
//             onChange={handleChange('email')} />
//<br/>
//<Button variant="contained" color="primary" style={styles.button} type='submit'>Next</Button>
//</form>