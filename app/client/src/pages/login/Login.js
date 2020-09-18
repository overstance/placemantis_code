import React, { Component } from 'react';
import classes from './login.module.scss';
import PageHeader from '../../components/common/header/PageHeader';
import PostAjaxDailogue from '../../components/common/dialogues/PostAjaxDialogue';
import LoginForm from './forms/LoginForm';
import {connect} from 'react-redux';
import {checkValidity} from '../../utilities/utilities';
import * as actions from '../../store/actions/index';

class Login extends Component {

    state = {
        showForm: true, 
        showDialogue: false,

        formGroup: "login",
        showUsername: true,
        showPassword: false,
        showRePassword: false,
        showEmail: false,

        formLabel: 'Enter Username',
        formType: 'text',
        formPlaceholder: 'username',
        isLastPart: false,
        fillError: null,
        valid: true,

        hasPrevious: false,
        formPartDirection: "Next",

        username: '',
        email: '',
        password: '',
        rePassword: '',
    }

    componentDidUpdate(prevProps) {

        if (this.props.sideEffectLoading) {
            this.setState({showForm: false, showDialogue: true})
        }

        if (this.props.sideEffectLoading === false && this.state.formGroup === 'login' && this.props.successMessage === "Login Successful") {
            this.props.history.push('/');
        } /* else if (this.props.sideEffectLoading === false && this.state.formGroup === 'login' && this.props.failMessage === "Login Failed") {
            this.setState({
                showForm: false, 
                showDialogue: true,
            })
        } */

        if (this.props.sideEffectLoading === false && this.state.formGroup === 'confirm' && this.props.successMessage === "User Confirmed") {
            this.setState({
                showForm: true,
                showDialogue: false,

                formGroup: "reset",
                showUsername: false,
                showPassword: true,
                showRePassword: false,
                showEmail: false,

                formLabel: 'Enter Password',
                formType: 'password',
                formPlaceholder: 'password',
                isLastPart: false,
                fillError: null,
                valid: true,

                hasPrevious: false,
                formPartDirection: "Next",

                // username: '',
                // email: '',
                password: '',
                rePassword: '',
            })
        }

        if (this.props.sideEffectLoading === false && this.state.formGroup === 'reset' && this.props.successMessage === "User Password Reset") {
            this.setState({
                showForm: true,
                showDialogue: false,

                formGroup: "reset",
                showUsername: false,
                showPassword: true,
                showRePassword: false,
                showEmail: false,

                formLabel: 'Enter Password',
                formType: 'password',
                formPlaceholder: 'password',
                isLastPart: false,
                fillError: null,
                valid: true,

                hasPrevious: false,
                formPartDirection: "Next",

                // username: '',
                // email: '',
                password: '',
                rePassword: '',
            })
        }
    }

    componentWillUnmount() {
        this.props.onResetLoginPage()
    }

    goBackSelected = () => {
        this.props.history.push('/');
    }

    forgotPassword = () => {
        this.setState({ 
            formGroup: 'confirm',
            showUsername: true,
            showPassword: false,
            showRePassword: false,
            showEmail: false,

            formLabel: 'Enter Username',
            formType: 'text',
            formPlaceholder: 'username',
            isLastPart: false,
            fillError: null,
            valid: true,

            hasPrevious: false,
            formPartDirection: "Next",

            username: '',
            email: '',
            password: '',
            rePassword: '',
        })
    }

    backToLogin = () => {
        this.setState({ 
            formGroup: 'login',
            showUsername: true,
            showPassword: false,
            showRePassword: false,
            showEmail: false,

            formLabel: 'Enter Username',
            formType: 'text',
            formPlaceholder: 'username',
            isLastPart: false,
            fillError: null,
            valid: true,

            hasPrevious: false,
            formPartDirection: "Next",

            username: '',
            email: '',
            password: '',
            rePassword: '',

        })
    }

