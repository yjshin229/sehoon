import { Link } from "react-router-dom"
import styled from "styled-components"

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderTitle>

                $ehoon
            </HeaderTitle>
            <MenuContainer>
                <Menu>
                    <MenuItem to={""}>
                        About Me
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem to={'/portfolio'}>
                        Portfolio
                    </MenuItem>
                </Menu>
                <Menu>
                    <MenuItem to={'/posts'}>
                        Posts
                    </MenuItem>
                </Menu>
            </MenuContainer>
        </HeaderWrapper>
    )

}

export default Header

const HeaderWrapper = styled.div`
    background-color: #00b925;
    display: flex;
    padding-inline: 2rem;
    justify-content: space-between;
`

const HeaderTitle = styled.h1`
    display: flex;
    flex-direction: row;
`

const MenuContainer = styled.ul`
    display: flex;
    flex-direction: row;
`

const Menu = styled.li`
  display: flex;
  width: 200px;
  justify-content: center;
  align-items: center;
  padding: 1rem;

`;


const MenuItem = styled(Link)`
    color: white;
    text-decoration: none;
`