import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Pagination from '../products/Pagination'

function HistoryContainer({ history }) {

    let [currentPage, setCurrentPage] = useState(1)

    let postsPerPage = 12;
    let indexOfLastPost = postsPerPage * currentPage;
    let indexOfFirsPost = indexOfLastPost - postsPerPage;

    let currentPosts = history.slice(indexOfFirsPost, indexOfLastPost);

    const handleNextPost = () => {
        if (indexOfLastPost < history.length) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handleLastPost = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    return (
        <Container>

            <Grid>
                {currentPosts.map(product => (
                    <ProductHistoryCard>

                        <p>{product.name}</p>

                        <div className="secondary-text">
                            Points: {product.cost}
                        </div>
                        <div className="secondary-text">
                            Category: {product.category}
                        </div>

                    </ProductHistoryCard>
                ))}
            </Grid>
            <ButtonContainer>
                <Button onClick={handleLastPost}>{"<"}</Button>
                <Button onClick={handleNextPost}>{">"}</Button>
            </ButtonContainer>

        </Container>
    )
}

export default HistoryContainer;


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
    flex-direction:column;
    padding-bottom: 20px;
`
const Grid = styled.div`
display:flex;
flex-direction:column;
max-width: 64rem;
@media ${device.tablet} {
    font-size: 1.25rem;
    flex-direction: row;
    -webkit-flex-wrap: wrap; 
    justify-content:center; 
    flex-wrap: wrap;
  }
@media ${device.laptop} {
    font-size: 1.25rem;
    flex-direction: row;
    -webkit-flex-wrap: wrap; 
    justify-content:center;
    flex-wrap: wrap;
  }

`

const ProductHistoryCard = styled.div`
    display:flex;
    flex-direction: column;
    align-items:center;
    margin: 10px 10px;
    padding: 25px 25px;
    width: 220px;

    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    
    :hover {
        transform: translateY(-5px);

    }
    
    .secondary-text {
        font-size: 0.9rem;
        opacity: 0.5;
    }
`

const ButtonContainer = styled.div`
  display: flex; 
  justify-content: center;
`
const Button = styled.button`
color: #a3a3a3;
margin: 10px;
padding: 15px 20px;
border-radius: 99999px;
border: none;
font-size:1rem;
:hover {
    color: #cdf6fd;
    background-color: #0ad4fa;
}
:active {
    color: #cdf6fd;
    background-color: #0ad4fa;
}
`