    inputFieldChanged = (event) => {      
        if (this.state.showUsername) {
            let rules = {
                required: true
            };

            this.setState({
                ...this.state,
                username: event.target.value,
                valid: checkValidity(event.target.value, rules),
            })

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

    submitPartForm = (event) => {
        event.preventDefault();

        if (this.state.formGroup === 'login') {
            if (this.state.showUsername) {
                if (this.state.username !== '') {
                    this.setState({ 
                        showUsername: false,
                        showPassword: true,
                        showRePassword: false,
                        showEmail: false,

                        formLabel: 'Enter Password',
                        formType: 'password',
                        formPlaceholder: 'password',
                        isLastPart: true,
                        fillError: null,
                        valid: true,

                        hasPrevious: true,
                        formPartDirection: "Next"
                    })
                } else {
                    this.setState({ valid: false});
                }
            } else if (this.state.showPassword) {
                if (this.state.password !== '') {
                    this.props.onLogin(this.state.formGroup, this.state.username, this.state.email, this.state.password);
                } else {
                    this.setState({ valid: false});
                }
            }
        } else if (this.state.formGroup === 'confirm') {
            if (this.state.showUsername) {
                if (this.state.username !== '') {
                    this.setState({ 
                        showUsername: false,
                        showPassword: false,
                        showRePassword: false,
                        showEmail: true,

                        formLabel: 'Enter Email',
                        formType: 'email',
                        formPlaceholder: 'email',
                        isLastPart: true,
                        fillError: null,
                        valid: true,

                        hasPrevious: true,
                        formPartDirection: "Next"
                    })
                } else {
                    this.setState({ valid: false});
                }
            } else if (this.state.showEmail) {
                if (this.state.showEmail !== '') {
                    this.props.onLogin(this.state.formGroup, this.state.username, this.state.email, this.state.password);
                } else {
                    this.setState({ valid: false});
                }
            }
        } else if (this.state.formGroup === 'reset') {
            if (this.state.showPassword) {
                if (this.state.password !== '') {
                    this.setState({ 
                        showUsername: false,
                        showPassword: false,
                        showRePassword: true,
                        showEmail: false,

                        formLabel: 'Re-enter Password',
                        formType: 'password',
                        formPlaceholder: 're-enter password',
                        isLastPart: true,
                        fillError: null,
                        valid: true,

                        hasPrevious: true,
                        formPartDirection: "Next"
                    })
                } else {
                    this.setState({ valid: false});
                }
            } else if (this.state.showRePassword) {
                if (this.state.rePassword !== '') {
                    let isMatch = this.state.password === this.state.rePassword;

                    if (isMatch) {
                        this.props.onLogin(this.state.formGroup, this.state.username, this.state.email, this.state.password);
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
    }

    showPreviousFormPart = (event) => {
        if (this.state.formGroup === 'login') {
            if (this.state.showPassword) {
                this.setState({
                    showUsername: true,
                    showPassword: false,
                    showRePassword: false,
                    showEmail: false,

                    formLabel: 'Enter Username',
                    formType: 'text',
                    formPlaceholder: 'username',
                    isLastPart: false,
                    fillError: null,
                    valid: true,

                    hasPrevious: false,
                    formPartDirection: "Previous",
                })
            }
        } else if (this.state.formGroup === 'confirm') {
            if (this.state.showEmail) {
                this.setState({
                    showUsername: true,
                    showPassword: false,
                    showRePassword: false,
                    showEmail: false,

                    formLabel: 'Enter Username',
                    formType: 'text',
                    formPlaceholder: 'username',
                    isLastPart: false,
                    fillError: null,
                    valid: true,

                    hasPrevious: false,
                    formPartDirection: "Previous",
                })
            }
        } else if (this.state.formGroup === 'reset') {
            if (this.state.showRePassword) {
                this.setState({
                    showUsername: false,
                    showPassword: true,
                    showRePassword: false,
                    showEmail: false,

                    formLabel: 'Re-enter Password',
                    formType: 'password',
                    formPlaceholder: 're-enter password',
                    isLastPart: false,
                    fillError: null,
                    valid: true,

                    hasPrevious: false,
                    formPartDirection: "Previous",
                })
            }
        }
    }

    render() {

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

        let form =
        <LoginForm 
            submitPartForm={this.submitPartForm}
            showPreviousFormPart={this.showPreviousFormPart}
            type={this.state.formType}
            value={value}
            placeholder={this.state.formPlaceholder}
            changed={this.inputFieldChanged}
            label={this.state.formLabel}
            fillError={this.state.fillError}
            valid={this.state.valid}
            hasPrevious={this.state.hasPrevious}
            sideEffectLoading={this.props.sideEffectLoading}
            sideEffectSuccess={this.props.sideEffectSuccess}
            sideEffectFail={this.props.sideEffectFail}
            direction={this.state.formPartDirection}
            forgotPasswordClicked={this.forgotPassword}
            backToLoginClicked={this.backToLogin}
            formGroup={this.state.formGroup}
            isLastPart={this.state.isLastPart}
        />

        return (
            <div className={classes.login}>
                <div className={classes.header}>
                    {this.state.formGroup === 'login' ? 
                        <PageHeader goBack={this.goBackSelected}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                                <path opacity=".8" fill="#D3FF78" d="M873.059 68.385c-1.482 6.44.813 12.351 2.923 18.333 2.881 8.454 5.64 17.012 9.843 24.927 5.428 10.515 18.883 28.513 32.142 16.581 12.671-11.4-1.532-28.571-9.962-37.266-6.085-6.271-12.996-11.638-19.652-17.272-1.726-1.461-13.965-10.778-15.294-5.303z"/>
                                <path fill="#5A24B3" d="M915.415 111.305c7.006 9.129-7.156 19.995-14.159 10.863-7.006-9.129 7.153-19.994 14.159-10.863z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M870.315 167.129l1.974 4.871"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M869.99 161.654l.325 5.475"/>
                                <path fill="#78B300" d="M863.057 95.041c-1.355 0-.708 8.213-.511 9.035.577 2.743 4.273 5.216 5.861 1.674 1.356 0 .708-8.213.512-9.035-.576-2.744-4.274-5.216-5.862-1.674 0 0 .283-.634 0 0z"/>
                                <path fill="#ACFF00" d="M864.561 95.041c-.405 2.409-.456 4.885-.342 7.321.016.364 1.884 7.45 2.686 3.388 1.038-1.157.407-5.915.34-7.321-.014-.364-1.882-7.45-2.684-3.388z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M865.731 108.78l3.772 23.796"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M865.731 108.78l3.772 23.796"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M869.99 135.662v24.094"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M869.99 135.662v24.094"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M851.634 148.265l-2.711 4.505"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M852.809 142.908l-1.175 5.357"/>
                                <path fill="#78B300" d="M862.61 77.613c-1.352 0-.705 8.213-.511 9.035.58 2.743 4.276 5.215 5.867 1.674 1.354 0 .705-8.213.509-9.035-.577-2.744-4.273-5.215-5.865-1.674 0 0 .285-.633 0 0z"/>
                                <path fill="#ACFF00" d="M864.116 77.613c-.404 2.409-.456 4.885-.345 7.321.018.364 1.885 7.45 2.687 3.388 1.04-1.157.409-5.915.342-7.32-.016-.364-1.885-7.451-2.684-3.389z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M865.287 91.353l-7.446 22.914"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M865.287 91.353l-7.446 22.914"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M856.876 117.237l-3.767 23.797"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M856.876 117.237l-3.767 23.797"/>
                                <path fill="#78B300" d="M830.193 91.674c-2.789 3.406-4.134 7.308-4.18 11.622-.286 9.434 3.181.262 3.835-3.503l-.103.38c.347-.846 2.659-11.167.448-8.499-.449.547.186-.223 0 0z"/>
                                <path fill="#78B300" d="M861.819 42.286c-1.161 1.845-2.024 3.871-2.826 5.892l.232-.55c-1.885 3.321-3.585 6.712-5.193 10.176-1.002 2.157-2.392 7.105-.674 9.153 3.868 4.613 7.117-3.652 8.156-6.259l-.233.55c1.784-3.121 3.399-6.309 4.911-9.567.829-1.783 1.192-3.778 1.51-5.711.537-3.298-3.076-8.141-5.883-3.684-.592.941.637-1.014 0 0z"/>
                                <path fill="#ACFF00" d="M863.341 42.798c-.933 1.959-1.67 3.996-2.445 6.019l.115-.276c-2.337 4.334-4.83 8.584-6.115 13.356-.283 1.056-1.76 6.6 1.535 4.931 1.726-.872 2.535-5.096 3.177-6.769l-.115.274c1.784-3.311 3.886-6.712 5.211-10.237.602-2.082 1.241-4.152 1.682-6.277.384-1.853-2.26-2.675-3.045-1.021-.466.982.313-.66 0 0z"/>
                                <path fill="#78B300" d="M852.025 65.963c-8.219 3.005-14.517 8.405-18.968 15.861l.734-.784c-3.681 4.349-7.935 15.729 2.516 12.333 6.29-2.452 10.014-7.045 13.504-12.652l-.825.86c2.518-2.743 4.881-5.654 6.876-8.802 1.89-2.983.969-8.551-3.837-6.816-1.049.384.985-.355 0 0z"/>
                                <path fill="#ACFF00" d="M852.777 66.83c-7.904 4.034-13.346 8.845-18.14 16.234l.497-.532c-1.728 1.879-5.594 5.587-5.356 8.391.429 5.086 7.434.383 9.279-.853 3.89-2.607 6.601-6.747 9.176-10.589l-.558.585c2.432-2.535 4.842-5.082 7.001-7.859 1.387-1.784 2.425-7.575-1.899-5.377-1.915.977.799-.406 0 0z"/>
                                <path fill="#78B300" d="M865.126 76.517c-2.114 6.618-3.05 13.599-4.764 20.328-1.939 7.771-3.969 15.548-4.271 23.593-.599 9.874 6.703 30.168 20.507 22.364 12.201-6.898 7.946-29.397 5.799-40.153-1.437-7.711-2.25-15.814-4.339-23.372-1.522-5.942-10.163-11.315-12.932-2.76z"/>
                                <path fill="#ACFF00" d="M866.633 76.517c-3.022 13.77-6.563 28.424-7.368 42.498-.349 6.096-.218 12.031 2.8 17.536 2.833 5.168 9.362 10.265 14.702 4.675 8.548-8.924 5.065-27.812 3.188-38.577-1.193-7.287-2.064-14.656-3.386-21.916-.325-1.787-.519-4.166-1.541-5.755-2.172-3.38-7.545-2.425-8.395 1.539z"/>
                                <path fill="none" stroke="#78B300" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M864.968 85.4c.477 5.419 6.13 11.801 11.362 6.39m-13.288 3.725c.591 7.711 8.769 14.992 15.161 7.283m-17.088 2.837c.623 9.419 11.376 18.44 18.576 8.572m-20.497 1.544c.547 10.145 11.926 21.384 20.845 11.293"/>
                                <path fill="#78B300" d="M867.58 28.33c-2.036 4.153-3.236 8.68-4.264 13.167-1.406 6.138.423 13.54.981 19.774.307 3.412.273 27.502 10.262 19.248 2.988-2.467 2.044-8.17 2.124-11.53.238-7.019.476-14.039.723-21.058.169-5.767-.071-10.79-1.674-16.438-.961-3.39-5.552-9.17-8.152-3.163z"/>
                                <path fill="#ACFF00" d="M868.472 28.33c-4.28 11.693-3.136 22.871-2.321 35.02.278 4.158-.106 9.139.982 13.167 1.187 4.388 7.925 5.626 8.034 0 .8-3.054.113-7.276.163-10.408.105-6.793.122-13.594.363-20.383.18-5.066-.723-10.325-1.503-15.326-.449-2.88-4.314-6.863-5.718-2.07z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="4.138" strokeLinecap="round" strokeMiterlimit="10" d="M871.113 25.299v2.678"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M874.01 167.129l1.975 4.871"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M873.686 161.654l.324 5.475"/>
                                <path fill="#78B300" d="M866.75 95.041c-1.354 0-.704 8.213-.509 9.035.578 2.743 4.274 5.216 5.865 1.674 1.353 0 .706-8.213.511-9.035-.58-2.744-4.274-5.216-5.867-1.674 0 0 .287-.634 0 0z"/>
                                <path fill="#ACFF00" d="M868.257 95.041c-.402 2.409-.454 4.885-.343 7.321.017.364 1.884 7.45 2.686 3.388 1.041-1.157.409-5.915.343-7.321-.017-.364-1.886-7.45-2.686-3.388z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M869.429 108.78l3.767 23.796"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M869.429 108.78l3.767 23.796"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M873.686 135.662v24.094"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M873.686 135.662v24.094"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M856.222 148.265l-2.715 4.505"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M857.397 142.908l-1.175 5.357"/>
                                <path fill="#78B300" d="M867.197 77.613c-1.355 0-.708 8.213-.512 9.035.577 2.743 4.274 5.215 5.867 1.674 1.351 0 .703-8.213.508-9.035-.578-2.744-4.274-5.215-5.863-1.674 0 0 .283-.633 0 0z"/>
                                <path fill="#ACFF00" d="M868.703 77.613c-.405 2.409-.457 4.885-.343 7.321.017.364 1.882 7.45 2.684 3.388 1.04-1.157.408-5.915.343-7.32-.017-.364-1.884-7.451-2.684-3.389z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M869.873 91.353l-7.445 22.914"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M869.873 91.353l-7.445 22.914"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M861.461 117.237l-3.769 23.797"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M861.461 117.237l-3.769 23.797"/>
                                <path fill="#78B300" d="M861.075 98.473c-4.285-1.013-8.382-.512-12.282 1.339-8.603 3.878 1.162 2.975 4.831 1.91l-.387.075c.913-.06 11.204-2.505 7.838-3.324-.69-.163.281.069 0 0z"/>
                                <path fill="#78B300" d="M872.804 41.263c-.457 2.132-.578 4.331-.639 6.504l.03-.595c-.639 3.763-1.076 7.532-1.401 11.336-.203 2.373.18 7.495 2.496 8.833 5.214 3.011 5.441-5.866 5.526-8.673l-.031.596a127.907 127.907 0 001.341-10.668c.169-1.96-.172-3.96-.535-5.882-.62-3.285-5.674-6.597-6.787-1.451-.235 1.088.252-1.171 0 0z"/>
                                <path fill="#ACFF00" d="M874.409 41.223c-.205 2.16-.203 4.327-.238 6.494l.016-.298c-.715 4.871-1.605 9.718-1.179 14.64.091 1.089.602 6.804 3.129 4.11 1.322-1.41.639-5.656.671-7.448l-.015.297c.546-3.723 1.353-7.636 1.393-11.403-.146-2.161-.253-4.326-.564-6.473-.275-1.873-3.041-1.741-3.213.081-.102 1.084.069-.725 0 0z"/>
                                <path fill="#78B300" d="M871.697 66.863c-6.696 5.637-10.76 12.863-12.398 21.392l.422-.988c-1.967 5.341-2.075 17.503 6.581 10.73 5.071-4.461 7.004-10.046 8.363-16.51l-.478 1.091c1.427-3.436 2.651-6.982 3.447-10.622.756-3.448-2.013-8.367-5.937-5.093-.853.718.806-.671 0 0z"/>
                                <path fill="#ACFF00" d="M872.701 67.42c-6.045 6.494-9.519 12.877-11.493 21.459l.284-.67c-.981 2.357-3.344 7.163-2.161 9.717 2.143 4.634 7.115-2.182 8.426-3.975 2.763-3.778 3.897-8.598 4.997-13.089l-.324.74c1.418-3.213 2.814-6.432 3.895-9.778.69-2.15-.309-7.948-3.624-4.404-1.467 1.574.611-.653 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M862.898 24.084c5.808 2.869 7.994-7.369 3.422-9.129"/>
                                <path fill="#78B300" d="M868.619 19.626c0-6.457-8.25-6.107-8.25 0-.001 6.106 8.25 6.455 8.25 0z"/>
                                <path fill="#5A24B3" d="M863.454 19.626c0 1.73-2.677 1.73-2.677 0-.001-1.731 2.677-1.731 2.677 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M865.277 18.73c0-2.012-2.677-1.793-2.677 0 0 1.794 2.677 2.013 2.677 0z"/>
                                <path fill="none" stroke="#78B300" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M870.997 12.491c2.402-3.386 3.175-6.371 2.646-10.491"/>
                                <path fill="none" stroke="#78B300" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M873.534 12.491c2.403-3.385 3.177-6.371 2.648-10.491"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M865.9 14.824c-1.657 2.019-2.242 6.071-3.251 8.622"/>
                                <path fill="#78B300" d="M873.628 32.073c4.121-.792 8.997-12.216 7.45-15.921-2.054-4.916-12.533-5.129-15.423-1.005-1.739 2.482-3.298 8.271-4.066 11.347-.367 1.459-1.016 5.493 1.494 5.656 3.078.197 7.515.504 10.545-.077.908-.174-1.211.232 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M878.726 24.537c-4.452 0-5.222-8.116-1.411-9.582"/>
                                <path fill="#78B300" d="M875.017 19.626c0-6.457 8.249-6.107 8.249 0 0 6.106-8.249 6.455-8.249 0z"/>
                                <path fill="#5A24B3" d="M880.18 19.626c0 1.73 2.675 1.73 2.675 0 0-1.731-2.675-1.731-2.675 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M878.354 18.73c0-2.012 2.676-1.793 2.676 0 0 1.794-2.676 2.013-2.676 0z"/>
                                <path fill="#ACFF00" d="M863.874 30.391c3.182.037 12.047 1.381 12.232-3.693.628-1.124-1.773-3.291-2.188-4.172-1.327-2.838 1.176-5.316.606-7.381.923-1.548-5.208-.438-5.835-.203-2.526.951-2.601 4.653-3.474 6.863-.328.95-3.485 8.562-1.341 8.586z"/>
                                <path opacity=".8" fill="#D3FF78" d="M873.403 68.73c.927 6.544 5.187 11.238 9.298 16.069 5.722 6.857 11.364 13.859 18.122 19.742 8.837 7.873 27.847 19.852 35.951 3.963 7.742-15.186-11.67-26.125-22.657-31.221-7.925-3.676-16.301-6.208-24.534-9.085-2.133-.746-16.899-5.055-16.18.532z"/>
                                <path fill="#5A24B3" d="M917.839 108.88c9.131 7.006 19.994-7.153 10.863-14.158-9.128-7.007-19.992 7.153-10.863 14.158 3.91 3.001-3.911-2.998 0 0z"/>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                                <g fill="#5A24B2">
                                    <path d="M578.678 55.839v42.943a2.555 2.555 0 002.553 2.552h20.327v16.103H581.23c-10.296 0-18.656-8.36-18.656-18.655V55.839h16.104z"/>
                                    <path d="M660.869 98.782c0 10.295-8.359 18.655-18.655 18.655h-14.52c-10.296 0-18.655-8.36-18.655-18.655V74.494c0-10.295 8.359-18.655 18.655-18.655h14.52c10.296 0 18.655 8.36 18.655 18.655v24.288zm-16.103-24.288a2.554 2.554 0 00-2.552-2.552h-14.52a2.554 2.554 0 00-2.552 2.552v24.288a2.553 2.553 0 002.552 2.552h14.52a2.554 2.554 0 002.552-2.552V74.494z"/>
                                    <path d="M687.533 117.437c-10.295 0-18.743-8.36-18.743-18.655V74.494c0-10.295 8.448-18.655 18.743-18.655h30.712v16.103h-30.712c-1.408 0-2.64 1.144-2.64 2.552v24.288c0 1.408 1.231 2.552 2.64 2.552h14.608V87.078h16.103v30.359h-30.711z"/>
                                </g>
                                <g fill="#5A24B2">
                                    <path d="M767.788 55.839v61.598h-16.104V55.839h16.104z"/>
                                    <path d="M830.267 55.751v47.167c0 16.279-17.247 19.447-26.751 11.176-2.552-2.288-4.488-5.632-5.456-10.736-1.672-8.272-3.256-17.688-4.928-25.959l-1.408-9.943-.88.088.968 10.207v39.687h-16.103V70.007c0-16.279 17.248-19.535 26.663-11.176 2.552 2.2 4.488 5.632 5.544 10.736 1.672 8.184 3.256 17.688 4.928 25.871l1.408 10.032.792-.088-.88-11.616V55.751h16.103z"/>
                                </g>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1608 174">
                                <path opacity=".8" fill="#D3FF78" d="M518.94 68.385c1.48 6.44-.813 12.351-2.922 18.333-2.883 8.454-5.64 17.012-9.844 24.927-5.428 10.515-18.882 28.513-32.141 16.581-12.672-11.4 1.532-28.571 9.962-37.266 6.083-6.271 12.996-11.638 19.649-17.272 1.729-1.461 13.966-10.778 15.296-5.303z"/>
                                <path fill="#5A24B3" d="M476.583 111.305c-7.005 9.129 7.156 19.995 14.161 10.863 7.005-9.129-7.154-19.994-14.161-10.863z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M521.685 167.129L519.711 172"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M522.008 161.654l-.323 5.475"/>
                                <path fill="#78B300" d="M528.944 95.041c1.352 0 .705 8.213.509 9.035-.578 2.743-4.273 5.216-5.865 1.674-1.354 0-.703-8.213-.511-9.035.579-2.744 4.276-5.216 5.867-1.674 0 0-.285-.634 0 0z"/>
                                <path fill="#ACFF00" d="M527.438 95.041c.405 2.409.456 4.885.343 7.321-.017.364-1.885 7.45-2.686 3.388-1.04-1.157-.408-5.915-.343-7.321.017-.364 1.884-7.45 2.686-3.388z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M526.267 108.78l-3.77 23.796"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M526.267 108.78l-3.77 23.796"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M522.008 135.662v24.094"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M522.008 135.662v24.094"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M540.364 148.265l2.713 4.505"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M539.188 142.908l1.176 5.357"/>
                                <path fill="#78B300" d="M529.388 77.613c1.355 0 .708 8.213.512 9.035-.578 2.743-4.274 5.215-5.864 1.674-1.355 0-.708-8.213-.512-9.035.578-2.744 4.274-5.215 5.864-1.674 0 0-.283-.633 0 0z"/>
                                <path fill="#ACFF00" d="M527.882 77.613c.405 2.409.456 4.885.343 7.321-.016.364-1.884 7.45-2.684 3.388-1.041-1.157-.408-5.915-.343-7.32.017-.364 1.885-7.451 2.684-3.389z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M526.713 91.353l7.444 22.914"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M526.713 91.353l7.444 22.914"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M535.122 117.237l3.769 23.797"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M535.122 117.237l3.769 23.797"/>
                                <path fill="#78B300" d="M561.807 91.674c2.787 3.406 4.134 7.308 4.18 11.622.286 9.434-3.182.262-3.835-3.503l.101.38c-.346-.846-2.659-11.167-.446-8.499.448.547-.184-.223 0 0z"/>
                                <path fill="#78B300" d="M530.181 42.286c1.159 1.845 2.023 3.871 2.827 5.892l-.232-.55c1.885 3.321 3.582 6.712 5.192 10.176 1.003 2.157 2.393 7.105.675 9.153-3.869 4.613-7.117-3.652-8.156-6.259l.231.55c-1.78-3.121-3.396-6.309-4.909-9.567-.829-1.783-1.192-3.778-1.508-5.711-.542-3.298 3.071-8.141 5.88-3.684.591.941-.64-1.014 0 0z"/>
                                <path fill="#ACFF00" d="M528.659 42.798c.931 1.959 1.669 3.996 2.445 6.019l-.117-.276c2.337 4.334 4.831 8.584 6.115 13.356.285 1.056 1.76 6.6-1.535 4.931-1.725-.872-2.535-5.096-3.177-6.769l.115.274c-1.786-3.311-3.885-6.712-5.21-10.237-.602-2.082-1.242-4.152-1.683-6.277-.383-1.853 2.26-2.675 3.047-1.021.466.982-.313-.66 0 0z"/>
                                <path fill="#78B300" d="M539.973 65.963c8.221 3.005 14.516 8.405 18.968 15.861l-.733-.784c3.681 4.349 7.934 15.729-2.516 12.333-6.29-2.452-10.017-7.045-13.504-12.652l.822.86c-2.515-2.743-4.879-5.654-6.873-8.802-1.889-2.983-.968-8.551 3.836-6.816 1.05.384-.985-.355 0 0z"/>
                                <path fill="#ACFF00" d="M539.222 66.83c7.904 4.034 13.347 8.845 18.141 16.234l-.498-.532c1.728 1.879 5.594 5.587 5.356 8.391-.432 5.086-7.434.383-9.279-.853-3.889-2.607-6.601-6.747-9.175-10.589l.557.585c-2.43-2.535-4.841-5.082-6.999-7.859-1.388-1.784-2.429-7.575 1.897-5.377 1.916.977-.798-.406 0 0z"/>
                                <path fill="#78B300" d="M526.872 76.517c2.116 6.618 3.049 13.599 4.764 20.328 1.94 7.771 3.97 15.548 4.271 23.593.599 9.874-6.701 30.168-20.506 22.364-12.201-6.898-7.946-29.397-5.801-40.153 1.435-7.711 2.251-15.814 4.339-23.372 1.523-5.942 10.167-11.315 12.933-2.76z"/>
                                <path fill="#ACFF00" d="M525.367 76.517c3.019 13.77 6.563 28.424 7.368 42.498.349 6.096.218 12.031-2.8 17.536-2.833 5.168-9.363 10.265-14.704 4.675-8.547-8.924-5.065-27.812-3.188-38.577 1.193-7.287 2.064-14.656 3.386-21.916.326-1.787.516-4.166 1.539-5.755 2.175-3.38 7.549-2.425 8.399 1.539z"/>
                                <path fill="none" stroke="#78B300" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M515.67 91.79c5.231 5.412 10.884-.971 11.362-6.39m-13.237 17.398c6.394 7.709 14.571.428 15.162-7.283m-16.652 18.691c7.203 9.868 17.956.848 18.577-8.572m-18.923 21.41c8.921 10.091 20.3-1.148 20.848-11.293"/>
                                <path fill="#78B300" d="M524.418 28.33c2.037 4.153 3.237 8.68 4.266 13.167 1.407 6.138-.425 13.54-.982 19.774-.307 3.412-.27 27.502-10.262 19.248-2.988-2.467-2.043-8.17-2.121-11.53-.239-7.019-.479-14.039-.725-21.058-.17-5.767.069-10.79 1.673-16.438.962-3.39 5.551-9.17 8.151-3.163z"/>
                                <path fill="#ACFF00" d="M523.526 28.33c4.281 11.693 3.138 22.871 2.322 35.02-.279 4.158.107 9.139-.982 13.167-1.187 4.388-7.927 5.626-8.032 0-.801-3.054-.114-7.276-.163-10.408-.105-6.793-.124-13.594-.364-20.383-.18-5.066.723-10.325 1.504-15.326.445-2.88 4.311-6.863 5.715-2.07z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="4.138" strokeLinecap="round" strokeMiterlimit="10" d="M520.887 25.299v2.678"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M517.99 167.129L516.015 172"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M518.315 161.654l-.325 5.475"/>
                                <path fill="#78B300" d="M525.248 95.041c1.354 0 .706 8.213.511 9.035-.578 2.743-4.275 5.216-5.865 1.674-1.353 0-.706-8.213-.511-9.035.578-2.744 4.273-5.216 5.865-1.674 0 0-.285-.634 0 0z"/>
                                <path fill="#ACFF00" d="M523.742 95.041c.404 2.409.456 4.885.343 7.321-.018.364-1.884 7.45-2.685 3.388-1.041-1.157-.409-5.915-.343-7.321.016-.364 1.884-7.45 2.685-3.388z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M522.57 108.78l-3.768 23.796"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M522.57 108.78l-3.768 23.796"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M518.315 135.662v24.094"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M518.315 135.662v24.094"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M535.778 148.265l2.714 4.505"/>
                                <path fill="none" stroke="#78B300" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M534.602 142.908l1.176 5.357"/>
                                <path fill="#78B300" d="M524.803 77.613c1.355 0 .708 8.213.511 9.035-.577 2.743-4.273 5.215-5.864 1.674-1.354 0-.705-8.213-.512-9.035.579-2.744 4.275-5.215 5.865-1.674 0 0-.283-.633 0 0z"/>
                                <path fill="#ACFF00" d="M523.298 77.613c.404 2.409.455 4.885.342 7.321-.015.364-1.884 7.45-2.686 3.388-1.041-1.157-.408-5.915-.343-7.32.017-.364 1.886-7.451 2.687-3.389z"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M522.127 91.353l7.445 22.914"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M522.127 91.353l7.445 22.914"/>
                                <path fill="none" stroke="#78B300" strokeWidth="3.103" strokeLinecap="round" strokeMiterlimit="10" d="M530.536 117.237l3.77 23.797"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth="1.379" strokeLinecap="round" strokeMiterlimit="10" d="M530.536 117.237l3.77 23.797"/>
                                <path fill="#78B300" d="M549.536 92.033c4.394-.254 8.342.951 11.862 3.45 7.8 5.314-1.66 2.729-5.089 1.043l.367.143c-.891-.219-10.6-4.414-7.14-4.636.706-.041-.288.018 0 0z"/>
                                <path fill="#78B300" d="M518.948 42.286c1.156 1.846 2.02 3.872 2.825 5.893l-.232-.551c1.884 3.32 3.586 6.711 5.19 10.176 1.002 2.16 2.396 7.102.677 9.153-3.868 4.613-7.118-3.651-8.156-6.258l.231.549c-1.781-3.121-3.396-6.309-4.909-9.567-.829-1.783-1.192-3.779-1.51-5.711-.54-3.298 3.076-8.14 5.884-3.684.59.941-.64-1.014 0 0z"/>
                                <path fill="#ACFF00" d="M517.423 42.798c.931 1.959 1.67 3.996 2.445 6.019l-.115-.276c2.335 4.334 4.83 8.584 6.116 13.355.283 1.056 1.759 6.6-1.538 4.932-1.724-.871-2.534-5.096-3.177-6.769l.115.274c-1.784-3.312-3.883-6.712-5.208-10.238-.604-2.081-1.242-4.151-1.683-6.276-.382-1.853 2.26-2.676 3.045-1.021.469.983-.312-.66 0 0z"/>
                                <path fill="#78B300" d="M528.74 65.963c8.221 3.006 14.511 8.405 18.968 15.861l-.734-.783c3.676 4.346 7.935 15.738-2.516 12.332-6.29-2.454-10.016-7.044-13.503-12.652l.822.861c-2.516-2.743-4.879-5.654-6.871-8.802-1.892-2.984-.97-8.552 3.834-6.817 1.05.384-.984-.355 0 0z"/>
                                <path fill="#ACFF00" d="M527.989 66.83c7.902 4.034 13.349 8.844 18.141 16.234l-.498-.531c1.728 1.879 5.591 5.587 5.355 8.391-.43 5.086-7.433.383-9.279-.853-3.887-2.608-6.601-6.747-9.174-10.59l.56.585c-2.433-2.535-4.844-5.082-7.002-7.859-1.386-1.784-2.429-7.575 1.897-5.377 1.916.977-.798-.406 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M529.103 24.084c-5.809 2.869-7.997-7.369-3.423-9.129"/>
                                <path fill="#78B300" d="M523.38 19.626c0-6.457 8.251-6.107 8.251 0 .001 6.106-8.251 6.455-8.251 0z"/>
                                <path fill="#5A24B3" d="M528.545 19.626c0 1.73 2.677 1.73 2.677 0 0-1.731-2.677-1.731-2.677 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M526.72 18.73c0-2.012 2.679-1.793 2.679 0 0 1.794-2.679 2.013-2.679 0z"/>
                                <path fill="none" stroke="#78B300" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M521.003 12.491C518.599 9.105 517.827 6.12 518.355 2"/>
                                <path fill="none" stroke="#78B300" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M518.464 12.491C516.061 9.106 515.289 6.12 515.819 2"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M526.098 14.824c1.659 2.019 2.243 6.071 3.251 8.622"/>
                                <path fill="#78B300" d="M518.37 32.073c-4.121-.792-8.997-12.216-7.448-15.921 2.053-4.916 12.533-5.129 15.421-1.005 1.74 2.482 3.298 8.271 4.069 11.347.365 1.459 1.016 5.493-1.497 5.656-3.076.197-7.513.504-10.545-.077-.905-.174 1.21.232 0 0z"/>
                                <path fill="none" stroke="#ACFF00" strokeWidth=".69" strokeLinecap="round" strokeMiterlimit="10" d="M513.27 24.537c4.454 0 5.227-8.116 1.414-9.582"/>
                                <path fill="#78B300" d="M516.984 19.626c0-6.457-8.251-6.107-8.251 0 0 6.106 8.251 6.455 8.251 0z"/>
                                <path fill="#5A24B3" d="M511.82 19.626c0 1.73-2.677 1.73-2.677 0-.001-1.731 2.677-1.731 2.677 0z"/>
                                <path opacity=".5" fill="#D3FF78" d="M513.644 18.73c0-2.012-2.677-1.793-2.677 0 0 1.794 2.677 2.013 2.677 0z"/>
                                <path fill="#ACFF00" d="M528.126 30.391c-3.182.037-12.047 1.381-12.233-3.693-.627-1.124 1.776-3.291 2.188-4.172 1.327-2.838-1.176-5.316-.606-7.381-.922-1.548 5.21-.438 5.834-.203 2.525.951 2.601 4.653 3.475 6.863.327.95 3.484 8.562 1.342 8.586z"/>
                                <path opacity=".8" fill="#D3FF78" d="M518.595 68.73c-.926 6.544-5.187 11.238-9.298 16.069-5.721 6.857-11.362 13.859-18.121 19.742-8.837 7.873-27.849 19.852-35.95 3.963-7.744-15.186 11.669-26.125 22.654-31.221 7.927-3.676 16.301-6.208 24.534-9.085 2.136-.746 16.903-5.055 16.181.532z"/>
                                <path fill="#5A24B3" d="M474.161 108.88c-9.131 7.006-19.995-7.153-10.864-14.158 9.129-7.007 19.995 7.153 10.864 14.158-3.91 3.001 3.911-2.998 0 0z"/>
                            </svg>
                        </PageHeader>
                        :
                        null
                    }
                    {this.state.formGroup === 'confirm' ? 
                        <PageHeader goBack={this.goBackSelected}>
                            <div className={classes.headerInfo}>
                                Confirm User
                            </div>
                        </PageHeader>
                        :
                        null
                    }
                    {this.state.formGroup === 'reset' ? 
                        <PageHeader goBack={this.goBackSelected}>
                            <div className={classes.headerInfo}>
                                Reset Password
                            </div>
                        </PageHeader>
                        :
                        null
                    }
                </div>
                <div className={classes.formsWrapper}>
                    <div className={classes.form}>
                        { this.state.showForm ? 
                            form :  null
                        }
                        {this.state.showDialogue ? 
                            <PostAjaxDailogue 
                                loading={this.props.sideEffectLoading}
                                fail={this.props.sideEffectFail}
                                success={this.props.sideEffectSuccess}
                                hasSecondSuccessButton={false}
                                hasSecondFailButton={false}
                                successType1='Login'
                                successButton1Clicked={this.goToLogin}
                                successHeading={this.props.failMessage}
                                failHeading={this.props.successMessage}
                                failType1='Try Again'
                                failButton1Clicked={this.submitFormAllAgain}
                            /> 
                            : 
                            null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sideEffectLoading: state.auth.loginLoading,
        sideEffectSuccess: state.auth.loginSuccess,
        sideEffectFail: state.auth.loginFail,

        successMessage: state.auth.loginSuccessMessage,
        failMessage: state.auth.loginFailMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: (formGroup, username, email, password) => dispatch(actions.loginUser(formGroup, username, email, password)),
        onResetLoginPage: () => dispatch(actions.resetLoginPage())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);