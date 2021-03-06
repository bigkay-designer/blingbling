
export const initialState = {
    basket: [],
    uniqueItem: [],
}


//Seletor 
export const getBasketTotal = (basket)=>(
     basket?.reduce((amount, item) => item.price + amount, 0)
)

const reducer = (state, action)=>{
    switch(action.type){
        case 'ADD_TO_BASKET':
            state.basket.map(data=> {
                if(data.title === action.item.title && data.size === action.item.size){
                    return data.quantity += action.item.quantity
                }
            })
            return {
                ...state, 
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            }

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id && basketItem.size === action.size);
            let newBasket = [...state.basket];

            if (index >= 0){
                newBasket.splice(index, 1);
            }else{
                console.warn(
                    `Cant remove product(id: ${action.id} as its not in basket!)`
                )
            }

            return {
                ...state,
                basket:newBasket
            }

            default: 
            return state;
    }
}

export default reducer