import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import { useDispatch } from 'react-redux';

import { logoutAction } from '../reducers';

const UserProfile = () => {
    const dispatch = useDispatch();
const onLogout = useCallback(() => {
    dispatch(logoutAction());
})
    return (
            <Card
            actions={[
                <div key="twit"> 트윗</div>,
                <div key="follwings">팔로잉 </div>,
                <div key="follwer"> 팔로워 </div>
            ]}>
                <Card.Meta
                avatar={<Avatar>Hyuri</Avatar>}
                title="Hyuri"
                />
                <Button onClick={onLogout}>로그아웃</Button>
            </Card>
    );
    }
export default UserProfile;