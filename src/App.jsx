import React, { useReducer, useEffect } from "react";
import axios from 'axios';
import "./App.scss";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Results from "./Components/Results";
import History from "./Components/History";

const initialState = {
    data: null,
    headers: null,
    loading: false,
    history: []
};

function appReducer(state, action) {
    switch (action.type) {
        case 'SET_LOADING':
            return {...state, loading: action.payload};
        case 'SET_RESULTS':
            return {
                ...state,
                data: action.payload.data,
                headers: action.payload.headers,
                history: [...state.history, {
                    method: action.payload.method,
                    url: action.payload.url,
                    results: action.payload.data
                }]
            };
        case 'SET_HISTORY_ITEM':
            return {...state, data: action.payload.results, headers: action.payload.headers};
        default:
            return state;
    }
}

const App = () => {
    const [state, dispatch] = useReducer(appReducer, initialState);

    const handleApiCall = (params) => {
        dispatch({ type: 'SET_LOADING', payload: true });
        axios({
            method: params.method,
            url: params.url,
            data: params.body,
        })
        .then(response => {
            dispatch({
                type: 'SET_RESULTS',
                payload: {
                    data: response.data,
                    headers: response.headers,
                    method: params.method,
                    url: params.url
                }
            });
            dispatch({ type: 'SET_LOADING', payload: false });
        })
        .catch(error => {
            console.error("Error making the API call", error);
            dispatch({ type: 'SET_LOADING', payload: false });
        });
    };

    const handleHistoryClick = (item) => {
        dispatch({type: 'SET_HISTORY_ITEM', payload: item});
    };

    return (
        <div className="app-container">
            <Header />
            <main className="main-content">
                <Form handleApiCall={handleApiCall} />
                <History items={state.history} onItemClick={handleHistoryClick} />
                <div className="api-info">
                    <div className="results">
                        <strong>Headers:</strong>
                        <pre>{JSON.stringify(state.headers, null, 2)}</pre>
                        <Results data={state.data} headers={state.headers} loading={state.loading} />
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default App;
