import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Col } from 'reactstrap'

const Action = (props) => {
    return (
        <Col sm="12" md="4" lg="3" xl="3" className="form-group">
            <UncontrolledDropdown title={props.selected !== undefined && props.selected.length > 0 ? `${props.selected.length} selected` : ''}>
                <DropdownToggle color="primary" className="btn-action" >
                    Actions
                </DropdownToggle>
                
                <DropdownMenu>
                <DropdownItem title="dsds" onClick={() => window.open('newNotification')}>
                Create New Notification Template  </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
        </Col>
    );
};

export default Action; 