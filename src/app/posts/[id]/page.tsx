import React from "react"
import Image from "next/image";
interface ParamsI {
  id:number
}
interface PostsI {
  [key:number]:
  {
  image:string;
  description:string
}
}
export default function Post2({params}: {params:ParamsI}) {
    const posts:PostsI = {
        1:{image: "/img1.jpg",description: "My signature scent🌈 for an unforgettable impression 💫💖. #PerfumeAddict"},
        2:{image:"/img2.jpg"  ,description: "The fragrance of memories🌸💭 #Fragrance" },
        3:{image:"/img3.jpg"  ,description: "A perfect blend of warmth and allure🌺🔥✨ #Vibes" },
        4: {image: "/img4.jpg" , description: "Inspiration begins✨ with a spritz #Inspiration #Trend"},
        5: {image: "/img5.jpg" , description: "Trying out the latest makeup trends!📷"},
        6: {image: "/g6.jpg" , description: "A cozy evening with a good book 🌺"},
        7: {image: "/img7.jpg" , description: "Good food, good mood. 🍴"},
        8: {image: "/img8.jpg" , description: "Chasing sunsets and making memories🌞💖"},
        9: {image: "/img9.jpg" , description: "Life is short, eat the dessert 🍰"},
        10: {image: "/img10.jpg" , description: "Travel far, travel wide, travel often 🌏"},
        11: {image: "/img11.jpg" , description: "Chasing rainbows down an open road 🌈🚗"},


    }
    const post = posts[params.id];

  return (
    <div className=" flex flex-col items-center justify-center h-screen bg-neutral-800">
        <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-10">
        <svg className="bg-neutral-500 p-0.5 rounded-full text-white" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
  </svg>

  <Image src={post.image} alt={"View"} width={200} height={200} className="lg:h-[70vh] lg:w-[60vw]" ></Image>

  <svg className="bg-neutral-500 p-0.5 rounded-full text-white" width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
  </svg>
        </div>
        <p className="text-[17px] text-white  ml-16 ">
        {post.description}
        </p>
        </div>
    </div>
  )
}
