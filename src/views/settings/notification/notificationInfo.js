import React from 'react'
import { Card, CardBody, CardHeader, Col, Button } from 'reactstrap'
import { Row, Form, FormGroup, Label, Input } from 'reactstrap'
import TextInput from '../../../components/textInput'

const NotificationEdit = props => {
  let model = {
    // to the database
    TemplateType: props.notification.templateType,
    TemplateName: props.notification.templateName,
    Language: props.notification.language,
    Subject: props.notification.subject,
    Content: props.notification.content,
    Description: props.notification.description
  }

  return (


  
    <Card>

      <CardHeader>{props.notification.subject?props.notification.subject:"New Notification Template"} </CardHeader>

      <CardBody className="no-padding-bottom">
        <div className="form-row">

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="subject"
              label="Subject"
              value={props.notification.subject}
              onChange={props.handleInputField}
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="templateName"
              label="Template name"
              value={props.notification.templateName}
              onChange={props.handleInputField}
            />
          </Col>
          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="templateType"
              label="Template type"
              value={props.notification.templateType}
              onChange={props.handleInputField}
            />
          </Col>

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
     
              name="language"
              label="Language"
              value={props.languages}
              onChange={props.handleInputField}
              //placeholder={props.languages}
              disabled
            />
          </Col>

          <Col sm="12" md="6" lg="6" xl="4" className="form-group">
            <TextInput
              name="description"
              label="Description"
              value={props.notification.description}
              onChange={props.handleInputField}
            />
          </Col>

          <Col sm="12" md="12" lg="12" xl="12" className="form-group">
            <Label for="content">Content</Label>
            <Input
              required
              type="textarea"
              //maxLength="1000"
              name="content"
              id="content"
              rows={16}
              value={props.notification.content}
            
              onChange={props.handleInputField}
              aria-multiline="true"
            />
          </Col>
        </div>

        <div className="col-btn-menu">
          {/* <Button
            onClick={() => {
              window.close()
            }}
            color="primary"
          >
            New Template
          </Button> */}
          <Button
            onClick={() => {
              window.close()
            }}
            color="danger"
          >
            Close
          </Button>

          <Button
            color="success"
            onClick={() => {
              props.save(model)
            }}
          >
            Save & Close
          </Button>
        </div>
        <p />
      </CardBody>
    </Card>
  )
}

export default NotificationEdit
