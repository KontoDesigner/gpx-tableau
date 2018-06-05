import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import NameTable from './nameTable'

class Name extends Component {
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
                <CardHeader>
                    Name
                </CardHeader>

                <CardBody>
                    <NameTable />
                </CardBody>
            </Card>
        )
    }
}

export default Name;