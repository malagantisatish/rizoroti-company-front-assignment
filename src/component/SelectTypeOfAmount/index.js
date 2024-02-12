import "./index.css"

const SelectTypeOfAmount=props=>{
    const {amountDetails} = props
    const {id,type} = amountDetails
    return (
        <option value={id}>{type}</option>
    )
}


export default SelectTypeOfAmount