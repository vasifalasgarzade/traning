import { combineReducers } from 'redux'
import changeCategoryReduser from "./changeCategoryReduser"
import categoryListReduser from "./categoryListReduser"
import productListReduser from "./productListReduser"





const rootReducer = combineReducers({
    changeCategoryReduser,
    categoryListReduser,
    productListReduser
})



export default rootReducer;