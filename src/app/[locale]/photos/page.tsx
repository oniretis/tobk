// pages/index.tsx

import PhotoCard from "../../components/PhotoCard";

const photos = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/3646206/pexels-photo-3646206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 2",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 5,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 6,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 7,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 8,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  {
    id: 9,
    url: "https://images.pexels.com/photos/2468487/pexels-photo-2468487.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    author: "Photographer 1",
  },
  // Add more photos as needed
];

const Home: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {photos.map((photo) => (
          <PhotoCard key={photo.id} photo={photo.url} author={photo.author} />
        ))}
      </div>
    </>
  );
};

export default Home;
