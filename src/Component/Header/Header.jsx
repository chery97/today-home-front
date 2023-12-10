import {
    HeaderLayout,
    HeaderContainer,
    CategoryContainer,
    Logo,
    SideButtonContainer,
    SearchBox,
    InputBox,
    RightBtn,
    RightBtnBox,
    GnbLayout,
    GnbContainer,
    Gnb,
    GnbFont,
    RightBtnCont,
    WriteBtn, CategoryCont, RankLayout, Rankcont, RankTitle, Ranking
} from './Header.styled';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import SwiperCore, { EffectCoverflow, Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Header = ({ children, ...props }) => {
    return (
        <HeaderLayout>
            <HeaderContainer>
                <Logo href="/">
                    <div>오늘의집</div>
                </Logo>
                <CategoryContainer>
                    <CategoryCont active>
                        <span>커뮤니티</span>
                    </CategoryCont>
                    <CategoryCont>
                        <span>쇼핑</span>
                    </CategoryCont>
                    <CategoryCont>
                        <span>이사/시공/생활</span>
                    </CategoryCont>
                </CategoryContainer>
                <SideButtonContainer>
                    <SearchBox>
                        <InputBox padding="7" type="image" src="https://www.esthermall.co.kr/data/skin/front/moment/img/icon/ico_gnb_search.svg"/>
                        <InputBox search type="text" placeholder="통합검색"/>
                    </SearchBox>
                    <RightBtnBox>
                        <RightBtn>
                            <RightBtnCont href="/login" none>로그인</RightBtnCont>
                            <RightBtnCont href="/join">회원가입</RightBtnCont>
                            <RightBtnCont href="/service">고객센터</RightBtnCont>
                            <WriteBtn>
                                <span>글쓰기</span>
                            </WriteBtn>
                        </RightBtn>
                    </RightBtnBox>
                    <div>

                    </div>
                </SideButtonContainer>
            </HeaderContainer>
            <GnbContainer>
                <GnbLayout>
                    <Gnb>
                        <GnbFont href="/login" active1>
                            <span>홈</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>추천</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>#채널</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>집들이</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>집사진</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>3D인테리어</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>살림수납</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>콜렉터블</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>홈스토랑</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>핫플레이스</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>육아</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>플랜테리어</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>반려동물</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>캠핑</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>취미</span>
                        </GnbFont>
                        <GnbFont href="/login">
                            <span>이벤트</span>
                        </GnbFont>
                    </Gnb>
                </GnbLayout>
                <RankLayout className="group">
                    <Swiper
                        style={{height: '20px'}}
                        direction={'vertical'}  // 방향
                        allowTouchMove={false}  // 스크롤 막기
                        loop={true} // 반복
                        autoplay={{ delay: 2000, disableOnInteraction: false }} // 자동재생
                        pagination={false}
                        modules={[Autoplay, EffectCoverflow, Pagination]}
                    >
                        <SwiperSlide>
                            <span>1</span>
                            <span></span>
                            <span>두닷 책상</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>2</span>
                            <span></span>
                            <span>두루마리휴지걸이</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>3</span>
                            <span></span>
                            <span>공기정화 식물</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>4</span>
                            <span></span>
                            <span>오일병</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>5</span>
                            <span></span>
                            <span>옷걸이스탠드</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>6</span>
                            <span></span>
                            <span>벙커침대책상</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>7</span>
                            <span></span>
                            <span>코렐그릇세트</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>8</span>
                            <span></span>
                            <span>냉장고 자석</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>9</span>
                            <span></span>
                            <span>일룸</span>
                        </SwiperSlide>
                        <SwiperSlide>
                            <span>10</span>
                            <span></span>
                            <span>침대 패드</span>
                        </SwiperSlide>
                    </Swiper>

                    <Rankcont >
                        <RankTitle>
                            <header className="flex">인기검색어</header>
                        </RankTitle>
                        <Ranking>
                            <a>
                                <div>
                                    <span>1</span>
                                    <span></span>
                                    <span>두닷 책상</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>2</span>
                                    <span></span>
                                    <span>두루마리휴지걸이</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>3</span>
                                    <span></span>
                                    <span>공기정화 식물</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>4</span>
                                    <span></span>
                                    <span>오일병</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>5</span>
                                    <span></span>
                                    <span>옷걸이스탠드</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>6</span>
                                    <span></span>
                                    <span>벙커침대책상</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>7</span>
                                    <span></span>
                                    <span>코렐그릇세트</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>8</span>
                                    <span></span>
                                    <span>냉장고 자석</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>9</span>
                                    <span></span>
                                    <span>일룸</span>
                                </div>
                            </a>
                            <a>
                                <div>
                                    <span>10</span>
                                    <span></span>
                                    <span>침대 패드</span>
                                </div>
                            </a>
                        </Ranking>
                    </Rankcont>

                </RankLayout>
            </GnbContainer>
        </HeaderLayout>
    );
}

export default Header;