import img1 from "../Assets/RecentProject/download (1).jpg";
import img2 from "../Assets/RecentProject/download.jpg";
import img3 from "../Assets/RecentProject/Majin vegeta by n_a_m76 _ Dragon ball gt, Anime….jpg";
import img4 from "../Assets/RecentProject/WhatsApp Image 2025-05-03 at 11.41.37_78c7835b.jpg";

const RecentProjects = () => {
  const Recent = [img1, img2, img3, img4];
  return (
    <div className="Black text-center py-4">
      <div className="container">
        <h1 className="text-5xl font-light my-5 yellowtext max-[767px]:text-3xl">
          Recent Tattoo & Piercing
        </h1>
        <div className="py-7 w-full flex flex-wrap">
          {Recent.map((el, id) => {
            return (
              <img
                className="m-4 w-[30%] max-[1023px]:w-[40%] max-[1023px]:m-auto max-[1023px]:mb-3 max-[767px]:w-[45%] max-[767px]:m-auto max-[767px]:mb-3"
                key={id}
                src={el}
                alt={`Recent project ${id + 1}`}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
