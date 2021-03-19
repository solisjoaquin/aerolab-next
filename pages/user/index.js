import Navbar from '../../components/Navbar'
import styled from 'styled-components'
import { useEffect } from 'react'
import { getHistory, getProducts, getUser } from '../../data/api'
import useAppContext from "../../context/context";
import HistoryContainer from '../../components/user/HistoryContainer';


function User({ products, user, history }) {

  const { variableState, setVariableState } = useAppContext();

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
        <h1>See your historial</h1>
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
`

const ContainerColumn = styled.div`
  display:flex;
  margin: 10px auto;
`

