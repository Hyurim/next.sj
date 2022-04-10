import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import FollowerList from '../components/FollowerList';



const Profile = () => {
    const follwerList = [{ nickname: ' hyuri'}, {nickname: '바보'}, {nickname: '노드버드'}];
    const follwingList = [{ nickname: ' hyuri'}, {nickname: '바보'}, {nickname: '노드버드'}];
    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={follwingList}/>
                <FollowerList header="팔로워 목록" data={follwerList}/>
            </AppLayout>
        </>
    );
};

export default Profile;