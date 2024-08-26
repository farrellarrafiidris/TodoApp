import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function Sidebar() {
  const { login, register, isAuthenticated, logout, user ,isLoading } = useKindeAuth();
  return (
    <section className="flex flex-col col-[2/3] row-[2/3] bg-[#fffcf9] border-l-2 border-slate-200 px-[12px] pt-[18px] pb-[28px]">
      <AddTodoForm />

      <div className="mt-auto space-y-2">
        {isLoading ? null :isAuthenticated ? (
          <>
          <p className="text-xs">Logged as {user?.email}</p>
          <Button onClick={logout} buttonType="secondary">
            Log Out
          </Button>
          </>
        ) : (
          <>
            <Button
              onClick={login}
              buttonType="secondary"
            >
              Log In
            </Button>
            <Button
              onClick={register}
              buttonType="secondary"
            >
              Register
            </Button>
          </>
        )}
      </div>
    </section>
  );
}
