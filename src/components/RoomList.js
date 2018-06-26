import React, { Component } from 'react';

class RoomList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rooms: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.roomsRef = this.props.fb.database().ref('rooms');
    }

    handleSubmit(event) {
        let newName = event.target.elements.namedItem("roomName").value;
        this.roomsRef.push(
            newName
        );
        console.log(event.target.elements.namedItem("roomName").value);
        event.preventDefault();
    }

    handleClick(event) {
        console.log(event.target.innerHTML);
    }

    render() {
        let divStyle = { cursor: 'pointer' };
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col-6">
                            <input type="text" placeholder="Room name" name="roomName" />
                        </div>
                        <div className="col-4">
                            <input type="submit" value="New Room" />
                        </div>
                    </div>
                </form>


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
            const room = { name: snapshot.val(), id: snapshot.key };
            this.setState({ rooms: this.state.rooms.concat(room) });
        });
    }
}

export default RoomList;