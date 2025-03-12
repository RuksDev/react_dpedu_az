import {Component } from "react"

function LabeledTextField (normalTextField, labelText) {
    class FinalTextField extends Component {
        render() {
            const TextFieldComponent = normalTextField; 
            return (
               <>
               <div>
                    {labelText}
                </div>
                <TextFieldComponent/>
               </>
            )
        }
        

    }
    return FinalTextField; 
}

export default LabeledTextField;