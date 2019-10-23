import React, { Component } from 'react';

export class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            globalTitle: ""
        }
    }
    componentDidMount() {
        console.log("Rendered Form");
    }

    onChange = e => {
        const titleR = e.target.value;
        this.setState({title: titleR, globalTitle: "My form - " + titleR});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.globalTitle!==this.state.globalTitle) {
            console.log("Title changed");
            this.submitForm();
        }
    }
    submitForm = e => {
        console.log("Title changed");
    }

    render() {
        return(
            <div>
                <h1> My form</h1>
                <form onSubmit={this.submitForm}>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="title">My title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                placeholder={this.state.title}
                                onChange={this.onChange}
                            />
                        </div>
                        <hr />
                        <div className="form-data">
                            <input type="submit" value="Send" />
                        </div>
                    </fieldset>
                </form>
            </div>
        )
    }
}