import PRODUCTS from "../data/item";


const initialState = {
    products: PRODUCTS,
    cartItem: [],
    total: 0,
   
}

const reducer = (state = initialState, action) => {
    
    if(action.type === 'THEM_CART'){
        // tìm sản phẩm có id giống với id được action truyền vào
        const product = state.products.find(product => product.id === action.productId)
        //xét xem id đó có trong giỏ hàng chưa
        let existed_item= state.cartItem.find(item=> action.productId === item.id)
        if(existed_item)
         {
             //có thì cho thuộc tính quantity + 1 (quanity là thuộc tính tự tạo không cần trong data)
            product.quantity += 1 
            product.sum += product.pirce 
             return{
                ...state,
                 total: state.total + product.pirce
            }
        }
        else{
            //nếu khong thì cho quantity = 1 rồi add vào state cartItem
            product.quantity = 1;
            product.sum  = product.pirce
            //calculating the total
            let newTotal = state.total + product.pirce
            
            return{
                ...state,
                cartItem: [...state.cartItem, product],
                total : newTotal
            }
            
        }
    }

    if(action.type === 'XOA_CART'){
        //tìm vị trí sản phẩm trong cartItem
        const index = state.cartItem.findIndex(product => product.id === action.productId)
        //nếu >= 0 có nghĩa product có trong trang
        if(index >= 0){
            // tạo bản sao cho Favitem
            // cartItem là một mảng nên dấu ngoặc vuông
            const copy = [...state.cartItem]
            //xóa sản phẩm 
            copy.splice(index, 1)
            //trả về trang được cập nhật, dấu ngoặc nhọn do có state là 1 object
            return {...state, cartItem: copy }
        }
    }

    if(action.type === 'THEM_SL'){

        const product = state.products.find(product => product.id === action.productId)
        product.quantity += 1 
        product.sum += product.pirce 
        let newTotal = state.total + product.pirce
        return{
            ...state,
            total: newTotal
        }

    }

    if(action.type === 'GIAM_SL'){

        const addedItem = state.products.find(item=> item.id === action.productId) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.cartItem.filter(item=>item.id !== action.productId)
            let newTotal = state.total - addedItem.pirce
            return{
                ...state,
                cartItem: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            addedItem.sum -= addedItem.pirce 
            let newTotal = state.total - addedItem.pirce
            return{
                ...state,
                total: newTotal
            }
        }

    }

    if(action.type === 'XOA_ALL'){
        const copy = [...state.cartItem]
        //xóa sản phẩm 
        copy.splice(0, copy.length)
        return {...state, cartItem: copy, total: 0 }
    }

    return state;
}


export default reducer;