import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import NationalityRow from './nationalityRow'

class A1 extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    A1
                </CardHeader>

                <CardBody className="no-padding-bottom">
                    <NationalityRow/>
                </CardBody>
            </Card>
        )
    }
}

export default A1;