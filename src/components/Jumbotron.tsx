import { ReactNode } from 'react';

type cardProps = {
  children: ReactNode,
}

function Jumbotron(props: cardProps) {
  const {children} = props; 
  return (
    <div className="jumbotron jumbo-container my-4">
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
      <div className="mt-3">
        <a className="btn btn-primary btn-lg" href="#" role="button">Descargar</a>
      </div>
    );
  }
  const jumboImg = img ? <img src={img} className="img-fluid rounded mb-3" alt={title}/> : '';
  return (
    <div className="d-flex flex-column align-items-center text-center">
      {jumboImg}
      <h2 className="display-4 font-weight-bold">{title}</h2>
      <p className="lead max-w-700">{text}</p>
      {button}
    </div>
  );
}

export default Jumbotron;
