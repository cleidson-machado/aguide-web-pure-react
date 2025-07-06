import { saveUser } from "../identity_creation/IdentityCreationService";

// Silencia alert durante os testes
window.alert = jest.fn();

global.fetch = jest.fn();

describe("TESTING THE saveUsern METHOD", () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it("It is POSTing correctly to the Rest API", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: true });
    const payload = {
      name: "A",
      surname: "B",
      email: "a@b.com",
      passwd: "123",
    };
    await saveUser(payload);
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("/users"),
      expect.objectContaining({
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    );
  });

  it("lança erro se resposta não for ok", async () => {
    (fetch as jest.Mock).mockResolvedValue({ ok: false });
    await expect(
      saveUser({ name: "", surname: "", email: "", passwd: "" })
    ).rejects.toThrow("Erro ao criar usuário");
  });
});
