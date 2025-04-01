// src/App.tsx
//import React from 'react';

import './App.css';

import Title from './components/title';
import Intro from './components/intro';
import Hobby1 from './components/hobby1';
import List1 from './components/list1';
import Table1 from './components/table1';
import Form1 from './components/form1';

function App() {
    return (
        <div className="App">
            <Title />
            <Intro name1="Evan Demas" name2="Bryan Wheeler"/>
            <Hobby1 />
            <List1 />
            <Table1 />
            <Form1 />
        </div>
    );
}

export default App;
