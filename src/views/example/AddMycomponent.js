import React from "react";
class AddMycomponent extends React.Component {

    state = {

        name: "",
        job: "",
        salary: ""
    }
    //this.setState() hàm cập nhật
    ChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    ChangeNameObj = (event) => {
        this.setState({
            job: event.target.value

        })
    }
    ChangeNameSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    clickSubmit = (event) => {
        event.preventDefault(event)

        if (!this.state.name || !this.state.job || !this.state.salary) {
            alert('bạn chưa nhập đầy đủ thông tin !')
            return;
        }

        this.props.addNewjob({
            id: Math.floor(Math.random() * 100),
            name: this.state.name,
            job: this.state.job,
            salary: this.state.salary

        })

        // console.log(" check obj", this.state)
        this.setState({
            name: this.state.name = '',
            job: this.state.job = '',
            salary: this.state.salary = ''
        })

    }
    render() {
        return (
            <>
                <form className="form">
                    <div className="form_gr">
                        <label>Name : </label>
                        <input type="text" value={this.state.name} placeholder="Name"
                            onChange={(event) => { this.ChangeName(event) }} />
                    </div>
                    <div className="form_gr">
                        <label> job </label>
                        <input type="text" value={this.state.job} placeholder="job"
                            onChange={(event) => { this.ChangeNameObj(event) }} />
                    </div>
                    <div className="form_gr">
                        <label>salary: </label>
                        <input type="text" value={this.state.salary} placeholder="salary"
                            onChange={(event) => { this.ChangeNameSalary(event) }} />
                    </div>
                    <div className="wrapper_btn">
                        <input className="btn btn_login" type="submit" value="Submit" onClick={(event) => { this.clickSubmit(event) }} />
                        <input className="btn btn_reset" type="reset" value="Reset" />
                    </div>
                </form>
            </>
        )
    }
}
export default AddMycomponent;