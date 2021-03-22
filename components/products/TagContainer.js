import styled from 'styled-components'
import useAppContext from '../../context/context'

function TagContainer() {
    const { variableState, setVariableState } = useAppContext()

    const handleRecentButton = () => {
        const mostRecent = variableState.products.sort(function (a, b) {
            if (a._id > b._id) {
                return 1;
            }
            if (a._id < b._id) {
                return -1;
            }
            return 0;
        });
        setVariableState({ ...variableState, products: [...mostRecent] });
    }

    const handleLowButton = () => {
        const lowestPriceOrder = variableState.products.sort(function (a, b) {
            if (a.cost > b.cost) {
                return 1;
            }
            if (a.cost < b.cost) {
                return -1;
            }
            return 0;
        });
        setVariableState({ ...variableState, products: [...lowestPriceOrder] });
    }

    const handleHighButton = () => {
        const highPriceOrder = variableState.products.sort(function (a, b) {
            if (a.cost < b.cost) {
                return 1;
            }
            if (a.cost > b.cost) {
                return -1;
            }
            return 0;
        });

        setVariableState({ ...variableState, products: [...highPriceOrder] });
    }

    return (
        <Container>
            <p>
                Sort by
            </p>
            <div>
                <Button onClick={() => handleRecentButton()} >Most recent </Button>
                <Button onClick={() => handleHighButton()}>Highest price </Button>
                <Button onClick={() => handleLowButton()}>Lowest price </Button>
            </div>


        </Container>
    )
}

export default TagContainer

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
    text-align:center;
    align-items:center;
    
    flex-direction:column;
    padding:10px 20px;
    font-size: 1rem;
    @media ${device.tablet} {
        font-size: 1.25rem;
        flex-direction:row;
        justify-content:center;
      }
`

const Button = styled.button`
color: #a3a3a3;
margin: 5px 2px;
padding: 10px 15px;
background-color: #ebebeb;
border-radius: 9999px;
border: none;
font-size:1rem;
:hover {
    color: #cdf6fd;
    background-color: #0ad4fa;
}
:focus{
    outline: none;
}
@media ${device.tablet} {
    padding: 10px 25px;
    margin: 0 10px;
    font-size: 1.25rem;
  }
`