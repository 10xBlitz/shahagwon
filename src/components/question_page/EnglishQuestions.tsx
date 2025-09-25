import Post from "./Post";
import { useState } from "react";
import Button from "../common/Button";
import { postsTemp } from "../../etc/temp";

const subTabs = ["ALL", "MY"];

export default function EnglishQuestions() {
  const [selectedTab, setSelectedTab] = useState("ALL");

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <div className="flex flex-row py-[20px]">
          {subTabs.map((tab, index) => (
            <Button
              key={index}
              onClick={() => {
                setSelectedTab(tab);
              }}
              className={`border p-3 text-sm font-medium ${index === 0 ? "rounded-l" : "rounded-r"} ${selectedTab === tab ? "border-[#D1D6DD] bg-[#EDF4FC] text-[#1C75D2]" : "border-[#DFDFDF] bg-white text-[#747474]"}`}
            >
              {tab}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-[60px]">
          {postsTemp.map((post, index) => (
            <Post
              key={index}
              username={post.username}
              timestamp={post.timestamp}
              title={post.title}
              content={post.content}
              imageSrc={post.imageSrc}
              avatarSrc={post.avatarSrc}
              comments={post.comments}
              likesCount={post.likesCount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
