import { createAction, handleActions } from 'redux-actions'; // action과 reducer를 편하게 만들어준다.
import { produce } from 'immer';
import { setCookie, getCookie, deleteCookie } from '../../shared/Cookie';

// actions (액션 타입 선언)
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';
const GET_USER = 'GET_USER';

// action creators (액션 생성자)
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

//initialState : default값 같은거
const initialState = {
  user: null,
  is_login: false,
};

// middleware actions
const loginAction = (user) => {
  return function (dispatch, getState, { history }) {
    console.log(history);

    dispatch(logIn(user));
    history.push('/');
  };
};

// reducer
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie('is_login', 'success');
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    // produce(원본값, (복사한 객체)=> {실행할 함수})
    // payload에 우리가 보낸 값 전부가 들어간다.
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie('is_login');
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// export를 해야 컴포넌트가 사용한다.
// action creator export
const actionCreators = {
  logIn,
  logOut,
  getUser,
  loginAction,
};

export { actionCreators };
