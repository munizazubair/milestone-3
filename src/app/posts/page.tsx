"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface PostsInterface {
  identifier: number;
  profileImg: string;
  name: string;
  image: string;
  likes: number;
  description: string;
}


export default function Post() {
    const posts: PostsInterface[] = [
        {
          identifier: 1,
          profileImg: "/i1.jpg",
          name: "johndoe_1",
          image: "/img1.jpg",
          likes: 124,
          description: "My signature scent🌈 for an unforgettable... ",
        },
        {
          identifier: 2,
          profileImg: "/i2.jpg",
          name: "sarah_smith",
          image: "/img2.jpg",
          likes: 245,
          description: "The fragrance of memories...",
        },
        {
          identifier: 3,
          profileImg: "/i3.jpg",
          name: "alex_jones",
          image: "/img3.jpg",
          likes: 157,
          description: "A perfect blend of warmth and allure..."
        },
        {
          identifier: 4,
          profileImg: "/i4.jpg",
          name: "emily_rose",
          image: "/img4.jpg",
          likes: 87,
          description: "Inspiration begins✨ with a spritz...",
        },
        {
          identifier: 5,
          profileImg: "/i5.jpg",
          name: "michael_hunt",
          image: "/img5.jpg",
          likes: 320,
          description: "Trying out the latest makeup trends!📷 ",
        },
        {
          identifier: 6,
          profileImg: "/i6.jpg",
          name: "lucy_williams",
          image: "/g6.jpg",
          likes: 210,
          description: "A cozy evening with a good book.🌺",
        },
        {
          identifier: 7,
          profileImg: "/i7.jpg",
          name: "matthew_lee",
          image: "/img7.jpg",
          likes: 133,
          description: "Good food, good mood. 🍴"
        },
        {
          identifier: 8,
          profileImg: "/i8.jpg",
          name: "zoe_martin",
          image: "/img8.jpg",
          likes: 99,
          description: "Chasing sunsets and making memories🌞💖",

        },
        {
          identifier: 9,
          profileImg: "/i9.jpg",
          name: "james_brown",
          image: "/img9.jpg",
          likes: 78,
          description: "Life is short, eat the dessert 🍰",
        },
        {
          identifier: 10,
          profileImg: "/i10.jpg",
          name: "hannah_james",
          image: "/img10.jpg",
          likes: 132,
          description: "Travel far, travel wide, travel often 🌏",
        },
        {
          identifier: 11,
          profileImg: "/i11.jpg",
          name: "william_clark",
          image: "/img11.jpg",
          likes: 200,
          description: "Chasing rainbows down an open road 🌈🚗",
        },
      ];
      


  const [follow, setFollow] = useState<boolean>(false);
  const [save, setSave] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [commentsOpen, setCommentsOpen] = useState<number | null>(null); // Track which post's comments are open
  const [cmntsection, setCmntSection] = useState<string[]>([]);
  const [cmnt, setCmnt] = useState<string>("");

  const handleFollow = () => {
    setFollow((follow) => !follow);
  };
  const handleSave = () => {
    setSave((save) => !save);
  };
  const handleLike = () => {
    setLike((like) => !like);
  };

  const handleComments = (identifier: number) => {
    setCommentsOpen(commentsOpen === identifier ? null : identifier); // Toggle the specific post's comment section
  };

  const handleCmntSection = (e: React.FormEvent) => {
    e.preventDefault();
    setCmntSection([...cmntsection, cmnt]);
    setCmnt("");
  };

  return (
    <div className="flex justify-center h-full w-full bg-neutral-800 py-5">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-20">
        {posts.map((post) => (
          <div key={post.identifier} className=" md:h-[445px]  md:w-[335px] w-[100%] justify-between py-1 rounded-md bg-black text-white flex flex-col">
            <div className="text-white flex justify-between px-3 items-center">
              <div className="flex gap-1.5 items-center">
                <div className="border-[4px] border-red-800 rounded-full">
                <Image
                  src={post.profileImg}
                  width={100}
                  height={100}
                  alt={post.name}
                  className=" h-[35px]  w-[35px] rounded-full border-[2px] border-white"
                />
                </div>
                <div>
                  <h1 className="text-[16px] font-semibold">{post.name}</h1>
                  <button className="text-[12px] pb-1">
                    <Link href={`/posts/${post.identifier}`}>Explore</Link>
                  </button>
                </div>
              </div>
              <div className="flex  gap-3 items-center">
              <div>
                <button onClick={handleFollow} className="border-2 border-white rounded-md text-[14px] font-semibold">
                  {!follow ? <div className="flex items-center justify-center w-[70px] h-[28px]">Follow</div> : <div className="flex items-center justify-center w-[80px] h-[28px]">Following</div>}
                </button>
              </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="5" r="2" />
                  <circle cx="12" cy="12" r="2" />
                  <circle cx="12" cy="19" r="2" />
                </svg>
              </div>
            </div>

            <div>
              <Image
                src={post.image}
                alt={post.name}
                width={100}
                height={100}
                className=" h-[320px]  w-full"
              />
            </div>
<div className="flex flex-col justify-center  px-2 pt-1">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="flex gap-0.5 items-center ">
                  <button onClick={handleLike}>
                    {!like ? (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                      </div>
                    ) : (
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
                        </svg>
                      </div>
                    )}
                  </button>
                  <h1 className="text-[14px]">{post.likes}</h1>

                </div>
                <div className="flex items-center">
                  <button onClick={() => handleComments(post.identifier)}>
                    {commentsOpen === post.identifier ? (
                      <div className="relative">
                        <div className="absolute md:bottom-[320px] bottom-[330px] z-50 md:left-[230px] left-[210px]  ">
                          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                          </svg>
                        </div>
                      </div>
                    ) : (
                      <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                      </div>
                    )}
                  </button>
                  {commentsOpen === post.identifier && (
                    <div>

                      <div className="slide-top text-white relative">
                      <div className="absolute md:h-[398px] h-[397px] md:w-[340px] w-[301px] -top-64 md:-left-[65px] -left-[61px] bg-neutral-700  overflow-y-auto rounded-b-md ">
                      <div className="flex flex-col items-center justify-center gap-1">
                            <div className="h-[3px] w-12 bg-neutral-400 rounded-r-md rounded-l-md mt-2"></div>
                            <h1 className="text-[14px] font-semibold">Comments</h1>
                            <form onSubmit={handleCmntSection}>
                                <div className=" flex flex-col gap-4 mb-20">
                                

                              <div>{cmntsection.map((me, index) => <div key={index}>
                                <ul className="flex flex-col gap-10 text-white ">
                                    <li className="border-b-[1px] border-neutral-600  flex items-center h-10 w-[240px] px-2 text-[13px]">{me} </li>
                                </ul>
                              </div>)}</div>

                              <div className="flex gap-3 fixed top-[85px] md:-left-4 -left-8 bg-neutral-700 ">
                              <input
                              className="h-[32px] w-[220px] bg-transparent border-[1px] pl-2 rounded-md border-neutral-400 text-[13px]"
                                value={cmnt}
                                placeholder="add comment"
                                onChange={(e) => setCmnt(e.target.value)}
                              />
                              <button className="hover:text-white text-neutral-400"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
  <path d="M4 4v16l16-8-16-8z"></path>
</svg></button></div>


                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
                <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                          height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="18" cy="5" r="3"></circle>
                  <circle cx="6" cy="12" r="3"></circle>
                  <circle cx="18" cy="19" r="3"></circle>
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
              </div>
              </div>
              <button onClick={handleSave}>
              {!save ? (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                   width="20"
                          height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              ) : (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
              )}
            </button>

            </div>

            <p className="text-[12px] pt-2">{post.description}</p>
            </div>

          
          </div>
        ))}
      </div>
    </div>
  );
}
