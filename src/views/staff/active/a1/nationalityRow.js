import React, { Component } from 'react'
import { Collapse, Card, CardBody, CardHeader } from 'reactstrap'
import StatusRow from './statusRow'

class NationalityRow extends Component {
    constructor(props) {
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
            <Card className="card-accordion">
                <CardHeader onClick={() => this.toggleCollapse()}>
                    AR
                </CardHeader>

                <Collapse isOpen={this.state.expanded}>
                    <CardBody className="no-padding-bottom">
                        <StatusRow />
                    </CardBody>
                </Collapse>
            </Card>
        )
    }
}

export default NationalityRow