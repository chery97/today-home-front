import styled, {css} from 'styled-components';
import tw from "twin.macro";

export const HeaderLayout = styled.div`
    max-width: 2545px;
    border-bottom: 1px solid #EAEDEF;
`;

export const GnbContainer = styled.div`
  display: flex;
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 60px;
  height: inherit;
  align-items: center;
  ${tw`
        overflow-hidden
    `}
`;

export const GnbLayout = styled.div`
  height: 51px;

  span {
    height: inherit;
    margin: 0 5px;
  }
`;

export const Gnb = styled.nav`
     display: flex;
     max-width: 920px;
  
    ${tw`
        overflow-hidden
        h-full
    `}
`;

export const GnbFont = styled.a`
    ${tw`
        text-tit-black
        font-bold
        text-base
        hover:text-sky-blue
        h-full
        px-6px
        py-12px
        w-auto
        decoration-0
    `}
    
    span {
      ${tw`
        block
        whitespace-nowrap
        h-full
      `}
    }

    ${props =>
            props.active1 &&
            tw`
          text-sky-blue
          border-b-2
          border-sky-blue
        `
    }
`;

export const RankLayout = styled.div`
  ${tw`
    h-51px
    flex
    justify-center
    items-center
  `}
`;

export const Rankcont = styled.div`
  ${tw`
    invisible
    group-hover:visible
    shadow-lg
    rounded-md
    translate-y-56
    bg-white
    absolute
    w-270px
    h-480px
    z-50
    py-5
  `}
`;

export const RankTitle = styled.div`
  ${tw`
    mr-4
    mb-2
    ml-4
  `}
`;

export const Ranking = styled.div`
    ${tw`
        w-full
        h-full
    `}
    
    a {
      ${tw`
        flex
        h-10
        mx-4
        my-2
        items-center
      `}
    }

      div {
        ${tw`
            h-6
            w-full
          `}
      }
  
    span {
      &&:first-child {
        width: 20px;
        height: 20px;  
      }
    }
`;

export const HeaderContainer = styled.div`
    max-width: 1256px;
    margin: 0 auto;
    padding: 10px 50px;
    height: 80px;
    align-items: center;
    display: flex;
    justify-content: space-between;
`;

export const CategoryContainer = styled.div`
    width: 378px;
    display: flex;
    -webkit-flex: 1 1;
    -ms-flex: 1 1;
    flex: 1 1;
`;

export const CategoryCont = styled.a`
      padding: 21px 5px 15px;
      margin: 0 10px;
      font-weight: bold;
      font-size: 18px;
      ${tw`text-tit-black hover:text-sky-blue cursor-pointer`}
      ${props =>
          props.active &&
          tw`
          text-sky-blue
          `
      }
      span {
        padding: 4px;
        margin: -4px;
        font-size: 18px;
        font-weight: bold;
      }
`;

export const SideButtonContainer = styled.div`
    display: flex;
    flex: 0 1 650px;
`;

export const SearchBox = styled.div`
    border: 1px solid #DADDE0;
    width: 296px;
    height: 38px;
    border-radius: 4px;
    padding: 0px 10px;
    display: flex;
`;

export const InputBox = styled.input`
  padding: ${props => props.padding || 0}px;
  ${props =>
      props.search &&
      css`
        width: 100%;
        outline: none;
        border: none;
        font-size: 16px;
        line-height: 24px;
  `};
`;

export const RightBtnBox = styled.div`
  position: relative;
  width: 310px;
`;

export const RightBtn = styled.div`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const RightBtnCont = styled.a`
  ${tw`
    text-sm
    px-3
    border-l
    text-tit-black
  `}
  
  ${props =>
    props.none &&
    tw`
      border-none
      `
  }
`;

export const WriteBtn = styled.button`
  ${tw`
    inline-flex
    items-center
    rounded-md
    w-24
    h-10
    bg-sky-blue
    hover:bg-sky-blue-hover
  `}
  
  & {
    span {
      ${tw`inline-flex rounded-md border-none items-center text-sm w-full text-white px-4 h-10`}
    }
  }
`;

export const Logo = styled.a`
  ${tw`
    text-2xl
    text-tit-black
    font-bold
    w-112px
    h-30px
    cursor-pointer
  `}
  
    div {
      width: 100%;
      height: 100%;
    }
`;