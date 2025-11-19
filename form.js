  // ✅ Initialize EmailJS
  // (function() {
    // emailjs.init("YOUR_PUBLIC_KEY"); // <-- yahan apna EmailJS public key dalna hai
  // })();

    // ✅ Send Function
  // document.getElementById("sendBtn").addEventListener("click", function() {
    // const params = {
    //   name: document.getElementById("name").value,
    //   email: document.getElementById("email").value,
    //   phone: document.getElementById("phone").value,
    //   subject: document.getElementById("subject").value,
    //   message: document.getElementById("message").value
    // };

  //   if (!params.name || !params.email || !params.message) {
  //     alert("Please fill in all required fields.");
  //     return;
  //   }

  //       emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", params)
  //     .then(function(response) {
  //       alert("✅ Your message has been sent successfully!");
  //       document.querySelectorAll('.subscribe-input').forEach(i => i.value = "");
  //     }, function(error) {
  //       alert("❌ Failed to send. Please try again.");
  //       console.error("EmailJS Error:", error);
  //     });
  // });

  // // Email-icon
    //  === CONFIG: put your email & optional default subject/body here ===
  const EMAIL = "musmanchauhan191@gmail.com"; // <- replace this with your email
  const DEFAULT_SUBJECT = "Project Inquiry";
  const DEFAULT_BODY = "Hi Usman,%0A%0AI'd like to discuss a project with you.";

  // Helper to build mailto and Gmail web URL
  function buildMailto(email, subject, body) {
    const s = encodeURIComponent(subject || "");
    const b = encodeURIComponent(body || "");
    return `mailto:${email}?subject=${s}&body=${b}`;
  }

  function buildGmailUrl(email, subject, body) {
    // Gmail compose web URL (view=cm opens compose)
    const s = encodeURIComponent(subject || "");
    const b = encodeURIComponent(body || "");
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${s}&body=${b}${email}&su=${s}&body=${b}`;
  }

  // Simple mobile detection
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
  }

  // Attach behavior on page load
  document.addEventListener("DOMContentLoaded", function () {
    const link = document.getElementById("smart-email-link");
    if (!link) return;

    if (isMobileDevice()) {
      // Mobile: open mail app using mailto
      link.href = buildMailto(EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY);
      // Optional: don't open new tab for mailto
      link.target = "_self";
    } else {
      // Desktop: prefer Gmail web compose in new tab
      link.href = buildGmailUrl(EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY);
      link.target = "_blank";
      link.rel = "noopener noreferrer";
    }

    // Optional: fallback click handler if automatic behavior fails
    link.addEventListener("click", function (e) {
      // If desktop and user has no Gmail session, mailto fallback:
      if (!isMobileDevice() && !navigator.onLine) {
        // offline fallback to mailto
        link.href = buildMailto(EMAIL, DEFAULT_SUBJECT, DEFAULT_BODY);
      }
      // no need to preventDefault — normal navigation will occur
              });
                });
  // Email-icon

  // Email.JS
function sendEmail() {
  const templateParams = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    subject: document.querySelector("#subject").value,
    message: document.querySelector("#message").value,
  };

    emailjs
    .send(
      "service_f70we8d",
      "template_1ywblxq",
      templateParams
    ).then(() => alert("sent"))
.catch(() => alert("Email not sent!!"));
   }
  // Email.Js