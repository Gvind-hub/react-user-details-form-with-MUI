import React, {useState} from "react";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import spinner from '../Assets/Images/Spinner.svg'

const Confirm = ({nextStep, prevStep, values}) => {
    let [submit, submitSuccess] = useState(true);
    const handleSubmit = () => {
        //form processing imitation
        submitSuccess(false);
        setTimeout(() => {
            submitSuccess(true);
            nextStep()
        }, 5000)
    };
    let {firstName, lastName, email, occupation, city, bio} = values;
    return (
        <React.Fragment>
            {!submit && <div><h2>Submitting...</h2><img src={spinner} alt="submitting"/></div>}
            <form>
                {submit &&
                <List style={styles.listItem}>
                    <ListItem>
                        <ListItemText primary="First Name" secondary={firstName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Last Name" secondary={lastName}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Email" secondary={email}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Occupation" secondary={occupation}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="City" secondary={city}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Bio" secondary={bio}/>
                    </ListItem>
                </List>}
                <Button disabled={!submit} variant="contained" color="primary" style={styles.button} onClick={handleSubmit}>Confirm &
                    Continue</Button>
                <br/>
                <Button disabled={!submit} variant="contained" style={styles.button} onClick={prevStep}>Back</Button>
            </form>
        </React.Fragment>
    )
};

const styles = {
    button: {
        margin: 15
    },
    listItem: {
        width: 300
    },
};

export default Confirm;