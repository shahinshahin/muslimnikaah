import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBBtn, MDBContainer } from "mdbreact";

const PanelPage = () => {
return (
<MDBContainer>
  <MDBCard style={{ width: "22rem", marginTop: "1rem" }}>
    <MDBCardHeader color="deep-orange lighten-1">Featured</MDBCardHeader>
    <MDBCardBody>
      <MDBCardTitle>Special title treatment</MDBCardTitle>
      <MDBCardText>
        With supporting text below as a natural lead-in to additional
        content.
      </MDBCardText>
      <MDBBtn color="deep-orange">go somewhere</MDBBtn>
    </MDBCardBody>
  </MDBCard>
</MDBContainer>
);
};

export default PanelPage;