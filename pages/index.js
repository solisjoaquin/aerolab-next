
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

  // Sort products (not implemented yet)

  /*
  let recentProducts = variableState.history.sort(function (a, b) {
    return new Date(b.createDate) - new Date(a.createDate);
  });


  let ascendingArray = products.sort(function (a, b) {
      if (a.cost > b.cost) {
          return 1;
      }
      if (a.cost < b.cost) {
          return -1;
      }
      return 0;
  });
  
  let descendingArray = products.sort(function (a, b) {
      if (a.cost < b.cost) {
          return 1;
      }
      if (a.cost > b.cost) {
          return -1;
      }
      return 0;
  }); */


  return <>
    <Navbar />
    <Container >
      <TagContainer />
      <ProductGrid products={variableState.products} />
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
    flex-direction: column;
    background-color: #f9f9f9;
    padding: 25px;
    margin: auto;
`
