import img1 from "../Assets/RecentProject/download (1).jpg";
import img2 from "../Assets/RecentProject/download.jpg";
import img3 from "../Assets/RecentProject/Majin vegeta by n_a_m76 _ Dragon ball gt, Anime….jpg";
import img4 from "../Assets/RecentProject/WhatsApp Image 2025-05-03 at 11.41.37_78c7835b.jpg";

const RecentProjects = () => {
  const Recent = [img1, img2, img3, img4];
  return (
    <div className="Black text-center py-4">
      <div className="container">
        <h1 className="text-5xl font-light my-5 yellowtext ">
          Recent Tattoo & Piercing
        </h1>
        <div className="py-7 w-full flex flex-wrap">
          {Recent.map((el, id) => {
            return (
              <img
                className="m-4 w-[30%]"
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
