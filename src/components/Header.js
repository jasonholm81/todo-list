import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
        <HeaderItem>
             <i className="fas fa-bars"></i>
        </HeaderItem>

        <HeaderItem>
            <i className="fas fa-border-all"></i>
            <span>Dashboard</span>
         </HeaderItem>

        <HeaderItem>
            <i className="fas fa-images"></i>
            <span>Collections</span>
        </HeaderItem>

        <Placeholder />

        <HeaderItem>
            
            <Profile>
                <img src="https://lh3.googleusercontent.com/a/AAcHTtetWKzzVoOwS9xl7LMysGc2U_gBNk-sG7vqXausdPNE2G7_=s96-c-rg-br100" alt="profile" />
            </Profile>
        </HeaderItem>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    background-color: #20212d;
    padding: 0 20px;
    -webkit-box-shadow: 0px 4px 15px 0px #121212;
    box-shadow: 0px 4px 15px 0px #121212;
    position: sticky;
    top: 0;
`

const HeaderItem = styled.div`
    color: #eee;
    padding: 10px 16px;
    border-radius: 4px;

    span {
        margin-left: 10px;
        font-weight: 500;
    }

    &:hover {
        background-color: #18181f;
        cursor: pointer;
        transition: 0.3s;
    }
`
const Profile = styled.div`
    display: flex;
    align-items: center;

    img {
        height: 30px;
        border-radius: 50%;
    }
`

const Placeholder = styled.div`
    flex: 1;

`



