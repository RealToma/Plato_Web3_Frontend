import { Box } from '@material-ui/core';
import styled from "styled-components";
import React, { useEffect } from "react";
import IMG_Button1 from "../../assets/images/button01.png"
import IMG_Advertising from "../../assets/images/advertising01.jpeg"
import IMG_Contact from "../../assets/images/contact01.png"
import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa"
import { BsMedium } from "react-icons/bs"
import PDF from "../../assets/memo/PLATO'S MEMORANDUM.pdf"
// import CustomBtn from '../../components/CustomBtn';
// import { useWeb3React } from "@web3-react/core";
// import { injected, walletConnect, trustWallet, binance_wallet } from "../../utils/connectors";
// import { ethers } from "ethers";
// import { CONTRACTS } from "../../utils/constants";
// import { TRVL_ABI, THOMAS_ABI } from "../../utils/abi";

const Content = () => {
    useEffect(() => {

    })

    return (
        <StyledComponent>
            <HeaderPart>
                <HeaderPart01>
                    <Box display={"flex"}>
                        <BuyPart>
                            <BuyButton onClick={() => {
                                window.open("https://app.uniswap.org", "_blank");
                            }}>
                                BUY ON UNISWAP
                            </BuyButton>
                        </BuyPart>
                        <LogoPart>
                            PLATOS ACADEMY
                        </LogoPart>
                    </Box>
                    <LinkPart>
                        <Link01>HOME</Link01>
                        <Link01>STAKING</Link01>
                        <Link01>SWAP</Link01>
                        <Link01 onClick={() => {
                            window.open(PDF, "_blank");
                        }}>READ PLATOS MEMORANDUM</Link01>
                    </LinkPart>
                </HeaderPart01>
            </HeaderPart>
            <ContentPart>
                <LeftPart01>
                    <img src={IMG_Advertising} width="80%" height={"100%"} style={{
                        borderRadius: "30px"
                    }} alt="" />
                </LeftPart01>
                <RightPart01>
                    <Box display={"flex"} width={"90%"} height={"100%"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                        <TitleLetter01>$TRUTH: Liberating Humanity</TitleLetter01>
                        <ContentLetter01>Founded in 387 BC, The Academy was home to some of the greatest minds mankind has ever seen</ContentLetter01>
                        <ContentLetter01>The conversations had, ideas formulated and thought experiments conducted paved the way for the evolution in all realms of life we experience today</ContentLetter01>
                        <ContentLetter01>And one scratches their head to wonder - where did we take a wrong turn to create the world we live in today?</ContentLetter01>
                        <ContentLetter01>The Academy doors have reopened. It has but one intent</ContentLetter01>
                        <ContentLetter01>Liberate Humanity with $TRUTH</ContentLetter01>
                        <ContentLetter01>…by building new systems which create true sovereignty for all by making Real Universal Education Free For All & in the process destroy societies' broken structures that tell us lies, slander, and falsities of what’s possible for humans</ContentLetter01>
                    </Box>
                </RightPart01>
            </ContentPart>
            <FooterPart>
                <ContactBtn onClick={() => {

                }}><FaTwitter /></ContactBtn>
                <ContactBtn onClick={() => {
                    window.open("https://medium.com/@platowrites", "_blank");
                }}><BsMedium /></ContactBtn>
                <ContactBtn onClick={() => {

                }}><FaDiscord /></ContactBtn>
                <ContactBtn onClick={() => {

                }}><FaTelegramPlane /></ContactBtn>
            </FooterPart>
        </StyledComponent >
    );
}

const StyledComponent = styled(Box)`
    display: flex;
    position: relative;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    font-family: 'MedievalSharp', cursive;
    @media (max-width: 1000px) {
        transition: 0.3s;
        height: 100%;
    }
`
const HeaderPart = styled(Box)`
    display: flex;
    position: fixed;
    width: 100%;
    height: 150px;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.4);
    color: white;
`
const HeaderPart01 = styled(Box)`
    display: flex;
    flex-direction: row;
    width: 90%;
    @media (max-width: 1500px) {
        transition: 0.5s;
        width: 100%;
    }
    @media (max-width: 1000px) {
        transition: 0.5s;
        flex-direction: column;
    }

`

const ContentPart = styled(Box)`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 100vh;
    margin-top: 150px;
    @media (max-width: 1000px) {
        transition: 0.5s;
        flex-direction: column;
        margin-bottom: 30px;
    }
`
const BuyPart = styled(Box)`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    @media (max-width: 1000px) {
        transition: 0.5s;
        flex: 2;
    }

`
const LogoPart = styled(Box)`
    display: flex;
    flex: 3;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    font-weight: 700;
    color: white;
    @media (max-width: 1500px) {
        transition: 0.5s;
        font-size: 2.5rem;
    }
    @media (max-width: 1300px) {
        transition: 0.5s;
        font-size: 2.2rem;
    }
    @media (max-width: 700px) {
        transition: 0.5s;
        font-size: 2rem;
    }
    @media (max-width: 500px) {
        transition: 0.5s;
        font-size: 1.6rem;
    }
`
const LinkPart = styled(Box)`
    display: flex;
    flex: 5;
    align-items: center;
    justify-content: center;
    @media (max-width: 700px) {
        transition: 0.5s;
        display: none;
    }
`
const BuyButton = styled(Box)`
    display: flex;
    width: 230px;
    height: 90px;
    align-items: center;
    justify-content: center;
    background-image: url(${IMG_Button1});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-weight: 700;
    font-size: 1.2rem;
    color: rgb(21,21, 21);
    &:hover{
        cursor: pointer;
        color: white;
        transition: 0.3s;
    }
    @media (max-width: 1300px) {
        transition: 0.3s;
        width: 200px;
        height: 70px;
        font-size: 1rem;
    }
    @media (max-width: 700px) {
        transition: 0.3s;
        width: 180px;
        height: 70px;
        font-size: 1rem;
    }
    @media (max-width: 500px) {
        transition: 0.3s;
        width: 160px;
        height: 50px;
        font-size: 0.8rem;
    }
`
const Link01 = styled(Box)`
    display: flex;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.5rem;
    font-weight: 500;
    &:hover{
        cursor: pointer;
        color: rgb(150, 150, 150);
        transition: 0.3s;
    }
    @media (max-width: 1300px) {
        transition: 0.5s;
        font-size: 1.2rem;
    }
`
const LeftPart01 = styled(Box)`
    display: flex;
    flex: 1;
    width: 100%;
    height: 80%;
    justify-content: center;
    align-items: center;
    @media (max-width: 1000px) {
        transition: 0.5s;
        margin-top: 50px;
        margin-bottom: 50px;
    }
`
const RightPart01 = styled(Box)`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80%;
    /* flex-direction: column;
    justify-content: center;
    align-items: center; */
`
const FooterPart = styled(Box)`
    display: flex;
    margin-top:30px;
    margin-bottom:30px;
    align-items: center;
    justify-content: center;
`
const ContactBtn = styled(Box)`
    display: flex;
    width: 70px;
    height: 70px;
    align-items: center;
    justify-content: center;
    background-image: url(${IMG_Contact});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-left: 20px;
    margin-right: 20px;
    color: rgb(21,21, 21);
    font-size: 1.3rem;
    &:hover{
        cursor: pointer;
        color: white;
        transition: 0.3s;
    }
    @media (max-width: 500px) {
        transition: 0.3s;
        margin-left: auto;
        margin-right: auto;
    }
`
const TitleLetter01 = styled(Box)`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase; 
    color: white;
    font-size:2.5rem;
    font-weight: 600;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width: 1500px) {
        transition: 0.3s;
        font-size: 2.2rem;
    }
    @media (max-width: 1300px) {
        transition: 0.3s;
        font-size: 2rem;
    }
`
const ContentLetter01 = styled(Box)`
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    text-transform: uppercase; 
    color: white;
    font-size:1.5rem;
    font-weight: 500;
    margin-top: auto;
    margin-bottom: auto;
    @media (max-width: 1500px) {
        transition: 0.3s;
        font-size: 1.3rem;
    }
    @media (max-width: 1300px) {
        transition: 0.3s;
        font-size: 1.2rem;
    }
`

export default Content;