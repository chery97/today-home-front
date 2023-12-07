import {
    HeaderLayout, HeaderContainer, CategoryContainer,
    Logo, LogoA, SideButtonContainer, SearchBox, InputBox, RightBtn, RightBtnBox, GnbLayout, Gnb, GnbFont
} from './Header.styled';

const Header = ({ children, ...props }) => {
    return (
        <HeaderLayout>
            <HeaderContainer>
                <Logo>
                    <a href="/"></a>
                    오늘의집
                </Logo>
                <CategoryContainer>
                    <a>
                        <span>커뮤니티</span>
                    </a>
                    <a>
                        <span>쇼핑</span>
                    </a>
                    <a>
                        <span>이사/시공/생활</span>
                    </a>
                </CategoryContainer>
                <SideButtonContainer>
                    <SearchBox>
                        <InputBox padding="7" type="image" src="https://www.esthermall.co.kr/data/skin/front/moment/img/icon/ico_gnb_search.svg"/>
                        <InputBox search type="text" placeholder="통합검색"/>
                    </SearchBox>
                    <RightBtnBox>
                        <RightBtn>
                            <a href="/login">로그인</a>
                            <a href="/join">회원가입</a>
                            <a href="/service">고객센터</a>
                            <button>
                                <span>글쓰기</span>
                            </button>
                        </RightBtn>
                    </RightBtnBox>
                    <div>

                    </div>
                </SideButtonContainer>
            </HeaderContainer>
            <GnbLayout>
                <Gnb>
                    <a href="/login">
                        <GnbFont>홈</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>추천</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>#채널</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>집들이</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>집사진</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>3D인테리어</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>살림수납</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>콜렉터블</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>홈스토랑</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>핫플레이스</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>육아</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>플랜테리어</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>반려동물</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>캠핑</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>취미</GnbFont>
                    </a>
                    <a href="/login">
                        <GnbFont>이벤트</GnbFont>
                    </a>
                    <span>
                        <ul>
                            <li>
                                <span>1</span>
                                <span></span>
                                <span>룸스프레이</span>
                            </li>
                        </ul>
                    </span>
                </Gnb>

            </GnbLayout>
        </HeaderLayout>
    );
}

export default Header;