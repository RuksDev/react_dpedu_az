import { Component } from "react";

class TextField extends Component {
    constructor(props) {
        super(props);

    }
    render () {
        return (
            <div>
                <input type="text" placeholder="Type your text here" /> 
            </div>
        )
    }
 }

 export default TextField;