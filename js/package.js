const packages = [
  {
    name: "Nirogyam A",
    parameters: "79 Parameters",
    price: "₹790",
    oldPrice: "₹2050",
    tests: [
      { name: "Complete Blood Count (CBC)", price: "₹390", parameters: "23 Parameters" },
      { name: "Fasting Sugar", price: "₹80", parameters: "1 Parameter" },
      { name: "ESR - Westergren", price: "₹200", parameters: "1 Parameter" },
      { name: "Liver Profile (LFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Kidney Profile (KFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Lipid Profile (Cholesterol)", price: "₹290", parameters: "9 Parameters" },
      { name: "Thyroid Profile", price: "₹290", parameters: "3 Parameters" },
      { name: "Urine R/M", price: "₹100", parameters: "20 Parameters" }
    ]
  },
  {
    name: "Nirogyam B",
    parameters: "82 Parameters",
    price: "₹890",
    oldPrice: "₹2440",
    tests: [
      { name: "Glycated hemoglobin (HbA1c)", price: "₹390", parameters: "3 Parameters" },
      { name: "Complete Blood Count (CBC)", price: "₹390", parameters: "23 Parameters" },
      { name: "Fasting Sugar", price: "₹80", parameters: "1 Parameter" },
      { name: "ESR - Westergren", price: "₹200", parameters: "1 Parameter" },
      { name: "Liver Profile (LFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Kidney Profile (KFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Lipid Profile", price: "₹290", parameters: "9 Parameters" },
      { name: "Thyroid Profile", price: "₹290", parameters: "3 Parameters" },
      { name: "Urine R/M", price: "₹100", parameters: "20 Parameters" }
    ]
  },
  {
    name: "Nirogyam C",
    parameters: "87 Parameters",
    price: "₹1250",
    oldPrice: "₹4390",
    tests: [
      { name: "Vitamin D", price: "₹750", parameters: "1 Parameter" },
      { name: "Vitamin B12", price: "₹650", parameters: "1 Parameter" },
      { name: "Iron Profile", price: "₹550", parameters: "3 Parameters" },
      { name: "Glycated hemoglobin (HbA1c)", price: "₹390", parameters: "3 Parameters" },
      { name: "Complete Blood Count (CBC)", price: "₹390", parameters: "23 Parameters" },
      { name: "Fasting Sugar", price: "₹80", parameters: "1 Parameter" },
      { name: "Liver Profile (LFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Kidney Profile (KFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Lipid Profile", price: "₹290", parameters: "9 Parameters" },
      { name: "Thyroid Profile", price: "₹290", parameters: "3 Parameters" },
      { name: "Urine R/M", price: "₹100", parameters: "20 Parameters" }
    ]
  },
  {
    name: "Nirogyam Mini",
    parameters: "65 Parameters",
    price: "₹1150",
    oldPrice: "₹4010",
    tests: [
      { name: "Vitamin D", price: "₹750", parameters: "1 Parameter" },
      { name: "Vitamin B12", price: "₹650", parameters: "1 Parameter" },
      { name: "Iron Profile", price: "₹550", parameters: "3 Parameters" },
      { name: "Glycated hemoglobin (HbA1c)", price: "₹390", parameters: "3 Parameters" },
      { name: "Complete Blood Count (CBC)", price: "₹390", parameters: "23 Parameters" },
      { name: "Liver Profile (LFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Kidney Profile (KFT)", price: "₹350", parameters: "11 Parameters" },
      { name: "Lipid Profile", price: "₹290", parameters: "9 Parameters" },
      { name: "Thyroid Profile", price: "₹290", parameters: "3 Parameters" }
    ]
  }
];

const container = document.getElementById("packageContainer");

packages.forEach(pkg => {

  const card = document.createElement("div");
  card.classList.add("package-card");

  card.innerHTML = `
    <h3>${pkg.name}</h3>
    <div class="parameters-count">${pkg.parameters}</div>

    <div class="price">
      <strong>${pkg.price}</strong>
      <span class="old-price">${pkg.oldPrice}</span>
    </div>

    <button class="book-btn">Book Now</button>

    <ul class="test-list">
      ${pkg.tests.map(test => `
        <li>
          <div class="test-info">
            <strong>${test.name}</strong>
            <small>${test.parameters}</small>
          </div>
          <span class="test-price">${test.price}</span>
        </li>
      `).join("")}
    </ul>
  `;

  card.querySelector(".book-btn").addEventListener("click", () => {

    const testsList = pkg.tests
      .map(test =>
        `• ${test.name}\n   ${test.parameters} - ${test.price}`
      )
      .join("\n\n");

    const message =
      `Hello LabXperts Team,\n\n` +
      `I would like to book the following package:\n\n` +
      `Package: ${pkg.name}\n` +
      `Total Parameters: ${pkg.parameters}\n` +
      `Offer Price: ${pkg.price}\n` +
      `Original Price: ${pkg.oldPrice}\n\n` +
      `Tests Included:\n\n${testsList}\n\n` +
      `Please assist with booking.`;

    window.open(
      `https://wa.me/919650624441?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });

  container.appendChild(card);

});