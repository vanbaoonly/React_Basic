import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import ChildMycomponent from "./ChildMycomponent";
class Mycomponent extends React.Component {
    /**
     * JSX : return block
     * React.Fragment : cho biết r
     */

    state = {
        FirstName: "",
        LastName: "",
        Age: ""
    }
    ChangeNameFirst = (event) => {
        this.setState({
            FirstName: event.target.value
        })
    }
    ChangeNameLast = (event) => {
        this.setState({
            LastName: event.target.value

        })
    }
    ChangeNameAge = (event) => {
        this.setState({
            Age: event.target.value
        })
    }
    clickSubmit = (event) => {
        // event.preventDefault(event)
        console.log(" check input", this.state)


    }

    render() {
        // console.log('State', this.state)
        return (
            <>

                <form className="form">
                    <div className="form_gr">
                        <label>First Name : </label>
                        <input type="text" value={this.state.FirstName} placeholder="First Name"
                            onChange={(event) => { this.ChangeNameFirst(event) }} />
                    </div>
                    <div className="form_gr">
                        <label>Last Name : </label>
                        <input type="text" value={this.state.LastName} placeholder="Last Name"
                            onChange={(event) => { this.ChangeNameLast(event) }} />
                    </div>
                    <div className="form_gr">
                        <label>Age: </label>
                        <input type="text" value={this.state.Age} placeholder="Age "
                            onChange={(event) => { this.ChangeNameAge(event) }} />
                    </div>
                    <div className="wrapper_btn">
                        <input className="btn btn_login" type="submit" value="Submit" onClick={(event) => { this.clickSubmit(event) }} />
                        <input className="btn btn_reset" type="reset" value="Reset" />
                    </div>
                </form>
                <ChildMycomponent name={this.state.LastName + " " + this.state.FirstName} age={this.state.Age} />

            </>
        )
    }
}
export default Mycomponent;