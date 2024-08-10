import { ReactNode } from "react";

type cardProps = {
  children: ReactNode,
}

function Scroller(props: cardProps) {
    const width = {
      width: "25wh",
    };
    const {children} = props; 
    return (
      <div className="card-deck" style={width}>
        {children}
      </div>
    );
  }
  type CardBodyProps = {
    title: string,
    text?: string,
    hasButton?: boolean,
    src?: string,
  } 
  
  // this is how we use fragments on React
 export function ScrollCard(props: CardBodyProps) {
    let {title, text, hasButton, src} = props;
    let button;
    if (hasButton) {
      button = <a href='#' className='btn btn-primary'>Más información</a>;
    }
    return (
      <>
      <div className="card">
      <img className="card-img-top" src={src} alt="Card image cap" />
        <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          {text}
        </p>
        {button} 
        </div>
        </div>
      </>
    );
  }
  
  
  export default Scroller;