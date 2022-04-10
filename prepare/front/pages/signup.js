import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Button, Checkbox, Form, Input } from 'antd';
import useInput from '../Hooks/useInput';
import styled from 'styled-components';

const ErrorMessage = styled.div`
color: red;
`

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [passwordError, setPasswordError] = useState(false);

    const [ passwordCheck, setPasswordCheck] = useState('');
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);
    const [termError, setTermError] = useState(false);
    const [term, setTerm] = useState('');
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    })
    const onSubmit= useCallback(() => {
        if (password !== passwordCheck){
            return setPasswordError(true);
        }
        if (!term) {
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, passwordCheck, term]);
    return (
        
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor='user-id'>아이디</label>
                    <br />
                    <Input name='user-id' value={id} required onChange={onChangeId} />
                </div>
                <div>
                    <label htmlFor='user-nick'>닉네임</label>
                    <br />
                    <Input name='user-nick' value={nickname} required onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor='user-password'>패스워드</label>
                    <br />
                    <Input name='user-password' type="password" value={password} required onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor='user-password-heck'>패스워드확인</label>
                    <br />
                    <Input name='user-password-check'
                    type="password"
                     value={passwordCheck}
                      required 
                      onChange={onChangePasswordCheck} />
                {passwordError && <ErrorMessage>비밀번호가 일치하지 않아요.</ErrorMessage>}
                </div>
                <div>
                    <Checkbox name = 'user-term' checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
                    {termError && <ErrorMessage>약관에 동의하셔야 합니다. </ErrorMessage>}
                </div>
                <div style={{marginTop: 10}}>
                    <Button type='primary' htmlType='submit'>가입하기</Button>
                </div>
            </Form>
        </AppLayout>
        </>
    );
};

export default Signup;