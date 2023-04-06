import React from "react";
import "./Todo.scss";
import Addtodo from "./Addtodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class TodoList extends React.Component {

    state = {
        Listodo: [
            {
                id: '1', Tile: "Todo 1"
            },
            {
                id: '2', Tile: "Todo 2"
            },
            {
                id: '3', Tile: "Todo 3"
            }
        ],
        edittodo: {}
    }
    AddNewTodo = (Todo) => {
        this.setState({
            Listodo: [...this.state.Listodo, Todo]

        })

    }
    ClickEdit = (todo) => {
        let { edittodo, Listodo } = this.state;
        let isEmty = Object.keys(edittodo).length === 0;
        // save
        if (isEmty === false && edittodo.id === todo.id) {

            let Listodocoppy = [...Listodo];
            let objIndex = Listodocoppy.findIndex((item => item.id === todo.id));
            Listodocoppy[objIndex].Tile = edittodo.Tile;
            this.setState({
                Listodo: Listodocoppy,
                edittodo: {}
            })
            toast.success(" dang upload ...");
            return;
        }
        //edit
        this.setState({
            edittodo: todo
        })

    }
    ChangeEdit = (event) => {
        let edittodocoppy = { ...this.state.edittodo };
        edittodocoppy.Tile = event.target.value
        this.setState({
            edittodo: edittodocoppy
        })

    }

    ClickDelete = (List_id) => {
        let arr = this.state.Listodo;
        arr = arr.filter(item => item.id !== List_id.id)
        this.setState({
            Listodo: arr
        })
        toast.info('Delete id : ' + List_id.id)
        console.log('Delete id : ' + List_id.id, List_id.Tile)
    }
    render() {

        let { Listodo, edittodo } = this.state;
        let isEmty = Object.keys(edittodo).length === 0;
        // console.log(isEmty) check true
        return (
            <>
                <h3> List Todo </h3>
                <div className="wrapper">
                    <Addtodo AddNewTodo={this.AddNewTodo} />
                    <div className="list_todo">
                        {Listodo && Listodo.length >= 0 &&
                            Listodo.map((item, index) => {
                                return (

                                    <div key={item.id} className="todo_child">
                                        {isEmty === true ?
                                            <span>  {index + 1}. {item.Tile}</span>
                                            :
                                            <>
                                                {edittodo.id === item.id ?
                                                    <span>
                                                        {index + 1}.  <input value={edittodo.Tile}
                                                            onChange={(event) => this.ChangeEdit(event)}
                                                        />
                                                    </span>
                                                    :
                                                    <span>  {index + 1}. {item.Tile}</span>
                                                }
                                            </>

                                        }
                                        <span className="btn_box">
                                            <button onClick={() => { this.ClickEdit(item) }}>
                                                {isEmty === false && edittodo.id === item.id ? 'Save' : 'Edit'}
                                            </button>

                                            <button onClick={() => { this.ClickDelete(item) }} >Dele</button>
                                        </span>
                                    </div>
                                )
                            })
                        }

                    </div>

                </div >
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </>
        )
    }
}
export default TodoList;