import Header from "../components/entry_page/LoginHeader";
import LoginForm from "../components/entry_page/LogInForm";

export default function LoginPage() {
  return (
    <main>
      <Header />
      <div className="w-full px-[20px]">
        <h1 className="mx-auto mt-[32px] block text-xl font-medium sm:hidden">
          이제 쉽고 간편하게 <span className="block">로그인하세요!</span>
        </h1>
        <h1 className="mx-auto mt-[72px] hidden max-w-[460px] text-3xl sm:block sm:max-w-[440px]">
          로그인
        </h1>
        <LoginForm />
        <div className="mt-4 block h-px w-full bg-gray-300 sm:hidden" />
      </div>
    </main>
  );
}
