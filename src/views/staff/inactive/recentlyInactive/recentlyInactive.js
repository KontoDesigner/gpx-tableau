import React, { Component } from 'react'
import StatusRow from './statusRow'
import { Card, CardBody, CardHeader } from 'reactstrap'
import Filter from '../../filter'
import Action from '../../action'

class RecentlyInactive extends Component {
  render() {
    return (
      <Card>
        <CardHeader>RecentlyInactive</CardHeader>

        <CardBody className="no-padding-bottom">
          <div className="form-row">
            <Filter getData={this.props.getRecentlyInactive} />
          
            <Action selected={this.props.selectedStaff} />
          
          </div>

          {this.props.recentlyInactive.map((recentlyInactive, index) =>
        
            <StatusRow
              key={index}
              index={index}
              recentlyInactive={recentlyInactive}
              handleSelectedStaff={this.props.handleSelectedStaff}
              selectedStaff={this.props.selectedStaff}
              edit={this.props.edit}
            />
          )}
        </CardBody>
      </Card>
    )
  }
}

export default RecentlyInactive
