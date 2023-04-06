
import React from "react";
import { toast } from 'react-toastify';
class Addtodo extends React.Component {


    state = {
        Tile: ''
    }
    HandleChange = (event) => {
        this.setState({
            Tile: event.target.value
        })
    }
    Add = () => {

        if (!this.state.Tile) {
            toast.error('not be empty');
            return 0;
        }
        let Todo = {
            id: Math.floor(Math.random() * 100),
            Tile: this.state.Tile
        }
        this.props.AddNewTodo(Todo)
        this.setState({
            Tile: this.state.Tile = " "
        })
        toast.success('Add item Success');

    }
    render() {

        let Tile = this.state.Tile
        return (
            <>
                {/* {console.log('Tile', Tile)} */}
                <div className="app_todo">
                    <input type="text" value={Tile}
                        onChange={(event) => this.HandleChange(event)}
                    />
                    <button onClick={() => { this.Add() }} > Add </button>
                </div>

            </>
        )


    }
}
export default Addtodo;