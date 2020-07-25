/*
    Component to display the shuffled cards
*/
import React from 'react';
import { Table} from 'react-bootstrap';
class Shuffle extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <th>Row</th>
                    <th>Cards</th>   
                </tr>

                {this.props.playing_cards.map((cards,i) => (
                <tr key={i}>
                    <td>{ i+1 }</td>
                    <td>{ cards }</td>
                </tr>
                ))}
                </tbody>
            </Table>
        </div>
    );
    }
}

export default Shuffle;