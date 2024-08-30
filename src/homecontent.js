import './App.css';
function HomeContent() {
    return (
        <div className="homeContent">  
           <h1>
           Let’s Connect <br/>with Your Customers <br/>in Real Time
           </h1>
           <p className='p'>
           Create styleguides to organize components,<br/>colors, text styles, and spacing tokens
           </p>
           <img src="cellfile.avif" className="cellfile" />
           <div className="register-button">
            <div style={{display:"flex",backgroundColor:"white",borderRadius:"10px",height:"80px"}}>
            <p className='register'>Register using your email address</p>
            <p className='email' style={{marginLeft:"-240px",marginTop:"50px"}}>company@company.com</p>
            <button style={{marginRight:"30px"}}>Register</button>
            </div>
           <img src='phone.jpeg'className='phone' />
           </div>
           <img src='mobile.jpeg' className='mobile'/>
        </div>
    );
}

export default HomeContent;