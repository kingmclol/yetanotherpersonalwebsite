import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import LoadingAnimationMini from "../../ui/LoadingAnimationMini";
import { useLogin } from "./useLogin";

function LoginForm({ onSuccess }) {
  const { login, isPending } = useLogin();
  function handleSubmit(e) {
    e.preventDefault();

    console.log("login");
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    login(data, {
      onSuccess: onSuccess,
    });
  }
  return (
    <div className="mx-auto max-w-96">
      <form className="space-y-6" onSubmit={handleSubmit}>
        <FormRow label="Email">
          <Input
            type="email"
            autoComplete="username"
            id="email"
            name="email"
            required
            disabled={isPending}
          />
        </FormRow>
        <FormRow label="Password">
          <Input
            type="password"
            autoComplete="password"
            id="password"
            name="password"
            required
            disabled={isPending}
          />
        </FormRow>
        <div className="flex justify-end">
          <Button
            type="submit"
            className="flex min-h-12 min-w-24 items-center justify-center rounded-full bg-sky-600 px-4 py-2 text-white"
            disabled={isPending}
          >
            {isPending ? <LoadingAnimationMini /> : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
