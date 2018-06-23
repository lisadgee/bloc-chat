import React, { Component } from 'react';

class RoomList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.roomsRef = this.props.fb.database().ref('rooms');
    }
    render() {
        let divStyle = { cursor: 'pointer' };
        return (
            <div>
                <ul className="list-group">
                    {this.state.rooms.map(
                        (room) => <li className="list-group-item" key={room.id} style={divStyle} onClick={this.handleClick}>
                            {room.name}
                        </li>
                    )}
                </ul>
            </div>                         
        );
    }

    componentDidMount() {
        this.roomsRef.on('child_added', snapshot => {            
            const room = {name: snapshot.val(), id: snapshot.key};
            this.setState({ rooms: this.state.rooms.concat(room) });
        });
    }
}

export default RoomList;