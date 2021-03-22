import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Pagination from '../products/Pagination'

function ProductGrid({ products, amount }) {
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(amount)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <Container>

            <div className="cardsContainer">
                {currentPosts.map(product =>
                    <Card product={product} />
                )}
            </div >

            <Pagination
                currentPage={currentPage}
                postPerPage={postPerPage}
                totalPost={products.length}
                paginate={paginate} />
        </Container>
    )
}

export default ProductGrid;

const Container = styled.div`
    display:flex;
    -webkit-flex-wrap: wrap; 
    justify-content:center; 
  flex-wrap: wrap;
  max-width: 80rem; 
  flex-direction:column;
  .cardsContainer{
    display:flex;
    -webkit-flex-wrap: wrap; 
    justify-content:center; 
  flex-wrap: wrap;
  max-width: 80rem; 
  }   
`

