import { mailtrapClient, sender } from "./mailtrap.config.js";
import {PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE} from "../mailtrap/emailTemplate.js"

export const sendVerificationEmail = async (email,verificationToken)=>{
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
            category:"Email verification"
        })
        console.log("Email sent successfully", response)
    } catch (error) {
        console.error("Error sending email", error)
        throw new Error(`Error sending verification email: ${error}`)
    }
}

export const sendWelcomeEmail = async(email,name)=>{
    const recipient = [{email}];
    try {
        const response = await mailtrapClient.send({
            from:sender,
            to:recipient,
            template_uuid:"02d10a7e-90f4-4eb0-b21a-695bbac44248",
            template_variables:{
                "company_info_name": "Auth company",
                "name": name
              }
        })
        console.log("Welcome email sent successfuly", response)
    } catch (error) {
        console.log("Error sending welcome email", error);
        throw new Error(`Error sending welcome email: ${error}`)
    }
}

export const sendPasswordResetEmail = async(email,resetURL)=>{
    const recipient = [{email}]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password reset"
        })
    } catch (error) {
        console.log("Error sending password reset email", error)
        resetURL.status(400).json({success:false,message:"Server error"})

    }
}

export const sendResetSuccessEmail = async(email) =>{
    const recipient = [{email}]
    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject:"Password reset successfull",
            html:PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Reset password"
        })
        console.log("Password reset email sent successfully", response)
    } catch (error) {
        console.error("Error sending password reset email", error)
        throw new Error(`Error sending password reset success email: ${error}`)
    }
}