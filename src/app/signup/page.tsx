import SignUpForm from "@/components/entry_page/SignUpForm";
import SignUpHeader from "@/components/entry_page/SignUpHeader";

export default function SignUpPage() {
  return (
    <main className="min-h-screen">
      <SignUpHeader />
      <div className="min-h-screen w-full bg-[#F6F6F6] px-[20px] py-[16px] sm:bg-white sm:pt-[80px]">
        <SignUpForm />
      </div>
    </main>
  );
}
