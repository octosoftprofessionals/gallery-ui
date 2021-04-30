import React from 'react';
import styled from 'styled-components';

const CreatorButton = ({url_profile, user, link}) =>{
    return(
            <ButtonCreator>
                <LinkUser  id="" href={link}>
                    <ImgConteiner className='creator-button-img-cont'>
                        <ImgUser src={url_profile} alt={user}/>
                    </ImgConteiner>
                    <User>
                        @{user}
                    </User>
                </LinkUser>
            </ButtonCreator>
        
    )
}

export default CreatorButton; 

const User = styled.p`
    margin:0;
    font-family: Avenir, Avenir Next, Helvetica Neue, 'Bai Jamjuree Bold';
    font-style:normal;
    font-size: 16px;
    color:#1F1F1F;
`
const ButtonCreator = styled.button`
    padding: 11px;
    padding-right: 20px;
    height:56px;
    background-color: white;
    border:none;
    border-radius:30px;
    box-shadow: 0px 10px 20px rgb(0 0 0 / 5%);
    transition: all 300ms cubic-bezier(0.23,1,0.32,1);
    will-change: transform;
    :hover{
        box-shadow: 0px 10px 20px rgb(0 0 0 / 10%);
        transform: translateY(-2px);
    }
`
const ImgUser = styled.img`
    margin:0;
    width:34px;
`
const ImgConteiner = styled.div`
    width:34px;
    height: 34px;
    border-radius:50%;
    overflow: hidden;
    margin-right: 10px;
`

const LinkUser = styled.a`
    font-family: Avenir, Avenir Next, Helvetica Neue, 'Bai Jamjuree Bold';
    width:120px;
    display:flex;
    justify-content:center;
    align-items:center;
    text-decoration: none;
`
