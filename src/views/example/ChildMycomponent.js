import React from "react";
class ChildMycomponent extends React.Component {
    render() {
        // let name = this.props.name
        // let age = this.props.age

        //key:value
        let { name, age } = this.props

        return (
            <div>Full Name : {name} , Age: {age} tuổi.  </div>
        )
    }
}
export default ChildMycomponent;