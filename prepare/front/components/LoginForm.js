import { Form, Input, Button } from 'antd';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
// useMemo, useCallback
const ButtonDiv = styled.div`
margin-top: 10px;
`;

const FormLogin = styled(Form)`
padding: 10px;
`
const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e) => { //컴포넌트에 prop로 넘겨주는 함수는 useCallback 써야 최적화가 된다.
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => { 
        setPassword(e.target.value);
    }, []);
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);
    // antd 디자인에서 onFinish 에는 이미 e.preventDefault()가 적용이 되어 있다.
    return (
        <FormLogin onFinish={onSubmitForm}> 
            <div>
                <label htmlFor='user-id'>아이디</label>
                <br />
                <Input name='user-id' value={id} onChange={onChangeId} required />
            </div>
            <div> 
            <label htmlFor='user-password'>비밀번호</label>
                <br />
                <Input name='user-password'
                type="password"
                value={password} 
                onChange={onChangePassword} 
                required />
            </div>
            <ButtonDiv>
                <Button type='primary' htmlType='submit' loading={false}>로그인</Button>
                <Link href="/signup"><a>회원가입</a></Link>
            </ButtonDiv>
        </FormLogin>
    );
};

export default LoginForm;