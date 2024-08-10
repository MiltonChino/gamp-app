import { ReactNode } from "react";
// import style from 'styled-components';

type cardProps = {
  children: ReactNode,
}

function CallAction(props: cardProps) {
    // const width = {
    //   width: "350px",
    // };
    const {children} = props; 
    return (
      <div className="card bg-dark text-white">
          {children}
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
  
  
  export default CallAction;