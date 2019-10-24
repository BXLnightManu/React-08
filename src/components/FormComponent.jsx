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
        const titleSubmited = e.target.value;
        this.setState({title: titleSubmited, globalTitle: "My form - " + titleSubmited});
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.globalTitle!==this.state.globalTitle) {
            console.log("Title changed");
        }
    }

    render() {
        return(
            <div>
                <h1>{this.state.globalTitle}</h1>
                <form>
                    <fieldset>
                        <legend>Information</legend>
                        <div className="form-data">
                            <label htmlFor="title">My title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={this.state.title}
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