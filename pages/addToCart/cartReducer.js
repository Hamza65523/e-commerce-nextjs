import {createSlice} from '@reduxjs/toolkit'
import Iphone from '../../assests/iphone.jpg'
import Samsung from '../../assests/samsung.jpg'
const initialState={
    data:[
        {
            img:Iphone,
            title:'Iphone 14 pro max',
            price:1000,
            reviews:'125 reviews'
        },
        {
            img:Samsung,
            title:'samsung 14 pro max',
            price:400,
            reviews:'50 reviews'
        },
    ],
    adCrt:[],
    count:0
    
}


const addToCartSlice=createSlice({
    name:"addToCart",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            state.data.push(action.payload)
        },
        adCrd:(state,action)=>{
            state.adCrt.push(action.payload)
        },
        counter:(state,action)=>{
            state.count +=1
        },

    }
})
export const {addToCart,adCrd,counter} = addToCartSlice.actions
export default addToCartSlice.reducer

