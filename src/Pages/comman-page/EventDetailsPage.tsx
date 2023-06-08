import TopicsCom from "../../component/Topics";
import SpeakersCom from "../../component/Speakers";
import VenueCom from "../../component/Venue";
import DescriptionCom from "../../component/Description";
import OrgCom from "../../component/Organizer";

export default function EventDetailsPage() {
  return (
    <section className="flex flex-col  my-5 min-h-[60rem]  text-black ">
      {/*  for only cover image */}
      <div id="event-poster" className="h-96 w-[90%] mx-auto">
        <img
          src="https://img.freepik.com/premium-vector/music-event-horizontal-poster-flyer-template-with-gradient-colorful-design_85212-212.jpg"
          className="h-96 w-full"
        />
      </div>
      <article className="h-full  my-10 mx-10 flex md:flex-row flex-col justify-center  gap-5 ">
        <div className="w-full">
          <DescriptionCom />
        </div>
        <div className=" md:w w-full hidden md:block">
          <p className="font-bold">Organised by </p>
          <OrgCom />
        </div>
      </article>
      <article className=" p-5 ml-14">
        <p className="font-bold text-left  text-xl">Topics</p>
        <TopicsCom />
      </article>
      <article className="p-5 ml-14 flex justify-between ">
        <p className="font-bold text-left  text-xl">Speakers</p>
        <div className="mt-5">
          <SpeakersCom />
        </div>
      </article>
      <article className=" p-5 ml-14">
        <p className="font-bold text-left  text-xl">Location</p>
        <VenueCom />
      </article>
    </section>
  );
}
