
import React from "react";
// import ChildMycomponent from "./ChildMycomponent";
// import AddMycomponent from "./AddMycomponent";
import TodoList from "./Todo/TodoList";
class Mycomponent extends React.Component {
    /**
     * JSX : return block
     * React.Fragment : cho biết r   */


    state = {
        object: [
            {
                id: 1, name: 'Name 1', job: 'chơi game ', salary: '300'
            },
            {
                id: 2, name: 'Name 2', job: 'chơi game', salary: '1100'
            },

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
    // DeleteObjItem = (jobid) => {
    //     let arr = this.state.object
    //     arr = arr.filter(item => item.id !== jobid.id)
    //     this.setState({
    //         object: arr
    //     })

    // }
    // componentDidMount() {
    //     console.log("run ComponentDidMount")
    // }
    // componentDidUpdate(prevProps, prevState) {
    //     console.log('run componentDidUpdate : prev state ', prevState, 'current state ', this.state)
    // }

    render() {

        return (
            <>

                {/* khi chuyền function thì không cần () */}
                {/* <AddMycomponent addNewjob={this.AddNewjob} /> */}
                {/* chuyên data sang các phần tử con */}
                {/* <ChildMycomponent objectChild={this.state.object} DeleteObjItem={this.DeleteObjItem}/> */}
                <TodoList />
            </>
        )
    }
}
export default Mycomponent;