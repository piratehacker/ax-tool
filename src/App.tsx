import { useEffect, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Industries from './pages/Industries';
import Layout from './Layout';

function App() {
    return <div>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<h1>Home</h1>}/>
                    <Route path="/industries" element={<Industries/>}/>
                    <Route path="*" element={<h1>404</h1>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </div>
}

export default App
