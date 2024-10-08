import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Main from './components/Main'
import AddExpense from './components/Add'
import EditExpense from './components/Edit'

export default function App() {
  return (
    <div className="container w-4/6">
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/add" element={<AddExpense />}></Route>
            <Route path="/edit/:id" element={<EditExpense />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
