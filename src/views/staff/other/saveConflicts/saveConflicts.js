import React, { Component } from 'react'
import { Card, CardBody, CardHeader } from 'reactstrap';
import PositionTable from './positionTable'

class SaveConflicts extends Component {
    render() {
        return (
            <Card>
                <CardHeader>
                    Save Conflicts
                </CardHeader>

                <CardBody>
                    <PositionTable />
                </CardBody>
            </Card>
        )
    }
}

export default SaveConflicts;