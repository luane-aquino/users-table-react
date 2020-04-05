import React, { Component } from 'react';
import axios from 'axios';

class Items extends Component {
    state = {
        items: []
    }

    componentDidMount = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.idUsuario}/${this.props.tipo}`)
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