
import './Contact.css';

function Contact() {
  return (
    <div className="contact=page">
    <div className="block1">
       <div className="title">
         DROP US <br></br> A LINE 
       </div>
       <div className="image-contact"></div>
       <img src="Images/contct.png" width="1343px" height="847px"  />
    </div>
    <div className="block2">
      <div className="topic">
        CONTACT US
      </div>
      <div className="paragraph">
        Qustions,sad or happy stories,<br></br>any inquary,more infomation,<br></br>or even just a quick howdly,send<br></br> us anote.We'll read every note.
      </div>
      <div className="rular">
      ─────────────────────────────────────────────────────────────────────────────────────
      </div>
      
    </div>
    <div className="block3">
      <div className="form-contact">
         <form className="contact-form">
       <div className="contact-details">
         <div className="f1">
                    <label className="lbll">Your Name</label><br/><br/>
                    <input className = 'email-txt' type="text" placeholder= '     '/><br/><br/><br/>
                    <label className="lbll">Email Address</label><br/><br/>
                    <input className = 'email-txtt' type="text" placeholder= '     '/><br/><br/><br/></div>
                    <label className="lbll">Subject</label><br/><br/>
                    <input className = 'email-txtt' type="text" placeholder= '     '/><br/><br/><br/>
                    <label className="lbll">Your message</label><br/><br/>
                    <input className = 'textbox'type="txt" placeholder='     '/><br/><br/><br/></div>
                    <div className="button">
                    <button className = 'btn-submit'>SUBMIT</button></div>
       </form>
      </div>
       
    </div>
    </div>
  );
}

export default Contact;