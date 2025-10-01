import Post from "./Post";
import { useState } from "react";
import { subTabs } from "@/etc/tabs";
import { postsTemp } from "../../etc/temp";
import SquareTabs from "../common/SquareTabs";

export default function KoreanQuestions() {
  const [selectedTab, setSelectedTab] = useState(subTabs[0].value);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col">
        <div className="py-[20px]">
          <SquareTabs
            tabs={subTabs}
            selectedTab={selectedTab}
            onClick={(tab) => {
              setSelectedTab(tab);
            }}
          />
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
