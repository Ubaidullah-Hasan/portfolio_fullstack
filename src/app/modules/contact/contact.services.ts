
import { transporter } from "../../utils/nodeMailerSetup";
import config from "../../config";
import { IContact } from "./contact.interface";


const sendMessage = async (payload: IContact) => {
    const { message, email, name } = payload;

    const mailOptions = {
        to: config.email_user, // Admin বা ওয়েবসাইটের ইমেইল
        from: `${name} <${email}>`,
        replyTo: email, 
        subject: `New message from ${name}`,
        html: `
            <div style={{
                display: 'flex',
                flex-derection: "column",
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',  // পুরো ভিউপোর্টের উচ্চতা জুড়ে সেন্টার করার জন্য
                backgroundColor: '#E9E0E0',  // হালকা ব্যাকগ্রাউন্ড রঙ
                fontFamily: 'Arial, sans-serif',
                textAlign: 'center',
                padding: '20px',
                borderRadius: '10px',
                border: '1px solid black',
            }}>
                <h2>Message From ${name}</h2>
                <p>
                    ${message}
                </p>
            </div>
        `
    };

    const result = await transporter.sendMail(mailOptions);

    return result;
};

export const contactServices = {
    sendMessage,
}




