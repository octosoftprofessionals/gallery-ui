import React from 'react';
import styled from 'styled-components';

const CreatorButton = ({imgUrl, user, link}) =>{
    return(
            <ButtonCreator>
                <LinkUser  id="" href={link}>
                    <ImgConteiner className='creator-button-img-cont'>
                        <ImgUser src={imgUrl} alt={user}/>
                    </ImgConteiner>
                    <User>
                        {user}
                    </User>
                </LinkUser>
            </ButtonCreator>
        
    )
}

export default CreatorButton; 

const User = styled.p`
    margin:0;
    font-family:'Bai Jamjuree';
    font-style:normal;
    font-weight: bold;
    font-size: 14px;
    color:#1F1F1F;

    @media (min-width: 600px) {
        font-size: 16px;
    }
`
const ButtonCreator = styled.button`
    padding: 8px;
    padding-right: 20px;
    height:40px;
    background-color: white;
    border:none;
    border-radius:30px;
    box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
    transition: all 300ms cubic-bezier(0.23,1,0.32,1);
    will-change: transform;
    position:absolute;
    top: 83%;
    margin-left:24px;
    :hover{
        box-shadow: 0px 10px 20px rgb(0 0 0 / 10%);
        transform: translateY(-2px);
    }
    @media (min-width: 600px) {
        padding: 11px;
        padding-right: 20px;
        height:56px;
        top: 83%;
    }
`
const ImgUser = styled.img`
    margin:0;
    width:34px;
`
const ImgConteiner = styled.div`
    width: 24px;
    height: 24px;
    border-radius:50%;
    overflow: hidden;
    margin-right: 10px;
    @media (min-width: 600px) {
        width:34px;
        height: 34px;
    }
`

const LinkUser = styled.a`
    font-family: Avenir, Avenir Next, Helvetica Neue, 'Bai Jamjuree Bold';
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
`
