import React, {Component} from 'react';
import classes from './register.module.scss';
import './forms/forms.scss';
import Header from '../../components/common/pageHeader/Header';
import AvatarGrid from '../../components/common/avatar/AvatarGrid';
import RegisterForm from './forms/RegisterForm';
import {connect} from 'react-redux';
import {checkValidity} from '../../utilities/utilities';

class Register extends Component {

    state = {   
        showForm: true, 
        showDialogue: false,

        showUsername: true,
        showEmail: false,
        showPassword: false,
        showRePassword: false,
        showAvatar: false,

        formLabel: 'Enter Username',
        labelSpan: '(6 to 18 char.)',
        formType: 'text',
        formPlaceholder: 'username',
        fillError: null,
        
        valid: true,
        maxLength: 18,
        hasValueCount: true,
        valueCount: 18,
        minLength: 6,
        startCountRule: false,

        hasPrevious: false,

        username: '',
        email: '',
        password: '',
        rePassword: '',
        avatarType: '',

        loading: false,
        success: false,
        fail: false,

        fillComplete: false
    }

    componentDidUpdate(prevProps, prevState) {
        /* if (prevState.valid === true && this.state.valid === false) {
            if (this.state.showUsername) {
                if (this.state.brokenRule === 'minLength') {
                    this.setState({fillError: "Enter Username with" + this.state.minLength + "or more characters" })
                }
            }
        } else if (prevState.valid === false && this.state.valid === true) {
            if (this.props.showUsername) {
                this.setState({fillError: null})
            }
        } */
    }


    goBackSelected = () => {
        this.props.history.push('/');
    }

    submitPartForm = (event) => {
        event.preventDefault();
        if (this.state.showUsername) {
            if (this.state.username !== '' && this.state.username.length >= this.state.minLength) {
                this.setState({ 
                    showUsername: false, 
                    showEmail: true,

                    formLabel: 'Enter Email',
                    labelSpan: '(valid email only)',
                    formType: 'email',
                    formPlaceholder: 'email',
                    fillError: null,

                    valid: true,
                    hasValueCount: false,
                    hasPrevious: true,
                })
            } else {
                this.setState({ valid: false});
            }
        } else if (this.state.showEmail) {
            if (this.state.email !== '') {
                this.setState({ 
                    showEmail: false, 
                    showPassword: true,

                    formLabel: 'Enter Password',
                    labelSpan: '(6 or more char.)',
                    formType: 'password',
                    formPlaceholder: 'password',
                    fillError: null,
                    
                    valid: true,
                    hasValueCount: false,
                    hasPrevious: true
                })
            } else {
                this.setState({ valid: false});
            }
        } else if (this.state.showPassword) {
            if (this.state.password !== '' && this.state.password.length >= this.state.minLength) {
                this.setState({ 
                    showPassword: false, 
                    showRePassword: true,

                    formLabel: 'Repeat Password',
                    labelSpan: null,
                    formType: 'password',
                    formPlaceholder: 'password',
                    fillError: null,
                    
                    valid: true,
                    hasValueCount: false,
                    hasPrevious: true,
                })
            } else {
                this.setState({ valid: false});
            }
        } else if (this.state.showRePassword) {
            if (this.state.rePassword !== '' && this.state.rePassword.length >= this.state.minLength) {
 
                let isMatch = this.state.password === this.state.rePassword;

                if (isMatch) {
                    this.setState({ 
                        showRePassword: false, 
                        showAvatar: true,
                        label: 'Choose an Icon'
                    })
                } else {
                    this.setState({ 
                        fillError: "Password Unmatched",         
                        valid: false
                    })
                }
            } else {
                this.setState({ valid: false});
            }
            
        }
    }

    showPreviousFormPart = (event) => {
        event.preventDefault();
        if (this.state.showEmail) {
            let valueCount = this.state.maxLength - this.state.username.length;
            this.setState({
                showUsername: true,
                showEmail: false,
                
                formLabel: 'Enter Username',
                labelSpan: '(6 to 18 char.)',
                formType: 'text',
                formPlaceholder: 'username',
                fillError: null,
                
                valid: true,
                valueCount: valueCount,
                startCountRule: true,
                hasPrevious: false,
            })
        } else if (this.state.showPassword) {
            this.setState({ 
                showPassword: false, 
                showEmail: true,

                formLabel: 'Enter Email',
                labelSpan: '(valid email only)',
                formType: 'email',
                formPlaceholder: 'email',
                fillError: null,

                valid: true,
                hasValueCount: false,
                hasPrevious: true,
            })
        } else if (this.state.showRePassword) {
            
            this.setState({ 
                showPassword: true, 
                showRePassword: false,

                formLabel: 'Enter Password',
                labelSpan: '(6 or more char.)',
                formType: 'password',
                formPlaceholder: 'password',
                fillError: null,
                
                valid: true,
                hasValueCount: false,
                hasPrevious: true,
            })
        } else if (this.state.showAvatar) {
            this.setState({ 
                showAvatar: false, 
                showRePassword: true,

                formLabel: 'Repeat Password',
                labelSpan: null,
                formType: 'password',
                formPlaceholder: 'password',
                fillError: null,
                
                valid: true,
                hasValueCount: false,
                hasPrevious: true,
            })
        }
    }

