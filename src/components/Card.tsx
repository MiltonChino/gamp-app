import { ReactNode } from "react";

type cardProps = {
  children: ReactNode,
  className?: string,
}

function Card(props: cardProps) {
  const {children, className = ""} = props; 
  return (
    <div className={`card custom-card-wrapper h-100 ${className}`}>
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
      <div className="card-header-wrapper text-center">
        <h4 className="card-title font-weight-bold text-center mb-2 mission-vision-title">{title}</h4>
        <div className="card-title-accent mx-auto"></div>
      </div>
      <p className="card-text text-justify mission-vision-text mt-3">
        {text}
      </p>
      {button}
    </>
  );
}

export default Card;