import styled, { keyframes } from 'styled-components';
import { useState, useEffect } from 'react';
import { redeemItem } from '../../data/api';
import useAppContext from '../../context/context';
import Link from 'next/link';
import Image from 'next/image'

function Card({ product }) {

    const { variableState, setVariableState } = useAppContext();
    const { user } = variableState;
    const [redeem, setRedeem] = useState(false);
    const [displayMessage, setDisplayMessage] = useState(false)

    async function handleRedeemProduct(productId) {
        const user = await redeemItem(productId);
        setVariableState({ ...variableState, user });
        setDisplayMessage(true)
        setRedeem(true);
        setTimeout(function () {
            setRedeem(false);
            setDisplayMessage(false)
        }, 5000);
    }

    return (
        <>

            <Container>
                <ProductCard>

                    <div>
                        <img width={252} height={182} src={product.img.url} alt={product.name} />
                    </div>
                    <div>
                        {displayMessage === true ? <ProductName>Redeemed product!!</ProductName> :
                            <>
                                <ProductCategory>{product.category}</ProductCategory>
                                <ProductName>{product.name}</ProductName>
                                <ProductButton onClick={() => handleRedeemProduct(product._id)}>
                                    <p>Redeem now</p> <div className="cost-coin"><p>{product.cost}</p><Image src="/icons/coin.svg" alt="logo" width={30} height={30} /></div>
                                </ProductButton>
                            </>
                        }
                    </div>
                </ProductCard>

                {/*                 <div className="overlay">


                    <h2 className="overlay-cost">{product.cost}</h2>
                    <div>
                        {product.cost > user.points ?
                            <Link href="/points">

                                <MoreCoinButton>
                                    You need {product.cost} coins
                            </MoreCoinButton>
                            </Link>
                            :
                            <>
                                <ProductButton onClick={() => handleRedeemProduct(product._id)}>
                                    Redeem now
                                </ProductButton>
                            </>
                        }
                    </div>

                </div> */}
            </Container>
        </>
    )
}

export default Card;

const Container = styled.div`
    position: relative;
    background-color: white;
    margin: 10px;
    padding:15px;
    box-shadow: 3px 3px 5px -4px gray;
    border-radius:10px;
    :hover {
        box-shadow: 5px 5px 5px 3px #bdbdbd;
    }
    .overlay {
        display: flex;
        width:100%;
        height:100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        opacity: 1;
        top: 0%;
        left: 0%;
        background: rgba(37, 187, 241, 0.8);
        opacity: 0;
        transition: 0.5s;
        z-index: 2;
        :hover {
            opacity:1;
            z-index:2;
            box-shadow: 5px 5px 5px 3px #bdbdbd;
            transform: translateY(-5px);
            
        
        }
        .overlay-cost {
            color:white;
            font-size: 2rem;
        }
    }
    
`

const ProductCard = styled.div`
    opacity:1;
    display:block;
    transition: .5x ease;
    backface-visibility: hidden;
    color: #bdbdbd;
    border-radius: 5px; 
    :hover {
        color:white;
        z-index:0;
    }
    
`
const Overlay = styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    border-radius: 7px;
    opacity: 1;
    top: 0%;
    left: 0%;
    background: rgba(37, 187, 241, 0.8);
    opacity: 0;
    transition: 0.5s;
    z-index: 2;
    :hover {
        opacity:1;
        z-index:2
    }
}
`
const Message = styled.div`
    display: flex;
    width:100%;
    height:100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    opacity: 1;
    top: 0%;
    left: 0%;
    background: rgba(37, 187, 241, 0.8);
    opacity: 0;
    transition: 0.5s;
    z-index: 2;
    :hover {
        opacity:1;
        z-index:5
    }
}
`

const ProductName = styled.p`
    margin: 10px 0;
    color: black;
    font-size: 1.2rem; 
`

const ProductCategory = styled.p`
    margin: 5px 0;
    color: #979797;
    border-top: 1px solid  #bdbdbd;
    padding-top: 10px
`

const ProductButton = styled.button`
    display:flex;
    justify-content:space-between;
    padding: 0 15px;
    border-radius: 10px;
    background-color:#0ad4fa;
    width:100%;
    align-text:center;
    border: none;
    font-size:1rem;
    color: white;
    :hover {
        background-color: #0ad4fa;
        opacity: 0.8;
        cursor:pointer;
        transform: translateY(-2px);
    }
    .cost-coin {
        display:flex;
        align-items: top;
    }
    p {
        padding-right:5px;
    }
`

const MoreCoinButton = styled.button`
    color: black;
    margin: 0 10px;
    padding: 5px 25px;
    border-radius: 9999px;
    background-color:white;
    border: none;
    font-size:1.25rem;

:hover {
    color: white;
    border-radius: 9999px;
    background-color: red;
    cursor:pointer;
}
`
/* these components will be used for the skeleton card */
const fadeIn = keyframes`
0% {
    background-position: 100% 50%;
    }
    100%{
        background-position: 0% 50%;
    }
`

const Load = styled.div`
    color:transparent;
    background: linear-gradient(100deg, #eceff1, #f6f7f8, #eceff1 70%);
    animation: 1.2s ${fadeIn} ease-in-out infinite;
    background-size: 400%;

`
