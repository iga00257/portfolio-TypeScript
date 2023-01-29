import '../css/translate.css';
import entryImg from '../assets/entry.jpg';
import { useEffect, useState } from 'react';

function translate() {
    const [state,setState] = useState(false)
    useEffect(()=>{
        setState(!state)
    },[])
  return (
    <>
    <div className={`overlay ${state?'overlayDisappear':''}`} onClick={()=>{setState(!state)}}/>
      <div className="first_container">
        <div className="container_content">
          <div className="container_content_inner">
            <div className="title">
              <h1>
                Hi ，
              </h1>
              <h1>
                This is Derrick's Blog
              </h1>
            </div>
            <div className="btns">
              <button className="btns_more"> See more </button>
            </div>
          </div>
        </div>
        <div className="container_outer_img">
          <div className="img-inner">
            <img src={entryImg} alt="" className="container_img" />
          </div>
        </div>
      </div>

    </>
  );
}

export default translate;
