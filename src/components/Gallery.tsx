// import img1 from '5.png'
// import img2 from '7.png'
// import img3 from '8.png'
// import img4 from '11.png'

type Props = {};

function Gallery({}: Props) {
  let src = "./../src/assets/1.png";
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={src} alt="Card image cap" />
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img
              className="card-img-top"
              src={"./../src/assets/2.png"}
              alt="Card image cap"
            />
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
