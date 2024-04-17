import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About us. Who we are!" />
      <div className="container">
            <div className="row">
                <div className="col-lg-8 offset-lg-2 my-5">
                    <p className="lead">
                    Dolor adipisicing ea velit eiusmod magna anim consequat in in qui sit cillum.
                    Velit tempor est nulla culpa. Occaecat nostrud eu laborum amet occaecat id
                    deserunt magna laboris adipisicing mollit Lorem.
                    </p>
                </div>
            </div>
        </div>
    </>
  );
};
export default AboutView;
