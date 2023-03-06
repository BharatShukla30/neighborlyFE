import { signUpReducer } from '../components/SignUpPage/reducer';
import { signInReducer } from '../components/SignInPage/reducer';
import { userReducer } from '../components/DashBoard/reducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    signUpReducer,
    signInReducer,
    userReducer,
});

export default rootReducer;
