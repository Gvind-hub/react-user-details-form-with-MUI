import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const FormPersonalDetails = ({nextStep, prevStep, values, handleChange}) => {

    return (
        <React.Fragment>
            <form>
            <TextField id="occupation" label="Occupation" value={values.occupation}
                       onChange={handleChange('occupation')} placeholder="Enter Your Occupation"/>
            <br/>
            <TextField id="city" label="City" value={values.city}
                       onChange={handleChange('city')} placeholder="Enter Your City"/>
            <br/>
            <TextField id="bio" label="Bio" placeholder="Enter Your Bio"  value={values.bio}
             onChange={handleChange('bio')} />
            <br/>
            <Button variant="contained" color="primary" style={styles.button} onClick={nextStep}>Next</Button>
            <Button variant="contained" style={styles.button} onClick={prevStep}>Back</Button>
            </form>
        </React.Fragment>
    )
};

const styles = {
    button: {
        margin: 15
    }
};

export default FormPersonalDetails;