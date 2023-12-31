# 제목

### 소개

가상 클라이언트 A씨를 가정하여 만든 개인 포트폴리오 사이트입니다.

### 배포링크

배포방식은 AWS:S3의 간이 배포를 이용하였습니다.
<a href="http://redux-portfolio.s3-website.ap-northeast-2.amazonaws.com/">프로젝트 보러가기</a>

### 개발 도구 및 환경

##### 개발환경: VScode, npm, Parcel-bundler

##### 개발도구: HTML, CSS, Javascript, jQuery, React

### 프로젝트 설명

#### 프로젝트 계획서

###### <a href="https://docs.google.com/presentation/d/1sAghO-7NNyPlmSWwQrXYe0CclkAHf0vqWkRYPjpUgA0/edit?usp=sharing">계획서기열람하기</a>

#### 헤더(Header) & 푸터(Footer)

- 헤더와 푸터는 각페이지의 Html에 삽입하고 js와 css를 공유하여 import하는 방식을 이용했습니다.

#### 메인페이지(home.js)

1. Swiper를 사용하여 광고 배너가 보이도록 만들었습니다.
2. 전체 상품 데이터는 Json으로 작성하여 불러오는 방식을 이용했습니다.

#### 상품상세 페이지(detail.js)

1. 상품 페이지에서 제품 클릭시 상세페이지(detail.js)로 이동하여 상세정보가 나타나게 하고 카트에 넣는 기능을 추가
2. 카트에 넣을때 해당 데이터는 redux를 활용하여 배열에 추가

#### 장바구니 페이지(wishlist.js)

1. 상세페이지에서 장바구니 추가시 장바구니 페이지로 이동되고 장바구니 페이지에 아이템이 추가되며 삭제시 배열에서 삭제
2. 장바구니 item 추가 삭제 시 자동으로 header에 장바구니 숫자가 변경

### 자기평가

#### 부족한점

1. redux를 처음 써봐서 사용할 때 어려움을 겪었고 그러면서 많은 시간을 쓰게 되었습니다.
   
2. 시간부족에 따른 기능을 많이 추가하지 못하였습니다. 추후에 더 많은 기능을 추가하도록 할 예정입니다.
