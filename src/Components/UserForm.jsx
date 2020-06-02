import React, {Component} from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confirm from "./Confirm";
import Success from "./Success";

class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    };

    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value})
    };

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio};
        switch (step) {
            case 1:
                return (
                    <FormUserDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep}/>
                );
            case 2:
                return (
                    <FormPersonalDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>
                );
            case 3:
                return (
                    <Confirm values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>
                );
            case 4:
                return (
                    <Success/>
                );
            default:
                return <h1>Error</h1>
        }
    }
}

export default UserForm;