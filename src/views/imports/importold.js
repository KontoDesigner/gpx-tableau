import React, { Component } from 'react'
import Moment from 'react-moment'
import {
  Row,
  Col,
  Label,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody
} from 'reactstrap'
import TextInput from '../../components/textInput'
import Select from 'react-select'

import Datetime from 'react-datetime'

const Import = props => {
  return (
    <Card>
      <CardHeader>File Imports</CardHeader>

      <CardBody className="no-padding-bottom">
        <div className="row">
          <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group ">
            <label htmlFor="importTypes">Select File Import Type</label>

            <Select
              id="importTypes"
              valueKey="name"
              labelKey="id"
              className="form-group form-group-select"
              options={props.importTypes}
              onChange={props.handleImportType}
              value={props.importType}
              placeholder="Select"
            />
                {this.state.validStaff}
            </Col>
</div>


   <div className="row">
          <Col key={0} sm="12" md="4" lg="3" xl="3" className="form-group">

        
            <input
              onChange={e => props.handleFile(e.target.files[0])}
              type="file"
              name="file"
              id="file"
            />
           
            <Button
              color="success"
              onClick={() => {
         
                 props.create()
              }}
            >
              Start Importjsjdj
            </Button>
          </Col>
        </div>
      </CardBody>
    </Card>
  )
}

export default Import
