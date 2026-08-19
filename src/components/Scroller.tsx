import { ReactNode } from "react";

type cardProps = {
  children: ReactNode,
}

function Scroller(props: cardProps) {
  const {children} = props; 
  return (
    <div className="scroller-deck">
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

export function ScrollCard(props: CardBodyProps) {
  let {title, text, hasButton, src} = props;
  let button;
  if (hasButton) {
    button = <a href='#' className='btn btn-outline-success btn-sm mt-3 rounded-pill'>Más información</a>;
  }
  return (
    <div className="card scroll-card p-3">
      {src && (
        <div className="scroll-card-img-wrapper mb-3">
          <img src={src} className="scroll-card-img" alt={title} />
        </div>
      )}
      <div className="card-body p-2 d-flex flex-column align-items-center justify-content-center text-center">
        <h6 className="card-title scroll-card-title mb-2">{title}</h6>
        <p className="card-text scroll-card-name m-0">{text}</p>
        {button}
      </div>
    </div>
  );
}

export default Scroller;