    submitFormAll = (event) => {
        event.preventDefault();
        console.log('submit form all');
    }

    inputFieldChanged = (event) => {      
        if (this.state.showUsername) {
            let rules = {
                minLength: this.state.minLength,
                required: true
            };

            let newValueCount = this.state.maxLength - event.target.value.length;

            if (newValueCount < 0) {
                return;
            } else if (newValueCount === 0) {
                this.setState({
                    ...this.state,
                    username: event.target.value,
                    valid: false,
                    valueCount: newValueCount
                })
            } else if (newValueCount > 0) {
                if (event.target.value.length < this.state.minLength && this.state.startCountRule === false) {
                    this.setState({
                        ...this.state,
                        username: event.target.value,
                        valid: true,
                        valueCount: newValueCount,
                    })
                } else if (event.target.value.length === this.state.minLength && this.state.startCountRule === false) {
                    this.setState({
                        ...this.state,
                        username: event.target.value,
                        valid: checkValidity(event.target.value, rules),
                        valueCount: newValueCount,
                        startCountRule: true
                    })
                } else if (this.state.startCountRule === true) {
                    this.setState({
                        ...this.state,
                        username: event.target.value,
                        valid: checkValidity(event.target.value, rules),
                        valueCount: newValueCount
                    })
                }
            }
        } else if (this.state.showEmail) {
            let rules = {
                required: true,
                isEmail: true,
            };

            this.setState({
                ...this.state,
                email: event.target.value,
                valid: checkValidity(event.target.value, rules),
            });
        } else if (this.state.showPassword) {
            let rules = {
                required: true,
                minLength: this.state.minLength,
            };

            this.setState({
                ...this.state,
                password: event.target.value,
                valid: checkValidity(event.target.value, rules),
            });
        } else if (this.state.showRePassword) {
            let rules = {
                required: true
            };

            this.setState({
                ...this.state,
                rePassword: event.target.value,
                valid: checkValidity(event.target.value, rules),
                fillError: null
            });
        }
    }


