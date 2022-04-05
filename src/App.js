import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import StreamCreate from './components/stream/StreamCreate'
import StreamDelete from './components/stream/StreamDelete'
import StreamEdit from './components/stream/StreamEdit'
import StreamList from './components/stream/StreamList'
import StreamShow from './components/stream/StreamShow'
import Header from './components/Header'

const App = () => {
    return (
        <div className='ui container'>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<StreamList />} exact />
                    <Route path="/stream/new" element={<StreamCreate />} exact />
                    <Route path="/stream/edit" element={<StreamEdit />} exact />
                    <Route path="/stream/delete" element={<StreamDelete />} exact />
                    <Route path="/stream/show" element={<StreamShow />} exact />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App 