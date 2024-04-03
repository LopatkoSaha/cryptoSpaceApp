import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Подключите корневой редьюсер

const store = configureStore({
    reducer: rootReducer,
   // Передайте корневой редьюсер
  // Дополнительные настройки хранилища здесь, если необходимо
});

export default store;