import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import './Main.css';
import data from '../data.json'
import { useParams } from 'react-router-dom';

export default function Main() {
         
    return (
        <div id="containerwrap">
                <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img src='https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/0dba880bbd0eef3c0fcd22d712ffdc4b_85059.jpg' alt='img'></img></SwiperSlide>
      <SwiperSlide><img src='https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/af62038ddd0477b0fcde5cc3ce11ac11_71087.jpg' alt='img'></img></SwiperSlide>
      <SwiperSlide><img src="https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/773d448db32adf53b62a3d6723ff22d2_15829.jpg" alt='img'></img></SwiperSlide>
      <SwiperSlide><img src="https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/7433264d88ff3f6ff710da576c4c4b0b_58473.jpg" alt='img'></img></SwiperSlide>
            </Swiper>
            <ul>
                <li>상품2</li>
                <li>상품2</li>
                <li>상품3</li>
                <li>상품4</li>
            </ul>
            <div className='banner'>
                    <dl>
                    <dt>name</dt>
                    <dd>detail</dd>
                    <dd>price</dd>
                </dl>
                <img src='' alt='배너 이미지'></img>

            </div>
            <h2>프리미엄 선물세트</h2>
            <ul>
                {data.products.map((data) => <li key={data.id}>
                    <Link to={`/${data.slug}`}>
                        <figure>
                            <img src={data.imageSmall} alt='이미지1'></img>
                            <figcaption>
                            <h3>{data.name}</h3>
                                <p>{data.price} 원</p>
                            </figcaption>
                        </figure>
                    </Link>
                </li>)}
            </ul>
        </div>
    )
}