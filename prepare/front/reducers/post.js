export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '임종현',
        },
        content: '첫 번째 게시글 #해시태그 # 익스프레스',
        //속성은 서버 개발자에게 물어보거나 요청하면 됨.
        Images: [{
            src: 'https://velog.velcdn.com/images/hyuri/post/23374641-04e1-492b-b0ec-be686d717b2a/KakaoTalk_20211229_113659463.jpg'
        }],
        Comments: [{
            User: {
                nickname: 'hyuri',
            },
            content: '우와 개정판 !',
        },{
            User: {
                nickname: 'hyuri',
            },
            content: '우와 개정판 !',
        }]
        // DB 쪽 씨퀄라이즈에서 합쳐줄 때 대문자가 되서 나옴. 서버 쪽에서 데이터를 물어보는게 좋음.
    }],
    imagePath: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: 'hyurine',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true
            }
        default: 
        return state;
    }
}

export default reducer;