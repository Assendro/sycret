import { configureStore } from '@reduxjs/toolkit';
import certificateReducer from '../features/certificates/certificatesSlice';
import formReducer from '../features/form/formSlice';

const store = configureStore({
    reducer: {
        certificate: certificateReducer,
        form: formReducer,
    },
});


export default store;
