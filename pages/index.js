
import Navbar from '../components/Navbar'
import styled from 'styled-components'
import TagContainer from '../components/products/TagContainer'
import ProductGrid from '../components/products/ProductGrid'
import { useState, useEffect } from 'react'
import useAppContext from "../context/context";
import { getHistory, getProducts, getUser } from '../data/api'

function HomePage({ products, user, history }) {
  const { variableState, setVariableState } = useAppContext();

  useEffect(() => {
    if (!variableState.products || !variableState.user) {
      setVariableState({ ...variableState, products, user, history });
    }
  }, []);

  if (!variableState.products || !variableState.user) return <></>


  return <>
    <Navbar />
    <Container>
      <TagContainer />
      <div class="productContainer">
        <ProductGrid products={variableState.products} amount={12} />
      </div>
    </Container>
  </>
}

export default HomePage

export async function getServerSideProps() {
  return {
    props: {
      products: await getProducts(),
      user: await getUser(),
      history: await getHistory(),
    },
  };
}

const Container = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #f9f9f9;
    .productContainer {
      display:flex;
      justify-content:center;
      background-color: #f9f9f9;
      padding: 25px;
    }
`
