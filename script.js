// Configure the commercial WhatsApp number in international format, digits only.
// Example: 5511999999999. Keep empty until the client provides the correct number.
const BRAND = {
  whatsapp: "",
  name: "Mauricio Canto Contabilidade",
};

const menuToggle = document.querySelector(".menu-toggle");
const primaryNav = document.querySelector("#primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
  primaryNav.classList.toggle("is-open", !isOpen);
});

primaryNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    primaryNav.classList.remove("is-open");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

const form = document.querySelector("#contact-form");
const status = document.querySelector("#form-status");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  status.className = "form-status";

  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const name = String(data.get("name")).trim();
  if (name.length < 2) {
    document.querySelector("#name").setCustomValidity("Digite seu nome para continuar.");
    document.querySelector("#name").reportValidity();
    document.querySelector("#name").setCustomValidity("");
    return;
  }

  if (!/^\d{12,15}$/.test(BRAND.whatsapp)) {
    status.textContent = "O formulário está pronto. Para receber mensagens, falta configurar o número comercial de WhatsApp do escritório.";
    status.setAttribute("role", "status");
    return;
  }

  const lines = [
    `Olá! Meu nome é ${name}.`,
    data.get("business") ? `Empresa: ${String(data.get("business")).trim()}.` : "",
    `Assunto: ${data.get("need")}.`,
    data.get("message") ? `Mensagem: ${String(data.get("message")).trim()}` : "",
  ].filter(Boolean);
  const url = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
  window.location.assign(url);
});

form.querySelector("#name").addEventListener("input", (event) => event.currentTarget.setCustomValidity(""));
