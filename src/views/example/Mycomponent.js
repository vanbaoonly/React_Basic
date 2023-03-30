import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import ChildMycomponent from "./ChildMycomponent";
import AddMycomponent from "./AddMycomponent";
class Mycomponent extends React.Component {
    /**
     * JSX : return block
     * React.Fragment : cho biết r
     */


    state = {
        object: [
            {
                id: 1, name: 'Name 1', job: 'chơi game ', salary: '300'
            },
            {
                id: 2, name: 'Name 2', job: 'chơi game', salary: '1100'
            },
            {
                id: 3, name: 'Name 3', job: 'chơi game ', salary: '300'
            },
            {
                id: 4, name: 'Name 4', job: 'chơi game', salary: '1100'
            },
            {
                id: 5, name: 'Name 5', job: 'chơi game ', salary: '300'
            }
        ]
    }
    AddNewjob = (job) => {
        // console.log('check', job)
        this.setState({
            object: [...this.state.object, job]
            //  ...this.state.object là coppy data có ở trước đó, sau dấy phẩy được hiểu là push
            // vào sau data vừ mới coppy
        })

    }
    DeleteObjItem = (jobid) => {
        let arr = this.state.object
        arr = arr.filter(item => item.id !== jobid.id)
        this.setState({
            object: arr
        })

    }

    render() {
        // console.log('State', this.state)
        return (
            <>
                {
                    // console.log('1', ...this.state.object)
                }
                {/* khi chuyền function thì không cần () */}
                <AddMycomponent addNewjob={this.AddNewjob} />
                {/* chuyên data sang các phần tử con */}
                <ChildMycomponent objectChild={this.state.object}
                    DeleteObjItem={this.DeleteObjItem}
                />
            </>
        )
    }
}
export default Mycomponent;