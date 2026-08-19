import { ReactNode } from "react";

type cardProps = {
  children: ReactNode,
}

function CallAction(props: cardProps) {
  const {children} = props; 
  return (
    <div className="card bg-dark text-white call-action-card">
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

export function CallActionBody(props: CardBodyProps) {
  let {title, text, hasButton, img} = props;
  let button;
  if (hasButton) {
    button = <a href='#' className='btn call-action-glass-btn'>Descubre más</a>;
  }
  const CAImg = img ? <img className="card-img" src={img} alt="Call to Action" /> : '';
  return (
    <>
      {CAImg}
      <div className="call-action-overlay">
        <div className="call-action-glass-box">
          <h3 className="card-title call-action-title font-weight-bold">{title}</h3>
          <p className="card-text call-action-text lead max-w-700">{text}</p>
          {button}
        </div>
      </div>
    </>
  );
}

export default CallAction;