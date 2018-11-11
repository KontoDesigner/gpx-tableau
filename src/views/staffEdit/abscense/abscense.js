import React, { Component } from 'react'
import { Row, Col } from 'reactstrap'
import AbscenseInformation from './abscenseInformation'
import ResignInformation from './resignInformation'
import * as employeeInfoActions from '../../../actions/staffEdit/employeeInfoActions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Abscense extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''
    
    
    };

       
      //  this.handleChangeMultiple = this.handleChangeMultiple.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleStaffDatePicker = (field, date) => {
        let val = ''

        //Picker
        if (date._d) {
            val = date._d
        }

        //Manual
        if (!date._d) {
            val = date
        }

        this.props.employeeInfoActions.handleStaffField(field, val)

        this.props.handleUnsavedEdit()
    }

    handleStaffSelect = (field, val, selector) => {
      
        const id = val != null ? val[selector] : undefined

        this.props.employeeInfoActions.handleStaffField(field, id)

        this.props.handleUnsavedEdit()
    }


    render() {
        return (
            <div>
                 <Row className="row-panel-4">
                    <Col sm="12" md="12" lg="6">
                        <AbscenseInformation 
                        staff={this.props.staff} 
                        handleStaffDatePicker={this.handleStaffDatePicker}
                        handleStaffSelect={this.handleStaffSelect} 
                        resignType={this.props.resignType}
                        
                        />
                    </Col>

                    <Col sm="12" md="12" lg="6">
                        <ResignInformation
                            staff={this.props.staff}
                            handleStaffDatePicker={this.handleStaffDatePicker}
                            handleStaffSelect={this.handleStaffSelect} 
                            allJobTitles={this.props.allJobTitles}
                            handleChangeMultiple={this.props.handleChangeMultiple} 
                            resignmentReasons={this.props.resignmentReasons}
                          




                            // title={"Skills"}
                            // name={"skills"}
                            // options={this.props.skillOptions}
                            // selectedOptions={selectedOptions}
                            // handleChange={this.props.handleCheckBox}

                            

                      
                        />
                    </Col>
                </Row>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        employeeInfoActions: bindActionCreators(employeeInfoActions, dispatch)
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Abscense)