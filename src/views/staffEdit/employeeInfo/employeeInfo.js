import React, { Component } from 'react'
import ContactInformation from './contactInformation'
import Season from './season/season'
import EmployeeInformation from './employeeInformation'
import Gap from './gap'
import PlannedMove from './plannedMove'
import WorkExperience from './workExperience'
import { Row, Col } from 'reactstrap'
import * as employeeInfoActions from '../../../actions/staffEdit/employeeInfoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class EmployeeInfo extends Component {
    handleStaffField = (event) => {
        const field = event.target.name;
        const val = event.target.value;

        this.props.employeeInfoActions.handleStaffField(field, val)
    }

    handleStaffDatePicker = (field, date) => {
        let val = '';

        //Picker
        if (date._d) {
            val = date._d;
        }

        //Manual
        if (!date._d) {
            val = date;
        }

        this.props.employeeInfoActions.handleStaffField(field, val)
    }

    handleStaffSelect = (field, val, selector) => {
        const id = val != null ? val[selector] : undefined

        this.props.employeeInfoActions.handleStaffField(field, id)
    }

    render() {
        return (
            <div>
                <Row>
                    <Col sm="12" md="12" lg="6">
                        <ContactInformation
                            staff={this.props.staff}
                            handleStaffField={this.handleStaffField}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="6">
                        <EmployeeInformation
                            staff={this.props.staff}
                            sourceMarkets={this.props.sourceMarkets}
                            handleStaffField={this.handleStaffField}
                            handleStaffDatePicker={this.handleStaffDatePicker}
                            handleStaffSelect={this.handleStaffSelect}
                            positionTypes={this.props.positionTypes}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col sm="12" md="12" lg="4" xl="4">
                        <Season
                            title={"Current Season"}
                            positionAssign={this.props.currentPositionAssign}
                            availablePositions={this.props.currentAvailablePositions}
                            assignRole={this.props.assignRole}
                            removeRole={this.props.removeRole}
                            season={this.props.currentSeason}
                        />
                    </Col>

                    <Col sm="12" md="12" lg="4" xl="4">
                        <Gap />
                    </Col>

                    <Col sm="12" md="12" lg="4" xl="4">
                        <Season
                            title={"Next Season"}
                            season={this.props.nextSeason}
                        />

                        <PlannedMove />

                        <Season
                            title={"Following Season"}
                            season={this.props.followingSeason}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <WorkExperience />
                    </Col>
                </Row>
            </div >
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(EmployeeInfo)