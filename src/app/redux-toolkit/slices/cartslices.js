import { createSlice } from '@reduxjs/toolkit'

const getcartitems = () => {
    // localStorage.clear('cartitems');
    const cart = JSON.parse(localStorage.getItem('cartitems'));
    return cart;
}

const getcartvalue = getcartitems();

if (getcartvalue == null) {
    var getcartvalu = [];
} else {
    var getcartvalu = getcartvalue;
}

const initialState = {
    cart: getcartvalu,

}

export const countercart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtocart: (state, action) => {

            let data = state.cart.filter((v, i) => v.id == action.payload.id);

            if (data.length == 0) {
                var cartitems = {
                    id: action.payload.id,
                    title: action.payload.title,
                    image: action.payload.thumbnail,
                    price: action.payload.price,
                    discountpercentage: action.payload.discountpercentage,
                    qty: 1
                }
                state.cart.push(cartitems);
                localStorage.setItem('cartitems', JSON.stringify(state.cart));

            } else {
                state.cart.map((v, i) => {
                    if (v.id == action.payload.id) {
                        v.qty = v.qty + 1;
                    }
                })
                localStorage.setItem('cartitems', JSON.stringify(state.cart));
            }
        },
        removecart: (state, action) => {

            let data = state.cart.filter((v, i) => v.id != action.payload);
            state.cart = data;
            localStorage.setItem('cartitems', JSON.stringify(state.cart))
        },
        emptycart: (state) => {
            localStorage.clear('cartitems');
            state.cart = [];
        },
        updatecartaddqty: (state, action) => {
            state.cart.map((v, i) => {
                if (v.id == action.payload) {
                    v.qty = v.qty + 1;
                }
            })
            localStorage.setItem('cartitems', JSON.stringify(state.cart));
        },
        updatecartminusqty: (state, action) => {
            state.cart.map((v, i) => {
                if (v.id == action.payload) {
                    if (v.qty > 1) {
                        v.qty = v.qty - 1;
                    }

                }
            })
            localStorage.setItem('cartitems', JSON.stringify(state.cart));
        },
    },
});

export const { addtocart, removecart, emptycart, updatecartaddqty, updatecartminusqty } = countercart.actions

export default countercart.reducer