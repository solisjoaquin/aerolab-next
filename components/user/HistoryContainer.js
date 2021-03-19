import styled from 'styled-components'
import { useState, useEffect } from 'react'
import Pagination from '../products/Pagination'

function HistoryContainer({ history }) {

    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(6)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = history.slice(indexOfFirstPost, indexOfLastPost)

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <Container>
            <Grid>
                {currentPosts.map(product => (
                    <ProductHistoryCard><div>
                        <div>
                            <p>{product.name}</p>

                        </div>
                        <div>
                            {product.cost}
                        </div>
                        <div>
                            {product.category}
                        </div>

                    </div></ProductHistoryCard>
                ))}
            </Grid>
            <div>
                <Pagination
                    postPerPage={postPerPage}
                    totalPost={history.length}
                    paginate={paginate} />
            </div>
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
    height: 400px; 
    flex-wrap: wrap;
  }

`

const ProductHistoryCard = styled.div`
    margin: 10px 15px;
    padding: 25px 25px;
    width: 250px;
    height:120px;
    background-color: white;
    border: 1px solid black;
    border-radius: 5px;
    
`