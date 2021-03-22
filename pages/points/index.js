import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import { addPoints } from '../../data/api';
import useAppContext from "../../context/context";
import { getHistory, getProducts, getUser } from '../../data/api'
import { useEffect } from 'react'

function Points({ products, user, history }) {

    console.log(history.reduce(function (total, currentValue, currentIndex, arr) {
        return currentValue.cost + total
    }, 0))

    const { variableState, setVariableState } = useAppContext()

    async function handleAddPoints(amount) {
        const user = await addPoints(amount);
        setVariableState({ ...variableState, user });
    }

    useEffect(() => {
        if (!variableState.products || !variableState.user) {
            setVariableState({ ...variableState, products, user });
        }
    }, []);


    if (!variableState.products || !variableState.user) return <></>

    return (
        <div>
            <Navbar />
            <Container >
                <h1>Add Coins to your Wallet!</h1>
                <ContainerColumn >
                    <Button onClick={() => handleAddPoints(1000)} >1000</Button>
                    <Button onClick={() => handleAddPoints(5000)} >5000</Button>
                    <Button onClick={() => handleAddPoints(7500)} >7500</Button>
                </ContainerColumn>

            </Container>

        </div>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            products: await getProducts(),
            user: await getUser(),
            history: await getHistory(),
        },
    };
}

export default Points;

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};


const Container = styled.div`
    display:flex;
    flex-direction: column;
    text-align:center;
    background-color: #f9f9f9;
    padding: 25px;
    
`

const ContainerColumn = styled.div`
  display:flex;
  margin: 10px auto;
  flex-direction: column;
  max-width: 20rem;
  @media ${device.tablet} {
    flex-direction:row;
  }
`

const Button = styled.button`
display:flex;
flex-direction:column;
color: #a3a3a3;
margin: 20px 10px;
padding: 15px 25px;
border-radius: 9999px;
background-color: #ebebeb;
border: none;
font-size:1.25rem;
:hover {
    color: #cdf6fd;
    border-radius: 9999px;
    background-color: #0ad4fa;
}
:focus{
    outline: none;
}
`
