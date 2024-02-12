import "./index.css"

const CategoryOfIncome = props=>{
    const {categoryDetails} = props
    const {id,category} = categoryDetails

    return  <option value={id}>{category}</option>
}



export default CategoryOfIncome