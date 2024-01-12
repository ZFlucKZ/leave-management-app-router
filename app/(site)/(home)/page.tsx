import Image from 'next/image';
// import { setTimeout } from 'timers/promises';

const HomePage = async () => {
  // await setTimeout(3_000);
  return (
    <>
      <h1 className="my-4 text-center text-4xl font-bold">Leave Management</h1>
      <div className="relative h-[500px]">
        <Image
          src="/assets/images/image.jpg"
          alt="Home Page"
          fill
          sizes="(min-width: 800px) 50vw, 100vw"
          className="object-cover"
        ></Image>
      </div>
    </>
  );
};

export default HomePage;
