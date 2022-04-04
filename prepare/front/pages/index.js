import React from 'react';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <AppLayout>
            Hello, Next
        </AppLayout>
    );
};

export default Home;

// next에서는 pages 라고 명시된 폴더 안에 있는 파일들을 인식해서 개별적인 페이지 컴포넌트로 만들어준다.
// index인 이유는 npm run dev를 하면 