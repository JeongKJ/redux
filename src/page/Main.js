import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import './Main.css';

export default function Main() {
    return (
        <div id="containerwrap">
                <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
            </Swiper>
            <h2>소제목</h2>
            <ul>
                <li>상품1</li>
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
            <h2>소제목2</h2>
            <ul>
                <li>
                    <Link to='/'>
                        <h3>카테고리 1</h3>
                        <figure>
                            <img src='' alt='이미지1'></img>
                            <figcaption>
                                sdasdasd
                            </figcaption>
                        </figure>
                    </Link></li>
                                <li>
                    <Link to='/'>
                        <h3>카테고리 1</h3>
                        <figure>
                            <img src='' alt='이미지1'></img>
                            <figcaption>
                                sdasdasd
                            </figcaption>
                        </figure>
                    </Link></li>
                                <li>
                    <Link to='/'>
                        <h3>카테고리 1</h3>
                        <figure>
                            <img src='' alt='이미지1'></img>
                            <figcaption>
                                sdasdasd
                            </figcaption>
                        </figure>
                    </Link></li>
                                <li>
                    <Link to='/'>
                        <h3>카테고리 1</h3>
                        <figure>
                            <img src='' alt='이미지1'></img>
                            <figcaption>
                                sdasdasd
                            </figcaption>
                        </figure>
                </Link></li>
            </ul>
        </div>
    )
}