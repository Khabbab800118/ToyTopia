import { FaStar } from "react-icons/fa";
import { useLoaderData, useParams } from "react-router";
import Header from "../components/Header";
import { showSuccess } from "../components/Alert";
import Footer from "../components/Footer";

const ToyDetails = () => {
  const { id } = useParams();
  const allToysData = useLoaderData();
  const toy = allToysData.find((data) => data.toyId == id);
  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    await showSuccess("Form Submitted Successfully");
    e.target.reset();
  };
  return (
    <div>
      <title>toytopia-Toy Details</title>

      <header>
        <Header></Header>
      </header>
      <main>
        <div className="bg-base-200 min-h-screen flex flex-col items-center">
          <div className="hero-content flex-col lg:flex-row">
            <img src={toy.pictureURL} className="max-w-xs rounded-lg shadow" />
            <div>
              <h1 className="text-4xl font-bold">{toy.toyName}</h1>
              <p className="py-6"> {toy.description} </p>
              <div className="">
                <p className="btn bg-secondary">
                  <FaStar></FaStar> {toy.rating}
                </p>
                <p className="btn bg-secondary">
                  <span>Left : </span>
                  <span className="text-red-800 font-semibold">
                    {toy.availableQuantity}
                  </span>
                  <span>pc only</span>
                </p>
                <h1 className="text-3xl font-bold mt-3">{toy.price} USD</h1>
                <p className="my-3 font-semibold">
                  Seller Name : {toy.sellerName}
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <form onSubmit={handleSubmitBtn} className="card-body">
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  required
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  required
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <div className="pl-25">
                  <button type="submit" className="btn btn-primary w-fit">
                    Try Now
                  </button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ToyDetails;
