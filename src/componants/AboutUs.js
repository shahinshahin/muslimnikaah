import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,Switch,Route,Link}from 'react-router-dom';
class AboutUs extends React.Component {
  render() {
    
    
    return  <div class="containermain">
    <div class="row">
    <div class="col-md-4">
      <div class="thumbnail">
        <h2>Practices</h2>
         <div class="caption">
         <img src={require('../componants/images/img6.jpg')} style={{width: 400, height: 400}} />
      </div>
      <div class="caption">
       
      <p>The only requirement for Muslim weddings is the signing of a marriage contract.</p>
      <p>Marriage traditions differ depending on culture, Islamic sect, and observance of gender separation rules.</p>
   
   <p>Most marriages are not held in mosques, and men and women remain separate during the ceremony and reception. </p>
   
   </div>
   </div>
   </div>
     
    <div class="col-md-4">
      <div class="thumbnail">
        <h2>Meher</h2>
          <div class="caption">
          <img src={require('../componants/images/img4.jpg')} style={{width: 400, height: 400}} />
      </div> 
      <div class="caption">
     
      <p >The marriage contract includes a meher a formal statement specifying the monetary amount the groom will give the bride.</p>
   <p>There are two parts to the meher a prompt due before the marriage is consummated and a deferred amount given to the bride throughout her life.</p>
   
    </div>
     </div>
     </div> 
    <div class="col-md-4">
      <div class="thumbnail">
       <h2>Nikah</h2>
       <div class="caption">
     
      <img src={require('../componants/images/img5.jpg')} style={{width: 400, height: 400}} />
      </div>
      <div class="caption">
      
      <p>The marriage contract is signed in a nikah ceremony, in which the groom or his representative proposes to the bride in front of at least two witnesses, stating the details of the meher.</p>
  <p>The bride and groom demonstrate their free will by repeating the word qabul ("I accept," in Arabic) three times. </p>
  </div>
     </div>
     </div> 
      </div>
      </div>
      
    
  }
}
export default AboutUs;