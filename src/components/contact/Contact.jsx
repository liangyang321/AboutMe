import './contact.scss';
import ContactImg from "../../images/contact.png";
export default function Contact(){
    const handleSubmit = (e) =>{
        e.preventDefault();

    }
    return (
        <div className = "contact" id = "contact">
            <div className="left">
                <img src= {ContactImg} alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form action="https://formsubmit.co/liangyang321@gmail.com" method="POST">
                    <input type="email" name="email" placeholder="Your Email Address" required />
                    <input type="hidden" name="_subject" value="New email from my web" />
                    {/* <input type="hidden" name="_next" value="https://liangyang321.github.io./thanks.html" /> */}
                    <textarea type="text" name = "message" placeholder = "Your Message" required></textarea>
                    <button type = "submit">Send</button>
                </form>    
            </div>
        </div>
    )
}