import React, { useContext } from 'react'
import { Context } from '../index.js'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap"
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts.js';
import { observer } from 'mobx-react-lite';

const NavBar = observer(() => {
    const { user } = useContext(Context)
    const navigator = useNavigate()

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>ДевКуп</NavLink>
                {user._isAuth ?
                    <Nav className="ml-auto">
                        <Button 
                            variant={"outline-light"} 
                            onClick={() => navigator(ADMIN_ROUTE)}
                        >
                            Админ Панель
                        </Button>

                        <Button 
                            variant={"outline-light"} 
                            onClick={() => navigator(LOGIN_ROUTE)} 
                            className="ms-2" 
                        >
                            Выйти
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar