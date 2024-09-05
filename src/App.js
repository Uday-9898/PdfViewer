import React from "react";
import PDFList from './components/PDFList';
import { Data } from './data/PDFListData';



function App() {
  const data = Data;

  return (

    <div className="small-space ">
      <div className='container'>
        <h1 className='main-title'>PDF Reader and Navigator</h1>
        <PDFList lists={data} />
      </div>
    </div>


  );
}

export default App;