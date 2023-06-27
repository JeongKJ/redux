import { useParams } from 'react-router-dom';
import data from '../data.json'
import './detail.css'
import { addCart } from '../CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../components/Modal';
import { useState } from 'react';


export default function Detail() {

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    let { slug } = useParams();
    const param = data.products.find((data) => data.slug === slug);
    return (
        <div className='detailwrap'>
            <div className='imgwrap'>
                <img src={param.imageBig1} alt='img'></img>
                <ul>
                    <li><img src={param.imageBig2} alt='img'></img></li>
                    <li><img src={param.imageBig3} alt='img'></img></li>
                    <li><img src={param.imageBig4} alt='img'></img></li>
                </ul>
            </div>
            <dl>
                <dt>
            {param.name}
                </dt>
                <dd>
            {param.detail}
                </dd>
                <dd>
            {param.price}
                </dd>
                <dd>
                <dfn>구매혜택</dfn>
                <p>회원 적립금 : +1,800원 (상품 : 1,800원)</p>
                </dd>
                              <dd>
                <dfn>원산지</dfn>
                <p>국내산</p>
                </dd>
                              <dd>
                <dfn>상품유형</dfn>
                <p>주문 제작 상품(상품 상세정보 아래쪽에 있는 '주문 전 꼭 읽어주세요'를 반드시 확인해 주세요.)</p>
                </dd>
                              <dd>
                <dfn>배송방법</dfn>
                <p>방문수령 or 퀵서비스 (서울지역만 가능하고, 토/일/공휴일에도 수령 및 배송 가능합니다.)</p>
                </dd>
                              <dd>
                <dfn>배송비 안내</dfn>
                <p>방문수령 선택시 무료, 퀵서비스 선택시 지역별 배송비 별도</p>
                </dd>
         <dd>
                <dfn>배송비</dfn>
                <p>무료</p>
                </dd>
                <button type='button' onClick={() => {
                    dispatch(addCart(param.id));
                    document.querySelector('.modalwrap').style.display = 'block';
                    }
                    
                
                }>장바구니</button>
            </dl>
        <Modal />
        </div>

        )
}