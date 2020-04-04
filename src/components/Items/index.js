import React, { Component } from 'react';
import axios from 'axios';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            idUsuario: props.idUsuario,
            tipo: props.tipo
        }
    }

    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.state.idUsuario}/${this.state.tipo}`)
            .then(result => {
                this.setState({
                    items: result.data
                });
            });
    }

    render() {
        return (
            <td>{this.state.items.length}</td>
        )
    }

}

export default Items;