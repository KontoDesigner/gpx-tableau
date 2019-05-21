import React from 'react';
import { Card, CardBody, CardHeader, Col ,Row} from 'reactstrap'
import TextInput from '../../components/textInput'
import moment from "moment";
import Select from 'react-select'
import Datetime from 'react-datetime'
const OverviewInfo = (props) => {
   
    return (

      
     
        <Card>
        

      
            <CardHeader className="card-header-work"> {props.application.season}</CardHeader>
            <CardBody className="no-padding-bottom">
                <div className="form-row">
                <Col sm="12" md="6" lg="6" xl="6" >
                <label htmlFor="preferToWork">If applicable to your job role. Indicate what type of guest you are suitable to work with</label>

                        <Select
                            //  multi={true}
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.preferWorkWinterArr}
                            multi
                            onChange={v => {
                                props.handleMultiSelect('preferToWork', v)
                             }}
               
                            value={props.application.preferToWork === '' ? null : props.application.preferToWork}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />



 

                    </Col>
 
                           {/* <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                           <label htmlFor="workPeriodStart">From</label>
            
                           <Datetime  className={'custom-datepicker'}
                            id="workPeriodStart"
                           onChange={props.assignStartChange}
                        //    defaultValue={moment(this.props.positionAssign.StaffStartDate).format('YYYY-MM-DD')}
                           value={props.selectedStartDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>
                    <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                           <label htmlFor="workPeriodEnd">To</label>
            
                           <Datetime  className={'custom-datepicker'}
                            id="workPeriodEnd"
                           onChange={props.assignEndChange}
                        //    defaultValue={moment(this.props.positionAssign.StaffStartDate).format('YYYY-MM-DD')}
                           value={props.selectedEndDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col> */}
                    <Col sm="12" md="12" lg="12" xl="12" >
                    <CardHeader className="card-header-subwork"> For season {props.application.season} I wish to work in the following destinations / positions</CardHeader>
                    <CardBody className="no-padding-bottom"></CardBody>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="Choice">Choice</label>

                 

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="firstDest">Destination</label>

                        <Select
                            //  multi={true}
                            id="firstDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            //onChange={props.handleAppField}
                            onChange={v => {
                                props.handleSelect('firstDest', v)
                             }}
                       
               
                            value={props.application.firstDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
 
                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="firstJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="firstJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('firstJobTitle', v)
                             }}
                       
               
                            value={props.application.firstJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="Choice">Choice</label>


                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="secondDest">Destination</label>

                
                <Select
                            //  multi={true}
                            id="secondDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            onChange={v => {
                                props.handleSelect('secondDest', v)
                             }}
                       
               
                            value={props.application.secondDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="secondJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="secondJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                            onChange={v => {
                                props.handleSelect('secondJobTitle', v)
                             }}
                       
               
                            value={props.application.secondJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
      
            

                <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="firstDest">Choice</label>

                 

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="thirdDest">Destination</label>

                <Select
                            //  multi={true}
                            id="thirdDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            onChange={v => {
                                props.handleSelect('thirdDest', v)
                             }}
                       
               
                            value={props.application.thirdDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="thirdJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="thirdJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('thirdJobTitle', v)
                             }}
                       
               
                            value={props.application.thirdJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="Choice">Choice</label>

                 

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="fourthDest">Destination</label>

                <Select
                            //  multi={true}
                            id="fourthDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            onChange={v => {
                                props.handleSelect('fourthDest', v)
                             }}
                       
               
                            value={props.application.fourthDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="fourthJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="fourthJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('fourthJobTitle', v)
                             }}
                       
               
                            value={props.application.fourthJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
                    </div>
              

              </CardBody>
              <CardHeader className="card-header-work"> S20 </CardHeader>
              <CardBody className="no-padding-bottom">
                <div className="form-row">

                <Col sm="12" md="6" lg="6" xl="6" >
                <label htmlFor="preferToWork">If applicable to your job role. Indicate what type of guest you are suitable to work with</label>

                        <Select
                            //  multi={true}
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.preferWorkWinterArr}
                            multi
                            onChange={v => {
                                props.handleMultiSelect('preferToWork', v)
                             }}
               
                            value={props.application.preferToWork === '' ? null : props.application.preferToWork}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />



 

                    </Col>
 
                           <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                           <label htmlFor="workPeriodStart">From</label>
            
                           <Datetime  className={'custom-datepicker'}
                            id="workPeriodStart"
                           onChange={props.assignStartChange}
                        //    defaultValue={moment(this.props.positionAssign.StaffStartDate).format('YYYY-MM-DD')}
                           value={props.selectedStartDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>
                    <Col sm="12" md="2" lg="2" xl="2" className="form-group">
                           <label htmlFor="workPeriodEnd">To</label>
            
                           <Datetime  className={'custom-datepicker'}
                            id="workPeriodEnd"
                           onChange={props.assignEndChange}
                        //    defaultValue={moment(this.props.positionAssign.StaffStartDate).format('YYYY-MM-DD')}
                           value={props.selectedEndDate}
                            timeFormat={false}
                            dateFormat="YYYY-MM-DD"
                            closeOnSelect
                            utc={true}
                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                    </Col>
                    <Col sm="12" md="12" lg="12" xl="12" >
                    <CardHeader className="card-header-subwork"> For season S20 I wish to work in the following destinations / positions</CardHeader>
                    <CardBody className="no-padding-bottom"></CardBody>
                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="Choice">Choice</label>

                 

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="firstDest">Destination</label>

                        <Select
                            //  multi={true}
                            id="firstDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            //onChange={props.handleAppField}
                            onChange={v => {
                                props.handleSelect('firstDest', v)
                             }}
                       
               
                            value={props.application.firstDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
 
                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="firstJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="firstJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('firstJobTitle', v)
                             }}
                       
               
                            value={props.application.firstJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="Choice">Choice</label>


                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="secondDest">Destination</label>

                
                <Select
                            //  multi={true}
                            id="secondDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            onChange={v => {
                                props.handleSelect('secondDest', v)
                             }}
                       
               
                            value={props.application.secondDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="secondJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="secondJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                            onChange={v => {
                                props.handleSelect('secondJobTitle', v)
                             }}
                       
               
                            value={props.application.secondJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
      
            

                <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="firstDest">Choice</label>

                 

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="thirdDest">Destination</label>

                <Select
                            //  multi={true}
                            id="thirdDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            onChange={v => {
                                props.handleSelect('thirdDest', v)
                             }}
                       
               
                            value={props.application.thirdDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="thirdJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="thirdJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('thirdJobTitle', v)
                             }}
                       
               
                            value={props.application.thirdJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="1" className="form-group">
                <label htmlFor="Choice">Choice</label>

                 

                    </Col>
                    <Col sm="12" md="6" lg="6" xl="2" className="form-group">
                <label htmlFor="fourthDest">Destination</label>

                <Select
                            //  multi={true}
                            id="fourthDest"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.destinations}
                            onChange={v => {
                                props.handleSelect('fourthDest', v)
                             }}
                       
               
                            value={props.application.fourthDest}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>

                    <Col sm="12" md="6" lg="6" xl="3" className="form-group">
                <label htmlFor="fourthJobTitle">JobTitle</label>

                        <Select
                            //  multi={true}
                            id="fourthJobTitle"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('fourthJobTitle', v)
                             }}
                       
               
                            value={props.application.fourthJobTitle}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />

                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="changePosition">I am interested to change my position to:</label>
            
                           <Select
                            //  multi={true}
                            id="changePosition"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.changePositionArr}
                            onChange={v => {
                                props.handleSelect('changePosition', v)
                             }}
                       
               
                            value={props.application.changePosition}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>

                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="nonDestinationPosition">Would you like a non destination position</label>
            
                           <Select
                            //  multi={true}
                            id="nonDestinationPosition"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.yesNoOption}
                           
                            onChange={v => {
                                props.handleSelect('nonDestinationPosition', v)
                             }}
                       
                       
               
                             value={props.application.nonDestinationPosition}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                      
                    <TextInput
                     id="coupleName"
              name="coupleName" 
              label="Full name of partner if applying as a couple"
              value={props.application.coupleName}
              onChange={props.handleInputField}
             
            />
               
                    </Col>
                    <Col sm="12" md="6" lg="3" xl="3" className="form-group">
                           <label htmlFor="couplePosition">Current position of partner, if applying as a couple</label>
            
                           <Select
                            //  multi={true}
                            id="couplePosition"
                            valueKey="id"
                            labelKey="name"
                            className="form-control"
                            options={props.jobtitles}
                        
                            onChange={v => {
                                props.handleSelect('couplePosition', v)
                             }}
                       
               
                            value={props.application.couplePosition}
                            placeholder="Select"
                            className="form-group form-group-select"
                        />
                    </Col>
         
                    </div>
              

              </CardBody>
              

        </Card> 
    );
};

export default OverviewInfo