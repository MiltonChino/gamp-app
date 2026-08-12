import { ReactNode } from "react";

type cardProps = {
  children: ReactNode,
}

function Card(props: cardProps) {
  const {children} = props; 
  return (
    <div className="card custom-card-wrapper h-100">
      <div className="card-body d-flex flex-column justify-content-between">
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

export function CardBody(props: CardBodyProps) {
  let {title, text, hasButton} = props;
  let button;
  if (hasButton) {
    button = <a href='#' className='btn btn-primary mt-auto'>Más información</a>;
  }
  return (
    <>
      <h5 className="card-title font-weight-bold text-center mb-3">{title}</h5>
      <hr className="my-2" />
      <p className="card-text text-justify">
        {text}
      </p>
      {button}
    </>
  );
}

export default Card;