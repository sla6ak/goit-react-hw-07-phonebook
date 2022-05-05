// https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store

import { configureStore } from '@reduxjs/toolkit'
// import  items  from './sliceContacts' // за каждое свойство должен отвечать свой редьюсер. это чистая функция упрощающая ее тестирование
import { filterContacts } from './sliceFilter'

import { contactApi } from 'server/fetchContacts'

export const store = configureStore({
    reducer: {
        [contactApi.reducerPath]: contactApi.reducer,
        filter: filterContacts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactApi.middleware),
})