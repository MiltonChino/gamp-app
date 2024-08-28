import "./../App.css";
import ContactUs from "./../components/ContactUs";

function Gaceta() {
  // const stylesMargin = {
  //   margin: "30px",
  // };

  return (
    <>
      <div className="container">
        <ContactUs />
        {/* If you have a Database then you'll be able to map through the list for the card info, and print only one time.*/}
      </div>
    </>
  );
}

export default Gaceta;