    render() {

        let formpart = null;

        if (this.state.showAvatar) {
            formpart = 
            <AvatarGrid
                submitFormAll={this.submitFormAll}
                showPreviousFormPart={this.showPreviousFormPart}
                sideEffectLoading={this.props.registrationLoading}
                sideEffectSuccess={this.props.registrationSuccess}
                sideEffectFail={this.props.registrationFail}
                label={this.state.label}
            />
        } else {

            let value;

            if (this.state.showUsername) {
                value = this.state.username
            } else if (this.state.showEmail) {
                value = this.state.email
            } else if (this.state.showPassword) {
                value = this.state.password
            } else if (this.state.showRePassword) {
                value = this.state.rePassword
            }

            formpart = 
            <RegisterForm 
                submitPartForm={this.submitPartForm}
                showPreviousFormPart={this.showPreviousFormPart}
                type={this.state.formType}
                value={value}
                placeholder={this.state.formPlaceholder}
                changed={this.inputFieldChanged}
                label={this.state.formLabel}
                labelSpan={this.state.labelSpan}
                valueCount={this.state.valueCount}
                hasValueCount={this.state.hasValueCount}
                fillError={this.state.fillError}
                valid={this.state.valid}
                hasPrevious={this.state.hasPrevious}
                sideEffectLoading={this.state.loading}
                sideEffectSuccess={this.state.success}
                sideEffectFail={this.state.fail}
            />
        } /* else if (this.state.showEmail) {
            formpart = 
            <RegisterForm 
                submitPartForm={this.submitPartForm}
                showPreviousFormPart={this.showPreviousFormPart}
                type={this.state.formType}
                value={this.state.email}
                placeholder={this.state.formPlaceholder}
                changed={this.inputFieldChanged}
                label={this.state.formLabel}
                labelSpan={this.state.labelSpan}
                valueCount={this.state.valueCount}

                fillError={this.state.fillError}
                valid={this.state.valid}
                hasPrevious={this.state.hasPrevious}

                sideEffectLoading={this.state.loading}
                sideEffectSuccess={this.state.success}
                sideEffectFail={this.state.fail}
            />
        } */

        return(
            <div className={classes.register}>
                <div className={classes.header}>
                    <Header goBack={this.goBackSelected}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                        <path opacity=".8" fill="#D3FF78" d="M931.174 68.385c-1.48 6.44.813 12.352 2.924 18.333 2.882 8.453 5.641 17.011 9.844 24.926 5.427 10.517 18.882 28.513 32.141 16.581 12.672-11.401-1.531-28.572-9.962-37.266-6.083-6.271-12.995-11.637-19.65-17.272-1.729-1.46-13.966-10.776-15.297-5.302z"/>
                        <path fill="#5A24B3" d="M973.531 111.306c7.006 9.129-7.155 19.995-14.159 10.863-7.007-9.13 7.153-19.994 14.159-10.863z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M928.43 167.128l1.975 4.872"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M928.106 161.653l.324 5.475"/>
                        <path fill="#78B300" d="M921.171 95.041c-1.354 0-.706 8.213-.51 9.035.578 2.744 4.274 5.216 5.863 1.673 1.355 0 .706-8.213.512-9.035-.578-2.743-4.274-5.216-5.865-1.673 0 0 .284-.634 0 0z"/>
                        <path fill="#ACFF00" d="M922.677 95.041c-.404 2.409-.455 4.884-.343 7.32.017.364 1.886 7.45 2.685 3.388 1.04-1.157.408-5.914.343-7.32-.015-.364-1.883-7.45-2.685-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M923.849 108.779l3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M923.849 108.779l3.769 23.797"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M928.106 135.661v24.094"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M928.106 135.661v24.094"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M909.751 148.266l-2.713 4.504"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M910.926 142.909l-1.175 5.357"/>
                        <path fill="#78B300" d="M920.727 77.613c-1.354 0-.706 8.213-.512 9.036.578 2.743 4.275 5.216 5.866 1.673 1.352 0 .705-8.213.511-9.035-.579-2.744-4.275-5.216-5.865-1.674 0 0 .284-.633 0 0z"/>
                        <path fill="#ACFF00" d="M922.232 77.613c-.405 2.409-.455 4.885-.344 7.321.018.364 1.885 7.45 2.686 3.388 1.04-1.157.408-5.914.343-7.32-.017-.364-1.885-7.451-2.685-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M923.403 91.352l-7.445 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M923.403 91.352l-7.445 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M914.992 117.237l-3.767 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M914.992 117.237l-3.767 23.797"/>
                        <path fill="#78B300" d="M888.309 91.674c-2.789 3.406-4.134 7.308-4.181 11.623-.285 9.434 3.182.261 3.835-3.503l-.101.38c.346-.847 2.659-11.168.447-8.5-.449.547.184-.223 0 0z"/>
                        <path fill="#78B300" d="M919.935 42.286c-1.16 1.846-2.023 3.872-2.826 5.893l.231-.55c-1.885 3.321-3.583 6.713-5.191 10.176-1.002 2.158-2.393 7.105-.675 9.154 3.867 4.612 7.117-3.652 8.154-6.261l-.231.551a128.314 128.314 0 004.91-9.567c.828-1.783 1.191-3.779 1.509-5.71.54-3.3-3.074-8.143-5.881-3.686-.593.941.638-1.014 0 0z"/>
                        <path fill="#ACFF00" d="M921.456 42.797c-.93 1.96-1.669 3.997-2.445 6.02l.116-.275c-2.336 4.333-4.83 8.584-6.114 13.356-.284 1.055-1.759 6.599 1.537 4.931 1.724-.873 2.533-5.095 3.175-6.77l-.115.275c1.785-3.312 3.885-6.713 5.21-10.239.603-2.081 1.243-4.152 1.683-6.276.383-1.854-2.261-2.674-3.047-1.022-.466.983.313-.658 0 0z"/>
                        <path fill="#78B300" d="M910.141 65.963c-8.219 3.005-14.514 8.406-18.967 15.861l.732-.784c-3.68 4.35-7.934 15.729 2.516 12.333 6.291-2.453 10.017-7.045 13.504-12.652l-.822.861c2.518-2.743 4.88-5.654 6.874-8.803 1.889-2.982.969-8.55-3.837-6.816-1.048.383.985-.356 0 0z"/>
                        <path fill="#ACFF00" d="M910.894 66.83c-7.905 4.035-13.348 8.845-18.141 16.235l.497-.533c-1.727 1.879-5.593 5.587-5.356 8.392.432 5.086 7.435.383 9.279-.854 3.889-2.606 6.6-6.747 9.174-10.59l-.557.585c2.431-2.535 4.843-5.082 7.001-7.858 1.387-1.784 2.428-7.575-1.897-5.377-1.917.977.796-.406 0 0z"/>
                        <path fill="#78B300" d="M923.243 76.517c-2.116 6.617-3.049 13.599-4.766 20.33-1.938 7.77-3.969 15.546-4.271 23.592-.599 9.874 6.703 30.169 20.507 22.363 12.201-6.898 7.946-29.396 5.8-40.151-1.437-7.711-2.251-15.814-4.338-23.373-1.522-5.944-10.165-11.316-12.932-2.761z"/>
                        <path fill="#ACFF00" d="M924.749 76.517c-3.021 13.77-6.564 28.424-7.368 42.498-.35 6.096-.219 12.031 2.8 17.537 2.833 5.167 9.362 10.265 14.703 4.674 8.548-8.923 5.064-27.812 3.188-38.576-1.192-7.287-2.063-14.657-3.386-21.917-.326-1.787-.518-4.166-1.539-5.754-2.175-3.382-7.548-2.426-8.398 1.538z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M923.083 85.401c.477 5.418 6.131 11.801 11.361 6.389m-13.287 3.726c.592 7.71 8.769 14.991 15.162 7.282m-17.087 2.837c.622 9.419 11.374 18.44 18.575 8.572m-20.498 1.544c.547 10.146 11.927 21.384 20.847 11.292"/>
                        <path fill="#78B300" d="M925.696 28.33c-2.037 4.152-3.237 8.681-4.265 13.168-1.406 6.138.426 13.539.982 19.773.307 3.411.271 27.502 10.263 19.248 2.987-2.468 2.043-8.171 2.121-11.53.24-7.02.477-14.04.725-21.059.169-5.766-.069-10.79-1.673-16.438-.962-3.389-5.553-9.168-8.153-3.162z"/>
                        <path fill="#ACFF00" d="M926.588 28.33c-4.28 11.693-3.137 22.872-2.321 35.021.279 4.157-.106 9.139.982 13.167 1.186 4.389 7.926 5.626 8.032 0 .801-3.055.114-7.277.163-10.408.107-6.793.124-13.593.364-20.382.179-5.066-.724-10.326-1.504-15.326-.447-2.883-4.312-6.866-5.716-2.072z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M929.229 25.3v2.677"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M932.125 167.128L934.1 172"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M931.801 161.653l.324 5.475"/>
                        <path fill="#78B300" d="M924.867 95.041c-1.354 0-.706 8.213-.512 9.035.58 2.744 4.275 5.216 5.866 1.673 1.354 0 .706-8.213.511-9.035-.578-2.743-4.274-5.216-5.865-1.673 0 0 .284-.634 0 0z"/>
                        <path fill="#ACFF00" d="M926.374 95.041c-.404 2.409-.456 4.884-.344 7.32.017.364 1.884 7.45 2.686 3.388 1.039-1.157.408-5.914.343-7.32-.017-.364-1.885-7.45-2.685-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M927.545 108.779l3.767 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M927.545 108.779l3.767 23.797"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M931.801 135.661v24.094"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M931.801 135.661v24.094"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M914.337 148.266l-2.714 4.504"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M915.512 142.909l-1.175 5.357"/>
                        <path fill="#78B300" d="M925.312 77.613c-1.354 0-.707 8.213-.512 9.036.578 2.743 4.274 5.216 5.865 1.673 1.353 0 .705-8.213.511-9.035-.578-2.744-4.274-5.216-5.864-1.674 0 0 .285-.633 0 0z"/>
                        <path fill="#ACFF00" d="M926.817 77.613c-.403 2.409-.455 4.885-.343 7.321.017.364 1.884 7.45 2.686 3.388 1.04-1.157.408-5.914.342-7.32-.016-.364-1.884-7.451-2.685-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M927.989 91.352l-7.446 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M927.989 91.352l-7.446 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M919.578 117.237l-3.77 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M919.578 117.237l-3.77 23.797"/>
                        <path fill="#78B300" d="M919.188 98.473c-4.282-1.013-8.38-.512-12.278 1.338-8.604 3.879 1.159 2.975 4.83 1.911l-.388.075c.915-.06 11.206-2.504 7.836-3.324-.687-.163.284.069 0 0z"/>
                        <path fill="#78B300" d="M930.919 41.264c-.458 2.132-.576 4.331-.639 6.504l.028-.595c-.636 3.764-1.074 7.533-1.398 11.337-.202 2.373.179 7.494 2.496 8.833 5.211 3.011 5.44-5.865 5.524-8.672l-.031.596c.607-3.542 1.035-7.09 1.342-10.669.169-1.959-.172-3.959-.534-5.882-.621-3.287-5.674-6.599-6.788-1.452-.232 1.087.253-1.172 0 0z"/>
                        <path fill="#ACFF00" d="M932.525 41.224c-.205 2.159-.202 4.326-.239 6.493l.016-.298c-.714 4.872-1.604 9.718-1.179 14.641.093 1.088.603 6.804 3.129 4.109 1.322-1.41.641-5.656.671-7.448l-.016.297c.546-3.722 1.354-7.636 1.394-11.402-.144-2.163-.252-4.327-.564-6.473-.274-1.874-3.04-1.742-3.212.081-.103 1.084.069-.725 0 0z"/>
                        <path fill="#78B300" d="M929.812 66.862c-6.696 5.637-10.761 12.863-12.398 21.393l.422-.988c-1.968 5.341-2.074 17.503 6.581 10.729 5.072-4.459 7.003-10.046 8.362-16.508l-.478 1.091c1.428-3.438 2.651-6.982 3.447-10.622.758-3.45-2.012-8.368-5.936-5.095-.853.719.806-.67 0 0z"/>
                        <path fill="#ACFF00" d="M930.817 67.42c-6.046 6.494-9.519 12.877-11.494 21.459l.285-.669c-.98 2.356-3.345 7.163-2.161 9.716 2.143 4.633 7.115-2.182 8.427-3.975 2.761-3.779 3.895-8.598 4.997-13.089l-.323.74c1.418-3.213 2.813-6.431 3.893-9.778.692-2.151-.311-7.949-3.624-4.404-1.466 1.574.611-.654 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M921.012 24.083c5.81 2.87 7.997-7.369 3.424-9.128"/>
                        <path fill="#78B300" d="M926.734 19.625c0-6.456-8.251-6.106-8.251 0 0 6.107 8.251 6.456 8.251 0z"/>
                        <path fill="#5A24B3" d="M921.57 19.625c0 1.73-2.678 1.73-2.678 0 .001-1.73 2.678-1.73 2.678 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M923.394 18.73c0-2.013-2.678-1.793-2.678 0s2.678 2.013 2.678 0z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M929.113 12.49c2.402-3.384 3.174-6.37 2.646-10.49"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M931.649 12.49c2.403-3.383 3.177-6.37 2.647-10.49"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M924.016 14.824c-1.657 2.019-2.242 6.072-3.251 8.622"/>
                        <path fill="#78B300" d="M931.744 32.072c4.121-.791 8.996-12.215 7.449-15.921-2.053-4.916-12.533-5.128-15.422-1.005-1.74 2.482-3.299 8.272-4.067 11.348-.367 1.459-1.017 5.493 1.495 5.655 3.076.199 7.516.505 10.545-.077.906-.174-1.21.233 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M936.843 24.538c-4.452 0-5.225-8.116-1.413-9.583"/>
                        <path fill="#78B300" d="M933.131 19.625c0-6.456 8.25-6.106 8.25 0s-8.25 6.456-8.25 0z"/>
                        <path fill="#5A24B3" d="M938.295 19.625c0 1.73 2.677 1.73 2.677 0s-2.677-1.73-2.677 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M936.471 18.73c0-2.013 2.677-1.793 2.677 0s-2.677 2.013-2.677 0z"/>
                        <path fill="#ACFF00" d="M921.989 30.392c3.184.036 12.048 1.381 12.232-3.693.628-1.125-1.773-3.292-2.186-4.173-1.328-2.837 1.176-5.316.605-7.381.923-1.548-5.21-.438-5.836-.203-2.524.951-2.6 4.653-3.473 6.864-.328.949-3.484 8.561-1.342 8.586z"/>
                        <path opacity=".8" fill="#D3FF78" d="M931.519 68.73c.926 6.544 5.188 11.238 9.299 16.068 5.721 6.858 11.362 13.859 18.122 19.743 8.835 7.873 27.847 19.853 35.949 3.962 7.743-15.186-11.67-26.125-22.655-31.221-7.927-3.676-16.301-6.208-24.535-9.084-2.134-.745-16.9-5.054-16.18.532z"/>
                        <path fill="#5A24B3" d="M975.954 108.881c9.131 7.004 19.995-7.155 10.864-14.159-9.128-7.006-19.994 7.152-10.864 14.159 3.91 3-3.909-3 0 0z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                        <g fill="#5A24B3">
                            <path d="M522.026 101.597h-5.192V85.493h14.959a2.554 2.554 0 002.552-2.552V73.35a2.554 2.554 0 00-2.552-2.552h-14.959c-1.408 0-2.64 1.144-2.64 2.552v43.031H498.09V73.35c0-10.296 8.448-18.655 18.744-18.655h14.432c10.295 0 19.184 8.359 19.184 18.655v9.592c0 5.016-2.024 8.888-6.424 11.439 3.608 1.056 4.664 4.224 5.28 7.568l2.288 14.432h-17.423l-2.464-13.2c-.352-.968-1.056-1.496-2.112-1.584h-7.569z"/>
                            <path d="M577.025 116.38c-10.296 0-18.656-8.36-18.656-18.655V73.35c0-10.296 8.36-18.655 18.656-18.655h25.079v16.103h-25.079a2.554 2.554 0 00-2.552 2.552v4.136h27.631V93.59h-27.631v4.136a2.554 2.554 0 002.552 2.552h25.079v16.104h-25.079z"/>
                            <path d="M628.681 116.38c-10.296 0-18.744-8.36-18.744-18.655V73.438c0-10.295 8.448-18.655 18.744-18.655h30.711v16.103h-30.711c-1.408 0-2.64 1.144-2.64 2.552v24.288c0 1.408 1.232 2.552 2.64 2.552h14.607V86.021h16.104v30.359h-30.711z"/>
                            <path d="M683.592 54.782v61.598h-16.104V54.782h16.104z"/>
                            <path d="M732.782 54.694v16.103h-13.551c-1.761 0-2.904 1.584-2.376 3.256l6.951 22.175c3.521 11.439-6.512 20.151-17.423 20.151H691.16v-16.104h13.64c1.848 0 2.903-1.584 2.376-3.256l-6.864-22.175c-3.519-11.528 6.424-20.151 17.424-20.151h15.046z"/>
                            <path d="M740.176 70.358V54.782h42.415v15.576H769.48v46.022h-16.104V70.358h-13.2z"/>
                            <path d="M808.639 116.38c-10.295 0-18.655-8.36-18.655-18.655V73.35c0-10.296 8.36-18.655 18.655-18.655h25.08v16.103h-25.08a2.554 2.554 0 00-2.552 2.552v4.136h27.632V93.59h-27.632v4.136a2.554 2.554 0 002.552 2.552h25.08v16.104h-25.08z"/>
                            <path d="M865.486 101.597h-5.192V85.493h14.96a2.554 2.554 0 002.552-2.552V73.35a2.554 2.554 0 00-2.552-2.552h-14.96c-1.407 0-2.64 1.144-2.64 2.552v43.031H841.55V73.35c0-10.296 8.448-18.655 18.743-18.655h14.432c10.296 0 19.184 8.359 19.184 18.655v9.592c0 5.016-2.023 8.888-6.424 11.439 3.608 1.056 4.664 4.224 5.28 7.568l2.288 14.432H877.63l-2.464-13.2c-.352-.968-1.056-1.496-2.112-1.584h-7.568z"/>
                        </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                        <path opacity=".8" fill="#D3FF78" d="M453.983 68.385c1.48 6.44-.813 12.352-2.923 18.333-2.883 8.453-5.641 17.011-9.844 24.926-5.427 10.517-18.882 28.513-32.142 16.581-12.671-11.401 1.533-28.572 9.963-37.266 6.083-6.271 12.995-11.637 19.649-17.272 1.729-1.46 13.967-10.776 15.297-5.302z"/>
                        <path fill="#5A24B3" d="M411.627 111.306c-7.006 9.129 7.155 19.995 14.16 10.863 7.006-9.13-7.154-19.994-14.16-10.863z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M456.728 167.128L454.753 172"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M457.052 161.653l-.324 5.475"/>
                        <path fill="#78B300" d="M463.986 95.041c1.354 0 .706 8.213.511 9.035-.579 2.744-4.275 5.216-5.866 1.673-1.353 0-.706-8.213-.511-9.035.58-2.743 4.275-5.216 5.866-1.673 0 0-.284-.634 0 0z"/>
                        <path fill="#ACFF00" d="M462.48 95.041c.404 2.409.456 4.884.343 7.32-.017.364-1.884 7.45-2.685 3.388-1.04-1.157-.408-5.914-.343-7.32.017-.364 1.885-7.45 2.685-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M461.309 108.779l-3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M461.309 108.779l-3.769 23.797"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M457.052 135.661v24.094"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M457.052 135.661v24.094"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M475.407 148.266l2.712 4.504"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M474.231 142.909l1.176 5.357"/>
                        <path fill="#78B300" d="M464.432 77.613c1.354 0 .706 8.213.511 9.036-.578 2.743-4.274 5.216-5.865 1.673-1.354 0-.706-8.213-.511-9.035.578-2.744 4.274-5.216 5.865-1.674 0 0-.285-.633 0 0z"/>
                        <path fill="#ACFF00" d="M462.926 77.613c.404 2.409.456 4.885.343 7.321-.017.364-1.885 7.45-2.686 3.388-1.04-1.157-.407-5.914-.342-7.32.016-.364 1.884-7.451 2.685-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M461.755 91.352l7.444 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M461.755 91.352l7.444 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M470.165 117.237l3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M470.165 117.237l3.769 23.797"/>
                        <path fill="#78B300" d="M496.85 91.674c2.788 3.406 4.134 7.308 4.181 11.623.285 9.434-3.182.261-3.836-3.503l.102.38c-.348-.847-2.66-11.168-.447-8.5.448.547-.185-.223 0 0z"/>
                        <path fill="#78B300" d="M465.224 42.286c1.159 1.846 2.023 3.872 2.826 5.893l-.231-.55c1.884 3.321 3.583 6.713 5.191 10.176 1.002 2.158 2.393 7.105.675 9.154-3.868 4.612-7.118-3.652-8.155-6.261l.231.551a128.303 128.303 0 01-4.909-9.567c-.829-1.783-1.192-3.779-1.509-5.71-.542-3.3 3.071-8.143 5.881-3.686.59.941-.64-1.014 0 0z"/>
                        <path fill="#ACFF00" d="M463.701 42.797c.931 1.96 1.67 3.997 2.445 6.02l-.116-.275c2.336 4.333 4.831 8.584 6.115 13.356.285 1.055 1.759 6.599-1.537 4.931-1.724-.873-2.534-5.095-3.176-6.77l.116.275c-1.785-3.312-3.884-6.713-5.209-10.239-.603-2.081-1.243-4.152-1.684-6.276-.383-1.854 2.26-2.674 3.046-1.022.467.983-.313-.658 0 0z"/>
                        <path fill="#78B300" d="M475.017 65.963c8.22 3.005 14.515 8.406 18.968 15.861l-.733-.784c3.68 4.35 7.934 15.729-2.515 12.333-6.29-2.453-10.017-7.045-13.504-12.652l.822.861c-2.516-2.743-4.879-5.654-6.873-8.803-1.891-2.982-.971-8.55 3.835-6.816 1.048.383-.986-.356 0 0z"/>
                        <path fill="#ACFF00" d="M474.265 66.83c7.903 4.035 13.347 8.845 18.14 16.235l-.498-.533c1.728 1.879 5.593 5.587 5.356 8.392-.431 5.086-7.434.383-9.279-.854-3.888-2.606-6.601-6.747-9.174-10.59l.557.585c-2.431-2.535-4.842-5.082-7-7.858-1.387-1.784-2.428-7.575 1.898-5.377 1.915.977-.797-.406 0 0z"/>
                        <path fill="#78B300" d="M461.915 76.517c2.115 6.617 3.048 13.599 4.764 20.33 1.939 7.77 3.97 15.546 4.272 23.592.599 9.874-6.702 30.169-20.507 22.363-12.201-6.898-7.946-29.396-5.8-40.151 1.436-7.711 2.251-15.814 4.339-23.373 1.521-5.944 10.166-11.316 12.932-2.761z"/>
                        <path fill="#ACFF00" d="M460.409 76.517c3.02 13.77 6.564 28.424 7.369 42.498.349 6.096.218 12.031-2.8 17.537-2.834 5.167-9.363 10.265-14.704 4.674-8.547-8.923-5.064-27.812-3.187-38.576 1.192-7.287 2.064-14.657 3.386-21.917.325-1.787.517-4.166 1.538-5.754 2.175-3.382 7.549-2.426 8.398 1.538z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M450.713 91.79c5.23 5.412 10.884-.971 11.362-6.389m-13.237 17.397c6.393 7.709 14.57.428 15.163-7.282m-16.652 18.69c7.203 9.868 17.955.847 18.576-8.572m-18.922 21.409c8.92 10.092 20.299-1.147 20.847-11.292"/>
                        <path fill="#78B300" d="M459.461 28.33c2.037 4.152 3.237 8.681 4.265 13.168 1.407 6.138-.425 13.539-.982 19.773-.305 3.411-.27 27.502-10.261 19.248-2.987-2.468-2.043-8.171-2.122-11.53-.239-7.02-.477-14.04-.724-21.059-.169-5.766.07-10.79 1.673-16.438.961-3.389 5.552-9.168 8.151-3.162z"/>
                        <path fill="#ACFF00" d="M458.569 28.33c4.281 11.693 3.137 22.872 2.322 35.021-.279 4.157.106 9.139-.983 13.167-1.186 4.389-7.925 5.626-8.031 0-.801-3.055-.115-7.277-.164-10.408-.107-6.793-.124-13.593-.364-20.382-.179-5.066.723-10.326 1.504-15.326.447-2.883 4.312-6.866 5.716-2.072z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" d="M455.93 25.3v2.677"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M453.033 167.128L451.058 172"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M453.357 161.653l-.324 5.475"/>
                        <path fill="#78B300" d="M460.291 95.041c1.353 0 .705 8.213.511 9.035-.579 2.744-4.275 5.216-5.865 1.673-1.353 0-.706-8.213-.511-9.035.578-2.743 4.274-5.216 5.865-1.673 0 0-.285-.634 0 0z"/>
                        <path fill="#ACFF00" d="M458.785 95.041c.405 2.409.455 4.884.343 7.32-.017.364-1.885 7.45-2.685 3.388-1.04-1.157-.408-5.914-.343-7.32.016-.364 1.884-7.45 2.685-3.388z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M457.613 108.779l-3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M457.613 108.779l-3.769 23.797"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M453.357 135.661v24.094"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M453.357 135.661v24.094"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M470.821 148.266l2.713 4.504"/>
                        <path fill="none" stroke="#78B300" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M469.645 142.909l1.176 5.357"/>
                        <path fill="#78B300" d="M459.846 77.613c1.354 0 .706 8.213.511 9.036-.578 2.743-4.274 5.216-5.865 1.673-1.354 0-.706-8.213-.511-9.035.579-2.744 4.274-5.216 5.865-1.674 0 0-.284-.633 0 0z"/>
                        <path fill="#ACFF00" d="M458.34 77.613c.405 2.409.456 4.885.343 7.321-.017.364-1.884 7.45-2.685 3.388-1.04-1.157-.408-5.914-.343-7.32.016-.364 1.885-7.451 2.685-3.389z"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M457.169 91.352l7.446 22.915"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M457.169 91.352l7.446 22.915"/>
                        <path fill="none" stroke="#78B300" strokeWidth="4.5" strokeLinecap="round" strokeMiterlimit="10" d="M465.58 117.237l3.769 23.797"/>
                        <path fill="none" stroke="#ACFF00" strokeWidth="2" strokeLinecap="round" strokeMiterlimit="10" d="M465.58 117.237l3.769 23.797"/>
                        <path fill="#78B300" d="M484.579 92.033c4.394-.253 8.342.951 11.861 3.45 7.799 5.314-1.66 2.729-5.088 1.044l.368.141c-.891-.217-10.6-4.413-7.141-4.635.706-.041-.289.019 0 0z"/>
                        <path fill="#78B300" d="M453.99 42.286c1.158 1.847 2.022 3.872 2.825 5.893l-.231-.55c1.884 3.321 3.586 6.711 5.191 10.176 1.001 2.16 2.396 7.103.676 9.153-3.867 4.612-7.118-3.65-8.156-6.26l.232.55a128.303 128.303 0 01-4.909-9.567c-.828-1.783-1.192-3.779-1.508-5.71-.543-3.3 3.072-8.141 5.88-3.685.591.942-.639-1.014 0 0z"/>
                        <path fill="#ACFF00" d="M452.467 42.797c.931 1.96 1.669 3.996 2.445 6.02l-.116-.275c2.337 4.333 4.831 8.584 6.116 13.355.285 1.055 1.76 6.6-1.536 4.931-1.724-.873-2.535-5.095-3.177-6.769l.115.275c-1.785-3.312-3.884-6.713-5.209-10.239-.603-2.081-1.243-4.151-1.683-6.275-.384-1.855 2.259-2.676 3.045-1.023.467.984-.312-.658 0 0z"/>
                        <path fill="#78B300" d="M463.784 65.963c8.22 3.006 14.512 8.406 18.967 15.861l-.733-.784c3.675 4.347 7.934 15.738-2.516 12.333-6.291-2.455-10.016-7.045-13.504-12.652l.822.862c-2.516-2.743-4.879-5.654-6.872-8.803-1.89-2.983-.97-8.551 3.836-6.817 1.049.383-.985-.356 0 0z"/>
                        <path fill="#ACFF00" d="M463.032 66.83c7.902 4.035 13.348 8.845 18.139 16.235l-.498-.533c1.728 1.88 5.593 5.587 5.355 8.392-.431 5.086-7.434.383-9.279-.854-3.887-2.606-6.601-6.747-9.173-10.59l.557.585c-2.431-2.535-4.842-5.082-7.001-7.858-1.384-1.784-2.426-7.575 1.9-5.377 1.915.977-.798-.406 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M464.145 24.083c-5.808 2.87-7.996-7.369-3.422-9.128"/>
                        <path fill="#78B300" d="M458.423 19.625c0-6.456 8.252-6.106 8.252 0 0 6.107-8.252 6.456-8.252 0z"/>
                        <path fill="#5A24B3" d="M463.588 19.625c0 1.73 2.677 1.73 2.677 0 .001-1.73-2.677-1.73-2.677 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M461.765 18.73c0-2.013 2.677-1.793 2.677 0-.001 1.793-2.677 2.013-2.677 0z"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M456.045 12.49c-2.403-3.384-3.175-6.37-2.647-10.49"/>
                        <path fill="none" stroke="#78B300" strokeLinecap="round" strokeMiterlimit="10" d="M453.508 12.49c-2.403-3.383-3.176-6.37-2.646-10.49"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M461.142 14.824c1.658 2.019 2.243 6.072 3.251 8.622"/>
                        <path fill="#78B300" d="M453.413 32.072c-4.121-.791-8.996-12.215-7.449-15.921 2.053-4.916 12.533-5.128 15.422-1.005 1.739 2.482 3.298 8.272 4.068 11.348.365 1.459 1.016 5.493-1.496 5.655-3.076.199-7.514.505-10.545-.077-.905-.174 1.211.233 0 0z"/>
                        <path fill="none" stroke="#ACFF00" strokeLinecap="round" strokeMiterlimit="10" d="M448.314 24.538c4.453 0 5.226-8.116 1.413-9.583"/>
                        <path fill="#78B300" d="M452.028 19.625c0-6.456-8.252-6.106-8.252 0-.001 6.106 8.252 6.456 8.252 0z"/>
                        <path fill="#5A24B3" d="M446.863 19.625c0 1.73-2.677 1.73-2.677 0-.001-1.73 2.677-1.73 2.677 0z"/>
                        <path opacity=".5" fill="#D3FF78" d="M448.687 18.73c0-2.013-2.677-1.793-2.677 0s2.677 2.013 2.677 0z"/>
                        <path fill="#ACFF00" d="M463.169 30.392c-3.184.036-12.049 1.381-12.233-3.693-.627-1.125 1.775-3.292 2.188-4.173 1.327-2.837-1.176-5.316-.606-7.381-.922-1.548 5.21-.438 5.835-.203 2.525.951 2.6 4.653 3.474 6.864.328.949 3.483 8.561 1.342 8.586z"/>
                        <path opacity=".8" fill="#D3FF78" d="M453.638 68.73c-.925 6.544-5.187 11.238-9.299 16.068-5.72 6.858-11.362 13.859-18.122 19.743-8.836 7.873-27.847 19.853-35.949 3.962-7.743-15.186 11.67-26.125 22.655-31.221 7.926-3.676 16.302-6.208 24.535-9.084 2.136-.745 16.901-5.054 16.18.532z"/>
                        <path fill="#5A24B3" d="M409.203 108.881c-9.131 7.004-19.996-7.155-10.864-14.159 9.13-7.006 19.995 7.152 10.864 14.159-3.91 3 3.911-3 0 0z"/>
                        </svg>
                    </Header>
                </div>
                <div className={classes.formsWrapper}>
                    <div className={classes.form}>
                        {this.state.showForm ? formpart : null}
                        {this.state.showDialogue ? "Dialogue" : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userSelectedAvatar: "Monica",

        checkUsernameLoading: false,
        checkUsernameSuccess: false,
        checkUsernameFail: false,

        registrationLoading: false,
        registrationSuccess: false,
        registrationFail: false,
    }
}

const mapDispatchToProps = dispatch => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);