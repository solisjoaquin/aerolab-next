import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Card from './Card'
import Pagination from '../products/Pagination'
import TagContainer from './TagContainer'

function ProductGrid({ products, amount }) {
    /*const [currentPage, setCurrentPage] = useState(1)
     const [postPerPage, setPostPerPage] = useState(amount)

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost)


    const paginate = (pageNumber) => setCurrentPage(pageNumber); */

    let [currentPage, setCurrentPage] = useState(1)

    let postsPerPage = amount;
    let indexOfLastPost = postsPerPage * currentPage;
    let indexOfFirsPost = indexOfLastPost - postsPerPage;

    let currentPosts = products.slice(indexOfFirsPost, indexOfLastPost);

    const handleNextPost = () => {
        if (indexOfLastPost < products.length) {
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

            <div className="cardsContainer">
                {currentPosts.map(product =>
                    <Card product={product} />
                )}
            </div >
            <PaginationContainer>
                {/*                 <div>
                    {`${indexOfLastPost}/${products.length}`}
                </div> */}
                <div className="buttons-div">
                    <Button onClick={handleLastPost}>{"<"}</Button>
                    <Button onClick={handleNextPost}>{">"}</Button>
                </div>
            </PaginationContainer>

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
const PaginationContainer = styled.div`
  display: flex; 
  justify-content: center;
  color: #a3a3a3;
  padding: 5px 45px;
  font-size: 1.25rem;
  align-items: center;
  .buttons-div {
      display:flex;
  }
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