// https://redux-toolkit.js.org/tutorials/quick-start#create-a-redux-store

import { configureStore } from '@reduxjs/toolkit'
import { items } from './sliceContacts'
// import  items  from './sliceContacts' // за каждое свойство должен отвечать свой редьюсер. это чистая функция упрощающая ее тестирование
import { filterContacts } from './sliceFilter'

export const store = configureStore({
    reducer: {
        items: items.reducer,
        filter: filterContacts.reducer,
    }
})