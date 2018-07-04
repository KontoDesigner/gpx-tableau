import React, { Component } from 'react';
import { Card, CardBody, CardFooter, CardHeader, Row, Col, Button } from 'reactstrap'
import TextInput from '../../../../components/textInput'
import AssignRole from './assignRole'
import MoveRole from './moveRole'
import RemoveRole from './removeRole'
import Datetime from 'react-datetime'

class Season extends Component {
    constructor() {
        super();

        this.state = {
            assignRoleModal: false,
            moveRoleModal: false,
            removeRoleModal: false
        };
    }

    toggleAssignRoleModal = () => {
        this.setState({
            assignRoleModal: !this.state.assignRoleModal
        });
    }

    toggleMoveRoleModal = () => {
        this.setState({
            moveRoleModal: !this.state.moveRoleModal
        });
    }

    toggleRemoveRoleModal = () => {
        this.setState({
            removeRoleModal: !this.state.removeRoleModal
        });
    }

    render() {
        const assignModal = (
            <AssignRole
                modal={this.state.assignRoleModal}
                toggle={this.toggleAssignRoleModal}
                availablePositions={this.props.availablePositions}
                assignRole={this.props.assignRole}
                season={this.props.season}
                seasonGeography={this.props.seasonGeography}
            />
        )

        const assignBtn = (
            <Button disabled={this.props.season !== undefined} size="sm" onClick={() => { this.toggleAssignRoleModal() }} color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>Assign Role</Button>
        )

        if (this.props.season === undefined) {
            return (
                <div>
                    <Card>
                        <CardHeader>{this.props.title}</CardHeader>

                        <CardBody>
                            <Row>
                                <Col sm="12" md="6" lg="6" xl="4">
                                    <b className="card-text text-danger">No {this.props.title.toLowerCase()} found.</b>
                                </Col>
                            </Row>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '0px' }}>
                            <Row>
                                <Col>
                                    {assignBtn}
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>

                    {assignModal}
                </div>
            );
        }
        else {
            return (
                <div>
                    <Card>
                        <CardHeader>{this.props.title}</CardHeader>

                        <CardBody className="no-padding-bottom">
                            <Row>
                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="regionHeadOf" label="Region/Head Of" disabled={true} value={this.props.season.Region + ' ' + this.props.season.HeadOf} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="location" label="Location" disabled={true} value={this.props.season.SDD_DM + ' ' + this.props.season.Destination + ' ' + this.props.season.ConceptHotel} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="jobFamily" label="Job Family" disabled={true} value={this.props.season.JobFamily} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <TextInput name="jobTitle" label="Job Title" disabled={true} value={this.props.season.JobTitle} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <label htmlFor="dateOfBirth">Start Date</label>

                                        <Datetime
                                            value={this.props.season !== null ? this.props.season.StaffStartDate : ''}
                                            // onChange={(v) => { props.updateStaffDatePickerState('dateOfBirth', v) }}
                                            timeFormat={false}
                                            dateFormat="YYYY-MM-DD"
                                            closeOnSelect
                                            utc={true}
                                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                                    </div>
                                </Col>

                                <Col sm="12" md="6" lg="6" xl="6">
                                    <div className="form-group">
                                        <label htmlFor="dateOfBirth">End Date</label>

                                        <Datetime
                                            value={this.props.season !== null ? this.props.season.StaffEndDate : ''}
                                            // onChange={(v) => { props.updateStaffDatePickerState('dateOfBirth', v) }}
                                            timeFormat={false}
                                            dateFormat="YYYY-MM-DD"
                                            closeOnSelect
                                            utc={true}
                                            inputProps={{ placeholder: 'YYYY-MM-DD' }} />
                                    </div>
                                </Col>
                            </Row>
                        </CardBody>

                        <CardFooter style={{ paddingBottom: '0px' }}>
                            <Row>
                                <Col>
                                    {assignBtn}
                                    <Button size="sm" onClick={() => { this.toggleMoveRoleModal() }} color="primary" style={{ marginRight: '10px', marginBottom: '10px' }}>Move Role</Button>
                                    <Button size="sm" onClick={() => { this.toggleRemoveRoleModal() }} color="danger" style={{ marginBottom: '10px' }}>Remove Role</Button>
                                </Col>
                            </Row>
                        </CardFooter>
                    </Card>

                    {assignModal}

                    <MoveRole
                        modal={this.state.moveRoleModal}
                        toggle={this.toggleMoveRoleModal}
                        season={this.props.season}
                        seasonGeography={this.props.seasonGeography}
                    />

                    <RemoveRole
                        modal={this.state.removeRoleModal}
                        toggle={this.toggleRemoveRoleModal}
                        season={this.props.season}
                        seasonGeography={this.props.seasonGeography}
                    />
                </div>
            );
        }
    }
};

export default Season