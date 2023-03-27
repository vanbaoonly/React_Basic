import React from "react";
class Mycomponent extends React.Component {
    /**
     * JSX : return block
     * React.Fragment : cho biết r
     */
    render() {
        let object = {
            name: 'anh bao',
            age: '20'
        };
        return (
            <React.Fragment>
                <div className="Name">I'am {object.name}</div>
                <h3 className="age">year old  {object.age}  </h3>
            </React.Fragment>
        )
    }
}
export default Mycomponent;