import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { TaskReducer } from '.';

const reducers = combineReducers({
    task: TaskReducer
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ["task"]
}
  
const persistedReducer = persistReducer(persistConfig, reducers);

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof reducers>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            immutableCheck: false,
            serializableCheck: false,
        }),
    devTools: true,
})

export const persistor = persistStore(store);
