import React from "react";
class ChildMycomponent extends React.Component {

    state = {
        showjob: true
    }
    handleShowHide = () => {
        this.setState({
            showjob: !this.state.showjob
        })
    }
    clickDeleteItem = (item) => {
        console.log('click', item)
        this.props.DeleteObjItem(item)

    }
    render() {
        // . props là kế thừa từ cha
        let objectChild = this.props.objectChild;
        let showjob = this.state.showjob;
        return (
            <>
                {showjob === false ?
                    <div><button onClick={() => this.handleShowHide()}>show</button></div>
                    :
                    <>
                        <div className="obj-list">
                            {
                                objectChild.map((item) => {
                                    return (
                                        <div key={item.id} >
                                            {item.name} - {item.job} - {item.salary} <span><button onClick={() => this.clickDeleteItem(item)}>X</button></span>
                                        </div>
                                    )
                                })
                            }
                            <div><button onClick={() => this.handleShowHide()}>Hide</button></div>
                        </div>
                    </>

                }

            </>
        )
    }
}
//  component function
// const ChildMycomponent = (props) => {
//     let objectChild = props.objectChild;

//     return (
// <>
//     <div className="obj-list">
//         {
//             objectChild.map((item) => {
//                 return (
//                     <div key={item.id} >
//                         {item.name} - {item.job} - {item.salary}
//                     </div>
//                 )
//             })
//         }
//     </div>
// </>
//     )


// }




export default ChildMycomponent;