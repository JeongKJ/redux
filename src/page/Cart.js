import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import data from '../data.json';
import { removeCart,clearCart } from '../CartSlice';

export default function Cart(){
    const {cartIds} = useSelector(state => state.cart)
    const cartData = data.products.filter(data=> cartIds.includes(data.id));
    console.log(cartData);
    const dispatch = useDispatch();
    return(
       <div className="cartwrap">
        <h2>장바구니</h2>
        {cartData.length<1 && (<div className='none'>장바구니가 비어있습니다.</div>)}

        <div className="cart">      
            <ul>
                {cartData.map((data)=>
                    <li key={data.id}>
                        <figure>
                        <img src={data.imageSmall} alt='img'/>
                        <figcaption>
                            <dl>
                                <dt>
                                    {data.name}
                                </dt>
                                <dd>
                                   {data.detail}  
                                </dd>
                                <dd>
                                    {data.price} 원
                                </dd>
                            </dl>
                        </figcaption>
                        <p>
                        <button onClick={()=>{dispatch(removeCart(data.id))}}>삭제</button>
                    </p>
                    </figure>
                    </li>
                )}
            </ul>
            <p><button onClick={()=>{dispatch(clearCart())}}>전체삭제</button></p>
            </div>
       </div>
    )
}