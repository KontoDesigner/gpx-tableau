import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import HeadOfRow from './headOfRow'

class SeasonRow extends Component {
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

    return (
      <Card className="card-accordion card-country">
        <CardHeader onClick={() => this.toggleCollapse()}>
          {this.props.vacantRole.season} {icon}
        </CardHeader>

        <Collapse isOpen={this.state.expanded}>
          <CardBody className="no-padding-bottom">
            {this.props.vacantRole.headOfs.map((headOf, index) => (
              <HeadOfRow
                key={index}
                index={this.props.index.toString() + index.toString()}
                headOf={headOf}
                handleSelectedTitle={this.props.handleSelectedTitle}
               selectedTitle={this.props.selectedTitle}
               edit={this.props.edit}
               toogleAssignPositionModal = {this.props.toogleAssignPositionModal}
               toogleRemovePositionModal={this.props.toogleRemovePositionModal  }
              />
            ))}
          </CardBody>
        </Collapse> 
      </Card>
    )
  }
}

export default SeasonRow