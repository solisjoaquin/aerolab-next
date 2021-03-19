import styled from 'styled-components'

function Pagination({ postPerPage, totalPost, paginate }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <Container>
            {pageNumbers.map(number => (
                <Button onClick={() => paginate(number)} key={number}>
                    {number}
                </Button>
            ))}

        </Container>
    )
}

export default Pagination;

const Container = styled.nav`
    display:flex;
    justify-content:center;
`
const Button = styled.button`
color: #a3a3a3;
margin: 10px;
padding: 20px;
border-radius: 5px;
background-color: #ebebeb;
border: none;
font-size:1rem;
:hover {
    color: #cdf6fd;
    background-color: #0ad4fa;
}
`

