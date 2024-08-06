import React from 'react'
import Header from './Header'
import Table from './Table'

const Main = () => {

  return (
    <div className="flex flex-col my-10">
      <div className="w-full">
        <Header />
        <Table />
      </div>
    </div>
  );
};
  
export default Main;