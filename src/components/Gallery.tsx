// import { MouseEvent } from "react";
// import { lazy } from "react";

type Props = {};

function Gallery({}: Props) {
  let src = [
    "./../src/assets/gallery-1.png",
    "./../src/assets/gallery-2.jpeg",
    "./../src/assets/gallery-3.jpg",
    "./../src/assets/gallery-4.jpeg",
    "./../src/assets/gallery-5.jpg",
    "./../src/assets/gallery-6.jpg",
  ];

// const gallery =""
// for (let index = 0; index < src.length; index++) {
//   const display = src[index]; 
// }

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="card">
            <img className="card-img-top rounded" src={src[0]} alt="Card image cap" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="card-img-top rounded" src={src[1]} alt="Card image cap" />
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
        <div className="card">
            <img className="card-img-top rounded" src={src[2]} alt="Card image cap" />
          </div>
        </div>
        <div className="col">
        <div className="card">
            <img className="card-img-top rounded" src={src[3]} alt="Card image cap" />
          </div>
        </div>
        <div className="w-100"></div>
        <div className="col">
        <div className="card">
            <img className="card-img-top rounded" src={src[4]} alt="Card image cap" />
          </div>
        </div>
        <div className="col">
        <div className="card">
            <img className="card-img-top rounded" src={src[5]} alt="Card image cap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;