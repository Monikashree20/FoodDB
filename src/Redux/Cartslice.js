import { createSlice } from "@reduxjs/toolkit";

const Cartslice=createSlice(
    {
        name:'carter',
        initialState:{
        carter:[]

        },
        reducers:{
            increm:(state,action)=>{
                state.carter.push({...action.payload,quantity:+1});
            },
            quaninc:(state,action)=>{
                state.carter=state.carter.map((item)=>{
                    if(item.id===action.payload.id){
                        return{...item,quantity:item.quantity+1};
                    };
                    return item;
                })
            },
            quandec:(state,action)=>{
                state.carter=state.carter.map((item)=>{
                    if(item.id===action.payload.id){
                        return{...item,quantity:item.quantity-1};
                    }
                    return item;
                }).filter(item=>item.quantity>0);
            },
            del:(state,action)=>{
                state.carter=state.carter.filter(item=>item.id!==action.payload.id);                //delete item
            },
            decrem:()=>{

            }
        },
    }
)
export const{increm,decrem,quaninc,del,quandec}=Cartslice.actions;
export default Cartslice.reducer;