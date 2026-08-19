import { ReactNode } from 'react';

type cardProps = {
  children: ReactNode,
}

function Jumbotron(props: cardProps) {
  const {children} = props; 
  return (
    <div className="jumbotron jumbo-container my-5">
      {children}
    </div>
  );
}

type CardBodyProps = {
  title: string,
  text?: string,
  hasButton?: boolean,
  img?: string,
} 

export function JumboBody(props: CardBodyProps) {
  let {title, text, hasButton, img} = props;
  let button;
  if (hasButton) {
    button = (
      <div className="mt-4">
        <a className="btn jumbo-btn" href="#" role="button">Descargar Organigrama</a>
      </div>
    );
  }
  const jumboImg = img ? (
    <div className="jumbo-img-wrapper my-4">
      <img src={img} className="img-fluid rounded-lg jumbo-img" alt={title}/>
    </div>
  ) : '';
  return (
    <div className="d-flex flex-column align-items-center text-center jumbo-card-content">
      <div className="section-title-wrapper mb-2 text-center">
        <h2 className="jumbo-title font-weight-bold">{title}</h2>
        <div className="card-title-accent mx-auto"></div>
      </div>
      <p className="lead jumbo-text max-w-700 mt-2 mb-3">{text}</p>
      {jumboImg}
      {button}
    </div>
  );
}

export default Jumbotron;
