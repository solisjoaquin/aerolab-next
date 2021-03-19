import styled from 'styled-components'
import Image from 'next/image'
import useAppContext from "../context/context";
import Link from 'next/link'


function Header() {
    const { variableState } = useAppContext()
    const { user } = variableState
    if (!user) return <></>
    return <HeaderContainer>
        <Link href="/">
            <LogoStyle src="/icons/aerolab-logo.svg" alt="logo" width={36} height={36} />
        </Link>

        <UserAndButtonContainer>
            <Link href="/user">
                <UserButton>
                    {user.name}
                </UserButton>
            </Link>
            <Link href="/points">
                <ButtonRedeem>
                    <p>{user.points}</p>
                    <Image src="/icons/coin.svg" alt="logo" width={30} height={30} />
                </ButtonRedeem>
            </Link>
        </UserAndButtonContainer>

    </HeaderContainer>
}


export default Header

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

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content:space-between;
    padding: 25px 40px;
`
const LogoStyle = styled(Image)`
    padding:10px;
    :hover{
        cursor: pointer;
        transform: translateY(-1px);
        opacity:0.5;
    }


`
const UserAndButtonContainer = styled.div`
   display:flex;
   align-items: center;

`
const UserButton = styled.div`
    margin: 0 10px;
    padding: 20px 20px;
    font-size:1rem;
    :hover {
        background-color: gray;
        border-radius: 9999px;
        color: white;
        cursor:pointer;
    }
    @media ${device.tablet} {
        font-size: 1.25rem;
      }
`
const ButtonRedeem = styled.button`
    display:flex;
    align-items:center;
    padding: 0px 25px;
    border-radius: 9999px;
    border: none;
    font-size:1rem;
    :hover {
        background-color: gray;
        border-radius: 9999px;
        color: white;
        cursor:pointer;
    }
    @media ${device.tablet} {
        font-size: 1.25rem;
      }
`
