import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Feed from "./components/Feed.jsx"
import SearchResult from "./components/SearchResult.jsx"
import Header from "./components/Header.jsx"
import VideoDetail from "./components/VideoDetail.jsx"

import { AppContext } from './context/contextApi'

function App() {
  return (
    <AppContext>
      <BrowserRouter>
        <div className="flex flex-col h-full">
            <Header/>
            <Routes>
                <Route path="/" exact element={<Feed/>}/>
                <Route path="/searchResult/:searchQuery" element={<SearchResult/>}/>
                <Route path="/videos/:id" element={<VideoDetail/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </AppContext>
  )
}

export default App

