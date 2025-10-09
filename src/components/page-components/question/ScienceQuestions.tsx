import Post from "./Post";
import { useState } from "react";
import { subTabs } from "@/etc/tabs";
import { Pencil } from "lucide-react";
import { postsTemp } from "@/etc/temp";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import SquareTabs from "@/components/common/SquareTabs";

export default function ScienceQuestions() {
  const router = useRouter();

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
      <div className="fixed right-10 bottom-4 flex flex-col gap-2">
        <Button
          onClick={() => {
            router.push("/dashboard/question/write");
          }}
          icon={
            <Pencil
              strokeWidth={1.5}
              size={18}
              fill="#FFFFFF"
              stroke="#303030"
            />
          }
          iconPosition="left"
          className="gap-2 rounded-3xl bg-[#303030] px-[24px] py-[12px] font-semibold text-[#FFFFFF]"
        >
          과목 등록하기
        </Button>
      </div>
    </div>
  );
}
