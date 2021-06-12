import React from 'react'
import "../Deign/Contact.css"

function Contact() {
    return (
        <div>
            <div className="head">
            </div>
            <div className="body">
                <h1 id="h">Contact Us</h1>
                <div className="container">
                    <form action="">
                        <label>Name :</label> 
                        <input type="text" /> <br/>
                        <label>Email Id :</label> 
                        <input type="email" /> <br/>
                        <label>Contact No. :</label> 
                        <input type="number"/> <br/>
                        <label>Subject :</label> 
                        <input type="text"/> <br/>
                        <label>Message :</label> 
                        <textarea name="message" id="message" cols="30" rows="10" /> <br/>
                        <button type="submit" >Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
