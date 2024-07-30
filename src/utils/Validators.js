import { emailRegexPattern, passwordRegexPattern } from "./Regex"

class validatorResult {
    constructor(status, errMessage) {
        this.status = status
        this.errMessage = errMessage
    }
}

export const validatePhone = (phone) => {
                                if(phone.length === 0){
                                    return new validatorResult(false, 'Fill your phone number.')
                                }
                                else if(phone.length !== 10) {
                                    return new validatorResult(false, 'Phone number must be 10-digit long.')
                                }
                                else{
                                    return new validatorResult(true, '')
                                }
                        }

export const validateEmail = (email) => {
                            if(email.length === 0) {
                                return new validatorResult(false, 'Fill your email-address.')
                            }
                            else if(emailRegexPattern.test(email) === false) {
                                return new validatorResult(false, 'Enter a vaild email address.')
                            }
                            else{
                                return new validatorResult(true, '')
                            }
                    }

export const validatePassword = (password) => {
    // added to bypass 
    // return true;
    return new validatorResult(true, 'done')
                            if(password.length === 0) {
                                return new validatorResult(false, 'Fill your password.')
                            }
                            else if (password.length < 8) {
                                return new validatorResult(false, 'Password is too short. Minimum length is 8 character.')
                            }
                            else if(passwordRegexPattern.test(password) === false) {
                                return new validatorResult(false, 'Password must contain one uppercase letter, one lowercase letter and a special character.')
                            }
                            else {
                                return new validatorResult(true, '')
                            }
}

export const validateOtp = (otp) => {
                            if (otp.length < 6) {
                                return new validatorResult(false, '6-digit verification code required.')
                            }
                            else {
                                return new validatorResult(true, '')
                            }
}
