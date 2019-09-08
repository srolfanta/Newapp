import React, { Component } from 'react'

export default class New extends Component {

    constructor(props) {

        super(props);

        this.state = {

            users:[]
        
        
        }
    }
    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    users: data
                })
                
                
            })

    }
    
    
    render() {
        return (
            <div>
                <input />
                {this.state.users.map((el)=>{
                    return <h1>{el.username}</h1>
                })}
            </div>
        )
    }
}