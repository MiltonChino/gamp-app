import { ReactNode } from 'react';

type cardProps = {
  children: ReactNode,
}

function Jumbotron(props: cardProps) {
  const {children} = props; 
  return (
<div className="jumbotron">
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

  // this is how we use fragments on React
  export function JumboBody(props: CardBodyProps) {
    let {title, text, hasButton, img} = props;
    let button;
    if (hasButton) {
      button = <p className="lead">
      <a className="btn btn-primary btn-lg" href="#" role="button">Descargar</a>
    </p>;
    }
    const jumboImg = img ? <img src={img} width="100%" alt=""/> : '';
    return (
      <>
        {jumboImg}
        <h1 className="display-4">{title}</h1>
  <p className="lead">{text}</p>
  {/* <hr className="my-4"> */}
  {/* <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p> */}
{button}
      </>
    );
  }


export default Jumbotron;

{
  /* 


*/
}
