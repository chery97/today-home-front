import styled, {css} from 'styled-components';

export const HeaderLayout = styled.div`
    max-width: 2545px;
    border-bottom: 1px solid #EAEDEF;
`;

export const GnbLayout = styled.div`
    max-width: 2545px;
    height: 51px;
    border-top: 1px solid #EAEDEF;
  
    span {
      height: inherit;
      margin: 0 5px;
    }
`;

export const Gnb = styled.nav`
    display: flex;
    max-width: 1256px;
    margin: 0 auto;
    padding: 0 60px;
    height: inherit;
    align-items: center;
  
    a {
      padding: 0 10px;
      margin: -4px;
      text-decoration: none;
    }
`;

export const GnbFont = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #2F3438;
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
    a {
      padding: 21px 5px 15px;
      margin: 0 10px;
      font-weight: bold;
      font-size: 18px;
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
  
  a {
    padding: 0 10px;
    border-left: 1px solid #EAEDEF;
    color: #2F3438;
    text-decoration: none;

    &:first-child {
      border-left: none;
    }
  }
  
  button {
    width: 92px;
    height: 40px;
    background-color: #35C5F0;
    border-radius: 4px;
    border: none;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 400;
  }
`;

export const Logo = styled.div`
    padding-right: 35px;
    font-size: 25px;
    font-weight: bold;
    width: 112px;
    height: 30px;
  
    a {
      width: 100%;
    }
`;

export const LogoA = styled.a`
    
`;