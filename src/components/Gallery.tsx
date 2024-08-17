// import { MouseEvent } from "react";
// import { lazy } from "react";

type Props = {};

function Gallery({}: Props) {
  let src = [
    "./../src/assets/gallery/1.png",
    "./../src/assets/gallery/2.png",
    "./../src/assets/gallery/3.png",
    "./../src/assets/gallery/4.png",
    "./../src/assets/gallery/5.png",
    "./../src/assets/gallery/6.png",
  ];

  // const handleClick = (e: MouseEvent) => {
  //   console.log(e);
  //   e.movementX = 10;
  // };
  // const images = lazy(()=> import("./assets/1.png") );

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={src[0]} alt="Card image cap" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={src[1]} alt="Card image cap" />
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
        <div className="w-100"></div>
        <div className="col">One of three columns</div>
        <div className="col">One of three columns</div>
      </div>
    </div>
  );
}

export default Gallery;
