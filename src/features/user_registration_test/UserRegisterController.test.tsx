import { render, fireEvent, waitFor } from "@testing-library/react";
import * as service from "../user_registration/UserRegisterService";
import { saveUserAction } from "../user_registration/UserRegisterController";

// Componente de teste para usar o hook
function TestComponent({ onSuccess }: { onSuccess: () => void }) {
  const { form, handleChange, handleSubmit, setForm } =
    saveUserAction(onSuccess);

  return (
    <form onSubmit={handleSubmit} data-testid="form">
      <input
        id="name"
        value={form.name}
        onChange={handleChange}
        data-testid="name"
      />
      <input
        id="surname"
        value={form.surname}
        onChange={handleChange}
        data-testid="surname"
      />
      <input
        id="email"
        value={form.email}
        onChange={handleChange}
        data-testid="email"
      />
      <input
        id="password"
        value={form.password}
        onChange={handleChange}
        data-testid="password"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}

jest.mock("../user_registration/UserRegisterService");

describe("TESTING THE saveUserAction METHOD:", () => {
  it("atualiza o form ao digitar", () => {
    const onSuccess = jest.fn();
    const { getByTestId } = render(<TestComponent onSuccess={onSuccess} />);
    const nameInput = getByTestId("name") as HTMLInputElement;
    fireEvent.change(nameInput, { target: { id: "name", value: "João" } });
    expect(nameInput.value).toBe("João");
  });

  it("Call saveUser and onSuccess on submit", async () => {
    const onSuccess = jest.fn();
    (service.saveUser as jest.Mock).mockResolvedValue(undefined);
    const { getByTestId } = render(<TestComponent onSuccess={onSuccess} />);
    fireEvent.change(getByTestId("name"), {
      target: { id: "name", value: "A" },
    });
    fireEvent.change(getByTestId("surname"), {
      target: { id: "surname", value: "B" },
    });
    fireEvent.change(getByTestId("email"), {
      target: { id: "email", value: "a@b.com" },
    });
    fireEvent.change(getByTestId("password"), {
      target: { id: "password", value: "123" },
    });

    fireEvent.submit(getByTestId("form"));
    await waitFor(() => expect(service.saveUser).toHaveBeenCalled());
    expect(onSuccess).toHaveBeenCalled();
  });
});
