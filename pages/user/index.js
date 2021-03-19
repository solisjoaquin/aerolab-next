import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import { useEffect } from 'react'
import { getHistory, getProducts, getUser } from '../../data/api'
import useAppContext from "../../context/context";
import HistoryContainer from '../../components/user/HistoryContainer';
import ProductGrid from '../../components/products/ProductGrid';


function User({ products, user, history }) {

  const { variableState, setVariableState } = useAppContext();

  let categories = [
    { category: "Audio", amount: 0 },
    { category: "Cameras", amount: 0 },
    { category: "Drones", amount: 0 },
    { category: "Gaming", amount: 0 },
    { category: "Laptops", amount: 0 },
    { category: "Monitors & TV", amount: 0 },
    { category: "Phone Accessories", amount: 0 },
    { category: "PC Accesories", amount: 0 },
    { category: "Phones", amount: 0 },
    { category: "Smart Home", amount: 0 },
    { category: "Tablet & E-readers", amount: 0 },
  ];

  history.map(product => {
    switch (product.category) {
      case "Audio": categories[0].amount++; break;
      case "Cameras": categories[1].amount++; break;
      case "Drones": categories[2].amount++; break;
      case "Gaming": categories[3].amount++; break;
      case "Laptops": categories[4].amount++; break;
      case "Monitors & TV": categories[5].amount++; break;
      case "Phone Accesories": categories[6].amount++; break;
      case ("PC Accesories" || "PC Accessories"): categories[7].amount++; break;
      case "Phones": categories[8].amount++; break;
      case "Smart Home": categories[9].amount++; break;
      case "Tablets & E-readers": categories[10].amount++; break;

    }
  })

  let sortCategories = categories.sort(function (a, b) {
    return (a.amount - b.amount) * -1
  })
  let categoryMostRedeemed = sortCategories[0].category

  let filterProducts = products.filter(product => product.category == categoryMostRedeemed)



  useEffect(() => {
    if (!variableState.products || !variableState.user) {
      setVariableState({ ...variableState, products, user, history });
    }
  }, [variableState]);


  if (!variableState.products || !variableState.user) return <></>

  return (
    <div>
      <Navbar />

      <Container >
        <Stats>
          <p class="secondary-text">Most redeemed category: {sortCategories[0].category} ({sortCategories[0].amount})</p>
        </Stats>
        <h2 className="title">Maybe you like</h2>
        <RecommendationContainer>
          <ProductGrid products={filterProducts} amount={3} />
        </RecommendationContainer>

        <h2 className="title">See your historial</h2>
        <ContainerColumn >
          <HistoryContainer history={history} />
        </ContainerColumn>
      </Container>

    </div>
  )
}

export default User;

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
    text-align:center;
    background-color: #f9f9f9;
    padding: 25px;

    .title{
      color:#0ad4fa;
    }
`

const ContainerColumn = styled.div`
  display:flex;
  margin: 10px auto;
`
const Stats = styled.div`
  font-size: 1.25rem;
  text-align: center;

  .secondary-text {
    font-size:0.9rem;
    opacity: 0.8;
  }
`
const RecommendationContainer = styled.div`
display:flex;
flex-direction: column;
background-color: #f9f9f9;
padding: 25px;
margin: auto;
`

