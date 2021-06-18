import React,{ useState } from 'react'
import "../Deign/Contact.css"
import fire from "../fire";

function Contact() {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [contact, setcontact] = useState("")
    const [subject, setsubject] = useState("")
    const [message, setmessage] = useState("")

    function contact_handler(e){
        console.log(name,message,email,contact,subject)
        

        let messageRef = fire.database().ref('contact').orderByKey().limitToLast;
        fire.database().ref('contact').push({
            name : name,
            email : email,
            contact : contact,
            subject : subject,
            message : message,
        })
         
        // .then(()=>{alert("Your message has sent" )}).catch((error)=>{alert(error.message)})

        // fire.collection("contacts").add({
        //     name : name,
        //     email : email,
        //     contact : contact,
        //     subject : subject,
        //     message : message,
        // }).then(()=>{alert("Your message has sent" )}).catch((error)=>{alert(error.message)})
   
        setname("")
        setemail("")
        setcontact("")
        setsubject("")
        setmessage("")
    }

    return (
        <div>
            <div className="head">
            </div>
            <div className="body">
                <h1 id="h">Contact Us</h1>
                <div className="container">
                    <form>
                        <label>Name :</label>
                        <input type="text" placeholder="name" value={name} onChange={(e)=>setname(e.target.value)} /> <br />
                        
                        <label>Email Id :</label>
                        <input type="email" placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)} /> <br />
                        
                        <label>Contact No. :</label>
                        <input type="number" placeholder="mobile number" value={contact} onChange={(e)=>setcontact(e.target.value)} /> <br />
                        
                        <label>Subject :</label>
                        <input type="text" placeholder="summary of message" value={subject} onChange={(e)=>setsubject(e.target.value)} /> <br />
                        
                        <label id="message_label">Message:</label>
                        <textarea name="message" id="message_input" placeholder="if you have any query you can write here" cols="30" rows="10" 
                         value={message} onChange={(e)=>setmessage(e.target.value)} /> <br />
                       
                        <button id="button" type="submit" onClick={(e)=>{contact_handler()}}ss>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
