import { UserSlice } from '@/store/reducers/UserReducer/UserSlice';
import { IUser, IUserState } from '@/../types/types';
import { expect } from '@jest/globals';
import { combineReducers, createStore } from 'redux';

describe('UserSlice reducers', () => {
    const rootReducer = combineReducers({
      user: UserSlice.reducer,
    });
    const store = createStore(rootReducer);
  
    it('should handle userFetching', () => {
      store.dispatch(UserSlice.actions.userFetching());
      const state = store.getState().user;
      expect(state.isLoading).toEqual(true);
    });
  
    it('should handle userFetchingSuccess', () => {
      const mockUser: IUser = {
        email: 'test@example.com',
        token: 'mocktoken',
        id: '123456789',
      };
      store.dispatch(UserSlice.actions.userFetchingSuccess(mockUser));
      const state = store.getState().user;
      expect(state.isLoading).toEqual(false);
      expect(state.error).toEqual('');
      expect(state.user).toEqual(mockUser);
    });
  

  
    it('should handle removeUser', () => {
      store.dispatch(UserSlice.actions.removeUser());
      const state = store.getState().user;
      expect(state.user).toEqual({} as IUser);
    });
  });
