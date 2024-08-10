import { ReactNode } from "react";

type cardProps = {
  children: ReactNode,
}

function Card(props: cardProps) {
    const width = {
      width: "500px",
      margin: "30px"
    };
    const {children} = props; 
    return (
      <div className="card" style={width}>
        <div className="card-body">
          {children}
        </div>
      </div>
    );
  }
  type CardBodyProps = {
    title: string,
    text?: string,
    hasButton?: boolean,
  } 
  
  // this is how we use fragments on React
 export function CardBody(props: CardBodyProps) {
    let {title, text, hasButton} = props;
    let button;
    if (hasButton) {
      button = <a href='#' className='btn btn-primary'>Más información</a>;
    }
    return (
      <>
        <h5 className="card-title">{title}</h5>
        <hr className="my-4"></hr>
        <p className="card-text">
          {text}
        </p>
        {button}

      </>
    );
  }
  
  
  export default Card;