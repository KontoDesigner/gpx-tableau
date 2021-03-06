import React, { Component } from 'react'
import SeasonRow from './seasonRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../filter'
import Action2 from '../action2'

class AllApplication extends Component {
    render() {
        return (
            <Card>
                <CardHeader>All Applications</CardHeader>

                <CardBody className="no-padding-bottom">
                    <div className="form-row">
                        <Filter getData={this.props.getAllApplication} />
                        {/* <Action2 
              
            //selected={this.props.selectedTitle} 
            //allRoles={this.props.allRoles}
            // toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
            //  toogleUnmarkPositionActingModal ={this.props.toogleUnmarkPositionActingModal}
            // toogleResetPositionAcceptModal  ={this.props.toogleResetPositionAcceptModal}
            // toogleMarkPositionDeclineModal ={this.props.toogleMarkPositionDeclineModal}
            // toogleMarkPositionActingModal ={this.props.toogleMarkPositionActingModal}
            //  toogleMarkPositionAcceptModal = {this.props.toogleMarkPositionAcceptModal}
            // toogleUpdatePositionModal = {this.props.toogleUpdatePositionModal}
            // toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
            // toogleRemovePositionModal = {this.props.toogleRemovePositionModal}
           // toogleRemovePositionSelectModal = {this.props.toogleRemovePositionSelectModal}                  
            />   */}
                    </div>

                    {this.props.allApplication.map((season, index) => (
                        <SeasonRow
                            key={index}
                            index={index}
                            season={season}
                            // handleSelectedTitle={this.props.handleSelectedTitle}
                            // selectedTitle={this.props.selectedTitle}
                            edit={this.props.edit}
                            // toogleMakePositionVacantModal={this.props.toogleMakePositionVacantModal}
                            // toogleUnmarkPositionActingModal ={this.props.toogleUnmarkPositionActingModal}
                            // toogleResetPositionAcceptModal  ={this.props.toogleResetPositionAcceptModal}
                            // toogleMarkPositionDeclineModal ={this.props.toogleMarkPositionDeclineModal}
                            // toogleMarkPositionActingModal ={this.props.toogleMarkPositionActingModal}
                            // toogleMarkPositionAcceptModal = {this.props.toogleMarkPositionAcceptModal}
                            // toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
                            // toogleUpdatePositionModal = {this.props.toogleUpdatePositionModal}
                            // toogleRemovePositionModal={this.props.toogleRemovePositionModal  }
                        />
                    ))}
                </CardBody>
            </Card>
        )
    }
}

export default AllApplication
