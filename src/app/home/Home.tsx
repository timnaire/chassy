import { Carousel } from "../shared/Carousel";

export const Home = () => {
  const charcae = require('./../../assets/images/charcae.gif');

  const temp1 = require('./../../assets/images/logo512.png') as string;
  const temp2 = require('./../../assets/images/footer.png') as string;
  // const temp3 = require('./../../assets/images/charcae.gif') as string;


  const images: string[] = [temp1, temp2];
  console.log(images);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-8 d-flex flex-column justify-content-center">
          <h1>Hi there! It's Chas</h1>
          <h6>UI UX Designer | Serious about my work, but never too serious about myself.</h6>

          <p className="small mt-3">Let’s connect on LinkedIn.</p>
        </div>
        <div className="col-12 col-sm-4 text-center">
          <img src={charcae} alt="my name is charcae" className="img-fluid" width="400" height="400" />
        </div>
      </div>
      <div className="row">
        <div className="d-flex">
          <hr className="w-100" />
          <div className="px-5">
            <h4>Creations</h4>
          </div>
          <hr className="w-100" />
        </div>
      </div>
      <div className="row">
        <div className="creation-container rounded-4 mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <h4 className="fw-bold">Budget Tracker</h4>
              <p className="mt-4">To empower users on their journey to financial freedom.</p>
              <button type="button" className="btn btn-outline-primary rounded-5">Check Case Study</button>
            </div>
            <div className="col-12 col-sm-6">
              <Carousel images={images} />
            </div>
          </div>
        </div>
        <div className="creation-container rounded-4 mt-5">
          <div className="row align-items-center">
            <div className="col-12 col-sm-6">
              <h4 className="fw-bold">Apprise</h4>
              <p className="mt-4">
                To keep users updated with the latest trends and updates in the world.
              </p>
              <button type="button" className="btn btn-outline-primary rounded-5">Check Case Study</button>
            </div>
            <div className="col-12 col-sm-6">
              <Carousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

