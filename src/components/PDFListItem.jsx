import { useState } from "react";
import Modal from "./Modal";

const PDFListItem = ({ title, name, url }) => {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className='box' title="Click to details">
        <img src="/pdf.png" alt="pdf" className="w-12 mx-auto block mb-3" />
        <div className="f">
          <h6 className='text-xl mb-1'> {title} </h6>
          <p className="text-sm">{name}</p>
          <button onClick={() => setShowModal(!showModal)}>View Document</button>
        </div>
      </div>
      {showModal ? <Modal modalShow={showModal} modalClose={() => setShowModal(false)} url={url} /> : null}
    </>
  )
}

export default PDFListItem