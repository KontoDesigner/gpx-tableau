import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import PersonTable from './personTable'

class StatusTable extends Component {
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
            height: `${50 + this.props.recentlyInactive.staffs.length * 28}px`
        }

        return (
            <Card className="card-accordion">
                <CardHeader onClick={() => this.toggleCollapse()}>
                    ({this.props.recentlyInactive.staffs.length}) {this.props.recentlyInactive.status} {icon}
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody style={style} className="card-body-table">
                        {this.state.expanded && (
                            <PersonTable
                                index={this.props.recentlyInactive.recentlyInactive}
                                staffs={this.props.recentlyInactive.staffs}
                                handleSelectedStaff={this.props.handleSelectedStaff}
                                selectedStaff={this.props.selectedStaff}
                                edit={this.props.edit}
                                toogleRemoveStaffModal={this.props.toogleRemoveStaffModal}
                                toogleAbsentStaffModal={this.props.toogleAbsentStaffModal}
                                toogleResignStaffModal={this.props.toogleResignStaffModal}
                                toogleReResignStaffModal={this.props.toogleReResignStaffModal}
                                toogleSendMailModal={this.props.toogleSendMailModal}
                            />
                        )}
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default StatusTable
