// import { ReactNode } from "react";
import jumboImg from './../../assets/jumbo-img1.png'

// type cardProps = {
//   children: ReactNode,
// }

function Parallax() {
    // const width = {
    //   width: "350px",
    // };
    return (
      <div className='wrapper-p'>
          {/* {children} */}
      <div className='header'>
          <img src={jumboImg} className='background' />
          <div className='button-p'>
          <a className='title' href='#'>Pasorapa Turística</a>
          </div>
      </div>
  </div>
    );
  }
  type CardBodyProps = {
    title: string,
    text?: string,
    hasButton?: boolean,
    img?: string
  } 
  
  // this is how we use fragments on React
 export function CallActionBody(props: CardBodyProps) {
    let {title, text, hasButton, img} = props;
    let button;
    if (hasButton) {
      button = <a href='#' className='btn btn-primary'>Descubre más</a>;
    }
    const CAImg = img ? <img className="card-img" src={img} alt="Card image" /> : '';
    return (
      <>
        {CAImg}
          <div className="card-img-overlay">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">
              {text}
            </p>
            {button}
          </div>
      </>
    );
  }
  
  
  export default Parallax;