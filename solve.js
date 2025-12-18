const TwoCaptcha = require("@2captcha/captcha-solver");
// Masukkan API Key 2Captcha Anda di sini
const solver = new TwoCaptcha.Solver("API-KEY-2CAPTCHA-ANDA");

async function solveRecaptcha() {
  try {
    console.log("   🧩 Sedang menyelesaikan Recaptcha...");
    const res = await solver.recaptcha({
      pageurl: "https://prelaunch.humanoidnetwork.org/training",
      // Sitekey asli Humanoid Network (diambil dari file JS sebelumnya)
      googlekey: "6LcdlCcsAAAAAJGvjt5J030ySi7htRzB6rEeBgcP", 
    });
    console.log("   ✅ Recaptcha Solved!");
    return res.data; // Mengembalikan token
  } catch (err) {
    console.error("   ❌ Gagal solve recaptcha:", err.message);
    throw err;
  }
}

module.exports = { solveRecaptcha };
