import { NavLink } from "react-router-dom";
import RequestsHeader from "../../../../../Shared-lib/Components/Requests/Requests-header";
import PersonalInfo from "../../../../../Shared-lib/Components/Personal-info/Personal-info";
import './jopOffersView.css'
function JopOffersview(){

    const headers = ["ID" , "Name" , "Actions"];

    return (
        <>
            <div className="bg px-5">
            <RequestsHeader  titleHeader="Jop Offers" titleHeader2="Company\View\Job offers" title="Jop Offers view"  />

            

                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
                    <h1 className="sec-font-color title">Junior Accountant offer</h1>
                </div>
               
                <div className="container">
                <PersonalInfo titleHeader="Accountant Info"
                
                />
                
        
                </div>
                

            

<div className="bgSeccion p-3 mb-5">

    <h1 className="myText">Jop Offers</h1>
    <hr style={{ color: 'rgb(141, 140, 140)' }} />
     <h2 className="myText">
     Description
     </h2>
     <p className="myP">
     We’re delighted to extend this offer of employment on behalf of Our Company for ( Junior Accountant Position).
Please review the attached job offer for your anticipated employment with us, Should you find our job offer satisfactory, kindly reply back with your feedback
Please note that your onboarding and first working day will be as soon as possible,(20th October 2024) 
We are happy to have you as one of the ( Accountant) team members, and we are looking forward to the impact you will be making on the business.
Thank you and are all looking forward to meeting you and welcoming you aboard
     </p>
      <div className="lists">

      <h2 className="myText">
     The Company terms and conditions:
     </h2>
     <ul className="myUl">
 <li className="myUlLi">Contract Type: Full Time</li>
 <li className="myUlLi">Joining Date: 20th October 2024</li> 
 <li className="myUlLi">Payment system: You will receive a monthly net salary (9,000 $).</li>
  </ul> 
      </div>

   <br />
   <br />
      <div className="lists">

<h2 className="myText">
The Company terms and conditions:
</h2>
<ul className="myUl">
<li className="myUlLi">Contract Type: Full Time</li>
<li className="myUlLi">Joining Date: 20th October 2024</li> 
<li className="myUlLi">Payment system: You will receive a monthly net salary (9,000 $).</li>
</ul> 
</div>
<br />
   <br />
      <div className="lists">

<h2 className="myText">
Terms and Conditions:
</h2>
<ul className="myUl">
<li className="myUlLi">
Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.
</li>
<li className="myUlLi">
Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.
    </li> 
<li className="myUlLi">
Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.“Lorem ipsum dolor sit amet, consectetur dolorili adipiscing elit. Felis donec massa aliqua.
</li>
</ul> 
</div>

    </div>
                <hr style={{ color: 'rgb(141, 140, 140)' }} />

        
            </div>
        </>
    );
}

export default JopOffersview