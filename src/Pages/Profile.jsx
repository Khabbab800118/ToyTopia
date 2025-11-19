import React, { use } from "react";
import { AuthContext } from "../provider/AuthContext";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { showSuccess } from "../components/Alert";

const Profile = () => {
  const { user, setUser, updateUser } = use(AuthContext);

  const photoURL = user?.photoURL || null;
  const displayName = user?.displayName || user?.email || "Guest";
  const email = user?.email || null;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;

    updateUser({
      displayName: name,
      photoURL: photo,
    })
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });

        showSuccess("Profile Updated Successfully");

        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setUser(user);
      });
  };

  return (
    <div>
      <title>toytopia-Profile</title>
      <header>
        <Header></Header>
      </header>
      <main className="mt-10">
        <div className="flex flex-col items-center justify-center">
          <p>
            {" "}
            <span className="font-bold">Name :</span> {displayName}
          </p>
          <p>
            {" "}
            <span className="font-bold">PhotoURL :</span> {photoURL}
          </p>
          <p>
            {" "}
            <span className="font-bold">Email :</span> {email}
          </p>
        </div>
        <div className="hero mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
              <h1 className="text-5xl font-bold">Update Your Profile</h1>
              <form onSubmit={handleUpdate} className="card-body">
                <fieldset className="fieldset">
                  {/* Name */}
                  <label className="label">Name</label>
                  <input
                    required
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Name"
                  />
                  {/* Photo */}
                  <label className="label">Photo URL</label>
                  <input
                    required
                    name="photo"
                    type="text"
                    className="input"
                    placeholder="Photo URL"
                  />
                  <button type="submit" className="btn btn-neutral mt-4">
                    Update
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Profile;
