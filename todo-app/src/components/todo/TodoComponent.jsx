import React, { Component } from 'react';
import moment from 'moment';
import { Formik, Form, Field } from 'formik';


class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id : this.props.match.params.id ,
            description : 'Learn Forms',
            targetDate : moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this);

    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        let {description, targetDate} = this.state;
        // let targetDate = this.state.targetDate;
        return(

            <div>

                <h1>Todo</h1>

                <div className="container">

                    <Formik 
                        initialValues = {{
                            description: description,
                            targetDate: targetDate
                        }}
                        onSubmit={this.onSubmit}
                    >
                        {
                            (props) => (
                                <Form>

                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description"/>
                                    </fieldset>

                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate"/>
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>


                                </Form>    

                                // <div>Something</div>
                            )
                        }
                    </Formik>


                </div>
                
            </div>
        )
        
    }
}

export default TodoComponent;