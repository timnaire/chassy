export function About() {
  return (
    <article className="container mx-auto mt-36">
      <div className="flex justify-center">
        <span className="text-5xl font-bold">
          Get to know <span className="text-fuchsia-900">ME</span>
        </span>
      </div>

      {/* Avatar here */}
      <div>

      </div>

      <div className="text-4xl font-bold mt-12">
        WHY <span className="text-5xl text-fuchsia-900 font-bold">ME?</span>
      </div>

      <div className="flex justify-center text-3xl mt-6 mb-24">
        My Strong &nbsp; <span className="text-fuchsia-900 font-bold">WORK ETHICS</span>
      </div>

      <div className="grid grid-cols-3 gap-24 mb-12">
        <div className="bg-fuchsia-50 p-14 rounded-3xl">
          <div className="font-bold mb-12">Reliability & Responsibility</div>
          <div className="font-medium">
            Ensuring deadlines are met and outcomes owned. I'm not just a partnet; Im your go-to ally for achieving excellence in every endeavor.
          </div>
        </div>

        <div className="bg-fuchsia-50 p-14 rounded-3xl">
          <div className="font-bold mb-12">Leadership</div>
          <div className="font-medium">
            Goes beyond the ordinary. Every decision and action is direccted towards securing success for both of us.
          </div>
        </div>

        <div className="bg-fuchsia-50 p-14 rounded-3xl">
          <div className="font-bold mb-12">Professionalism</div>
          <div className="font-medium">
            Where respect and integrity thrive. Let's build a professional relationship, and a positive attitude are the keys to our shared success.
          </div>
        </div>
      </div>

      <div className="text-4xl font-bold mt-12 mb-24">
        Work <span className="text-5xl text-fuchsia-900 font-bold">Recognition</span>
      </div>

      <div className="mb-24">
        <img src="https://placehold.co/400x350" alt="work-recognition" className="origin-bottom -rotate-3 rounded-3xl" />
      </div>
    </article>
  );
}
