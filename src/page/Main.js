import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Link } from 'react-router-dom';
import './Main.css';
import data from '../data.json'
import { useParams } from 'react-router-dom';
import SwiperCore, { Autoplay } from "swiper"
import img1 from '../assets/funding1.PNG'
import img2 from '../assets/funding2.PNG'
import img3 from '../assets/funding3.PNG'
import img4 from '../assets/funding4.PNG'

export default function Main() {
         SwiperCore.use([Autoplay]);
    return (
        <div id="containerwrap">
                <Swiper
      spaceBetween={50}
      slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
    >
      <SwiperSlide><img src="https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/8ba52ca401508fe1443633ef87990e7a_16627.jpg" alt='img'></img></SwiperSlide>
      <SwiperSlide><img src='https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/af62038ddd0477b0fcde5cc3ce11ac11_71087.jpg' alt='img'></img></SwiperSlide>
      <SwiperSlide><img src="https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/773d448db32adf53b62a3d6723ff22d2_15829.jpg" alt='img'></img></SwiperSlide>
      <SwiperSlide><img src="https://bestfruit1.cdn-nhncommerce.com/data/skin/front/on_agnes_p/img/banner/slider_511517418/7433264d88ff3f6ff710da576c4c4b0b_58473.jpg" alt='img'></img></SwiperSlide>
            </Swiper>
            <h2>
                펀딩과일
            </h2>
            <div className='banner'>
              <Swiper
      spaceBetween={50}
      slidesPerView={1}
        onSwiper={(swiper) => console.log(swiper)}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
    >
                    <SwiperSlide>
                        <div className='swiperwrap'>
                            
                        <img src={img1} alt='img1'></img>
                            <dl>
                                <h2>펀딩과일</h2>
                        <dt>[선물과일] 진맛과 한라봉 세트 2호</dt>
                            <dd>과일 큐레이터가 엄선한 프리미엄 제철과일</dd>
                            </dl>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperwrap'>
                            
                        <img src={img2} alt='img2'></img>
                            <dl>
                                <h2>펀딩과일</h2>
                        <dt>[선물과일] 진맛과 과일 토마토 선물세트</dt>
                            <dd>귀하고 좋은 것만 드리고 싶은 마음을 담았습니다</dd>
                            </dl>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperwrap'>
                            
                        <img src={img3} alt='img3'></img>
                            <dl>
                                <h2>펀딩과일</h2>
                        <dt>[선물과일] 진맛과 메론 세트 2호</dt>
                            <dd>과일 큐레이터가 엄선한 프리미엄 제철과일</dd>
                            </dl>
                            </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='swiperwrap'>
                           
                        <img src={img4} alt='img4'></img>
                            <dl>
                                 <h2>펀딩과일</h2>
                        <dt>[선물과일] 진맛과 복숭아 세트 3호</dt>
                            <dd>과일 큐레이터가 엄선한 프리미엄 제철과일</dd>
                        </dl>
                        </div>
                    </SwiperSlide>
            </Swiper>
            </div>
            <h2>프리미엄 선물세트</h2>
            <ul className='product'>
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