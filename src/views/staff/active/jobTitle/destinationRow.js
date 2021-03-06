import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import PersonTable from './personTable'

class DestinationRow extends Component {
    constructor() {
        super()

        this.state = {
            expanded: false
        }
    }

    toggleCollapse = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        const icon = this.state.expanded ? (
            <i className="fa fa-chevron-up float-right text-danger" />
        ) : (
            <i className="fa fa-chevron-down float-right text-danger" />
        )

        const style = {
            height: `${50 + this.props.destination.staffs.length * 28}px`
        }

        return (
            <Card className="card-accordion">
                <CardHeader onClick={() => this.toggleCollapse()}>
                    {this.props.destination.destination} {icon}
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody style={style} className="card-body-table">
                        {this.state.expanded && (
                            <PersonTable
                                index={this.props.index}
                                persons={this.props.destination.staffs}
                                handleSelectedStaff={this.props.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.props.edit}
                                toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.props.toogleResignStaffModal}
                                toogleSendMailModal={this.props.toogleSendMailModal}
                                toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
                            />
                        )}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default DestinationRow
