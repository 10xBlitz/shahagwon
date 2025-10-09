import Post from "./Post";
import { useEffect, useState } from "react";
import { subTabs } from "@/etc/tabs";
import { Pencil, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import { useQnaPosts } from "@/queries/qnaPosts";
import { useUserStore } from "@/hooks/useUserStore";
import SquareTabs from "@/components/common/SquareTabs";
import Pagination from "@/components/common/Pagination";

export default function MathQuestions() {
  const router = useRouter();
  const user = useUserStore((s) => s.user);

  const [selectedTab, setSelectedTab] = useState(subTabs[0].value);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: mathQuestions, isPending } = useQnaPosts({
    page: currentPage,
    category: "수학",
    filter: selectedTab,
    currentUuid: user?.user_id,
  });

  useEffect(() => {
    console.log("Math Questions:", mathQuestions?.data);
  }, [mathQuestions]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTab]);

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
          {isPending ? (
            <div className="flex justify-center py-12">
              <Loader2 className="animate-spin" size={40} />
            </div>
          ) : (
            <>
              {mathQuestions?.data.map((post) => (
                <Post key={post.id} post={post} />
              ))}
              {mathQuestions && mathQuestions.totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={mathQuestions.totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Button
        onClick={() => {
          router.push("/dashboard/question/write");
        }}
        icon={
          <Pencil strokeWidth={1.5} size={18} fill="#FFFFFF" stroke="#303030" />
        }
        iconPosition="left"
        className="fixed right-10 bottom-4 gap-2 rounded-3xl bg-[#303030] px-[24px] py-[12px] font-semibold text-[#FFFFFF]"
      >
        과목 등록하기
      </Button>
    </div>
  );
}
