import React, { Component } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Alert, Row, Col, Table, Label, Input } from 'reactstrap'
import Datetime from 'react-datetime'
import Select from 'react-select'
import moment from 'moment'
class RemoveStaff extends Component {
    //const ResignStaff = props => {
    constructor(props) {
        super(props)
        this.dates = []

        this.state = {
            //dates:[],
            selectedCandidate: null,
            placementDynamicPeriods: []
        }
    }

    removeStaff = val => {
        this.toggle()

        var currentdate = new Date()

        var newdatemodified = moment(currentdate).format('YYYY-MM-DD HH:mm:ss')

        let model = {
            dateModified: newdatemodified,
            staffid: this.props.selectedStaffID,

            oldDate: newdatemodified
        }

        this.props.createRemoveStaff(model)
    }

    placementPeriodChange = placementPeriods => {
        debugger

        const selectedPlacementPeriod = placementPeriods.startDate
        // const selectedAssignStart = selectedPlacementPeriod ? selectedPlacementPeriod.substr(0, 10):'';
        //const selectedAssignEnd = selectedPlacementPeriod ? selectedPlacementPeriod.substr(-10):'';

        debugger

        this.setState({
            selectedPlacementPeriod
            //selectedAssignStart,
            //selectedAssignEnd
        })
        debugger
    }

    toggle = () => {
        //this.setState({
        //selectedResignAppDate:null,

        //})

        this.props.toggle()
    }

    render() {
        //     const mplid = this.props.selectedMplID ? this.props.selectedMplID.toString() : []

        // const options = this.props.candidate
        //       .filter(x => x.mplid === mplid)
        //        .map(h => ({
        //          startDate:
        //            moment(h.startDate).format('YYYY-MM-DD') +
        //            ' - ' +
        //            moment(h.endDate).format('YYYY-MM-DD'),
        //          startDate:
        //            moment(h.startDate).format('YYYY-MM-DD') +
        //          ' - ' +
        //            moment(h.endDate).format('YYYY-MM-DD')
        //        }))

        return (
            <div>
                <Modal isOpen={this.props.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Remove Staff - {this.props.selectedStaffID + ' '}</ModalHeader>
                    <ModalBody>
                        {<Alert color="danger">Are you sure you want to remove Staff?</Alert>}

                        {/* <Row>
              <Col>
                <Table striped bordered responsive>
      
                  <thead>
                    <tr>
                      <th colSpan="2">
                        Assignments dates{' '}
                        <i className="card-text text-danger">
                          {' '}
                          (Selected assignment will be marked as declined)
                        </i>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan="2">
                        <Select
                          id="startDate"
                          valueKey="startDate"
                          labelKey="startDate"
                          className="form-control"
                          options={options}
                          onChange={this.placementPeriodChange}
                          value={this.state.selectedPlacementPeriod}
                          placeholder="Select"
                          className="form-group form-group-select"
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row> */}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.removeStaff()}>
                            Ok
                        </Button>{' '}
                        <Button color="danger" onClick={this.toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default RemoveStaff
