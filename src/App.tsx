// src/App.tsx
//import React from 'react';

import './App.css';

import Title from './components/title';
import Intro from './components/intro';
import Hobby1 from './components/hobby1';
import Hobby2 from './components/hobby2';
import List1 from './components/list1';
import List2 from './components/list2';
import Table1 from './components/table1';
import Table2 from './components/table2';
import Form1 from './components/form1';
import Form2 from './components/form2';

function App() {
    return (
        <div className="App">
            <Title />
            <Intro name1="Evan Demas" name2="Bryan Wheeler"/>
            <Hobby1 />
            <List1 />
            <Table1 />
            <Form1 />
            <Hobby2 />
            <List2 />
            <Table2 />
            <Form2 />
        </div>
    );
}

export default App;
