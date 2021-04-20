import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getCatImg} from '../Redux/Reducer/dataImgReducer'
export default function Counter() {

    const [cartData, setCartData] = useState(0);
    const { cart, count,imgURL } = useSelector(state => ({
        ...state.AddCartReducer,
        ...state.CounterReducer,
        ...state.dataImgReducer
    }))

    const dispatch = useDispatch();

    const incrFunc = () => {
        dispatch({
            type: "INCR"
        })
    }
    const decrFunc = () => {
        dispatch({
            type: "DECR"
        })
    }
    const addToCartFunc = () => {
        dispatch({
            type: "ADDCART",
            payload: cartData
        })
    }

    useEffect(() => {
        dispatch(getCatImg())
    }, [])

    return (
        <div>
            <h1> Votre panier: {cart}</h1>
            {/* <button onClick={incrFunc}>+1</button>
            <button onClick={decrFunc}>-1</button> */}
            <input
                type="number"
                value={cartData}
                onInput={e => setCartData(e.target.value)}
            /> <br />
            <button onClick={addToCartFunc}>Ajouter au panier</button>
            <br/>
            {imgURL && <img style={{width:"300px"}} src={imgURL}></img>}
        </div>
    )
}
