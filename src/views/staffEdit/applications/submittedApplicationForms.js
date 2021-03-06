import React, { Component } from "react";
import {
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,Col
} from "reactstrap";
import moment from "moment";

const SubmittedApplicationForms = props => {
 // alert(props.abscenseHistory.length);
  return (
    
    <Card>
      {/* <CardHeader>SubmittedApplicationForms {props.applicationHistory.length}</CardHeader> */}
      
      <CardHeader> SubmittedApplicationForms{" "}<div class="pull-right">Status = {props.status=='Active' ? 'Experienced':props.status}</div> </CardHeader>

      <CardBody>

         <div className="form-row">
              
         <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b>ApplicationType</b>  
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                   <b> Info/StartDate </b>
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    <b>Info/Action</b> 
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    <b>Date Modified</b> 
                    </Col>

                    </div>
                    {props.applicationHistory.map(ap => (

<div className="form-row">
<Col sm="12" md="3" lg="3" xl="3" className="form-group">


{ap.applicationType=="Work"?<a href="#" onClick={() => props.edit(ap)}>
 {ap.applicationType} </a>  :"No Work"}

{ap.applicationType=="Work"?<a href="#" onClick={() => props.edit(ap)}>
{ap.season} </a>  :"No Season"}



</Col>
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{ap.applicationType=="Work"? ap.firstDest +  ", " + ap.secondDest + ", "  + ap.thirdDest + ", " + ap.fourthDest   :"Missing Dest. choices"}
</Col>
 <Col sm="12" md="3" lg="3" xl="3" className="form-group">
   
{ap.applicationType=="Work"? ap.firstJobTitle + ", " + ap.secondJobTitle + ", " + ap.thirdJobTitle + ", " + ap.fourtJobTitle:"Missing JobTitle choices"}
</Col> 
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
   
{ap.applicationType=="Work" ?moment(ap.dateModified).format("YYYY-MM-DD"):""}
</Col>

{/* ap.onclick = props.edit(ap.applicationType); */}
</div>

     ))}


                    {props.abscenseHistory.map(h => (

                    <div className="form-row">
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {h.applicationType?h.applicationType:"LeaveOfAbscense"}
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                    {h.absentStart?moment(h.absentStart).format("YYYY-MM-DD"):"Abscense Start Date missing"}
                    </Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
   
{h.destination ? h.destination :""}{h.jobTitle ? h.jobTitle :""}
</Col>
                    <Col sm="12" md="3" lg="3" xl="3" className="form-group">
                       
                    {moment(h.dateModified).format("YYYY-MM-DD")}
                    </Col>
                

                    </div>
        
        ))}
        

          
               {props.resignHistory.map(ap => (
              // ap.applicationType=="Resigned"?

<div className="form-row">
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{ap.applicationType?ap.applicationType:"Resigned"}
</Col>
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
{ap.appDate?moment(ap.appDate).format("YYYY-MM-DD"):"Resign Start Date missing"}
</Col>
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
   
{ap.destination ? ap.destination :""}{ap.jobTitleWhenResigned ? ap.jobTitleWhenResigned :""}
</Col>
<Col sm="12" md="3" lg="3" xl="3" className="form-group">
   
{moment(ap.dateModified).format("YYYY-MM-DD")}
</Col>


</div>

              //  :null
              ))} 
        

        {/* <ListGroup>
                    
                    {props.applicationHistory.map(h => (
                        <ListGroupItem>{h.applicationType}{'From:'+h.fromDate}{'ManagerReason:'+h.managerReason} {'Received:' + h.status}</ListGroupItem>
                    ))
                    }

                </ListGroup> */}
      </CardBody>
    </Card>
  );
};
export default SubmittedApplicationForms;
