import React from "react";
import PDFListItem from "./PDFListItem";

const PDFList = ({ lists }) => {
  return (
    <div className="grid">
      {lists?.map((list, i) => {
        return (
        <PDFListItem key={i} title={list.title} url={list.url} 
        name={list.name} description={list.description} path={list.path} tags={list.tags} />)
      })}

    </div>
  )
}

export default PDFList