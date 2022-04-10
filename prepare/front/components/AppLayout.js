import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu, Input, Row, Col } from 'antd';
import styled from 'styled-components';
import {useSelector} from 'react-redux';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const MainMenu = styled(Menu)`
display: flex;
`
const InputSearch = styled(Input.Search)`
vertical-align: middle;
`

const AppLayout = ({ children }) => {
    const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
    return (
        <div>
            <MainMenu node="horizontal">
                <Menu.Item>
                <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                <Link href="/profile"><a>프로필</a></Link>
                </Menu.Item>
                <Menu.Item>
                <InputSearch enterButton/>
                </Menu.Item>
                <Menu.Item>
                <Link href="/signup"><a>회원가입</a></Link>
                </Menu.Item>
            </MainMenu>
            <Row gutter={8}> 
                <Col xs={24} md={6} > 
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6} >
                    <a href='https://velog.io/@hyuri' target="_blank" rel='noreferrer noopener'> Blog </a>
                </Col>
            </Row>
        </div>
    );
};
// 가로 먼저 자르고 세로로 자르는 것이 좋다.
// 반응형을 할 때는 모바일 > 태블릿 > PC 순으로 하는 것이 좋다. (xs(모바일), sm(태블릿), md(작은 데스크탑),lg, xl, xxl 화면 )
// gutter > 컬럼 사이의 간격
AppLayout.propTypes = {
    children : PropTypes.node.isRequired,

};

export default AppLayout;