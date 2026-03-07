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
  name: "Sampoorna Wellness Profile",
  parameters: "120+ Parameters",
  price: "₹4999",
  oldPrice: "₹12000",
  tests: [
    { name: "Blood Toxic Elements", parameters: "21 Parameters" },
    { name: "Complete Blood Count (CBC)" },
    { name: "ESR (Erythrocyte Sedimentation Rate)" },
    { name: "Glycated Hemoglobin (HbA1c)" },
    { name: "Thyroid Profile (T3, T4, TSH)" },
    { name: "Iron Profile" },
    { name: "Ferritin" },
    { name: "Liver Function Test (LFT)" },
    { name: "Lipid Profile" },
    { name: "Kidney Function Test (KFT)" },
    { name: "Glomerular Filtration Rate (GFR)" },
    { name: "Lipoprotein (a)" },
    { name: "Apolipoprotein B/A1" },
    { name: "hs-CRP (High Sensitivity C-Reactive Protein)" },
    { name: "Homocysteine" },
    { name: "Fructosamine" },
    { name: "Ketone" },
    { name: "Insulin (Fasting)" },
    { name: "Vitamin B12" },
    { name: "Folic Acid" },
    { name: "Testosterone - Total" },
    { name: "Cystatin-C" },
    { name: "Zinc" },
    { name: "Copper" },
    { name: "Amylase" },
    { name: "Lipase" },
    { name: "Anti-CCP" },
    { name: "ANA (Antinuclear Antibody)" },
    { name: "Vitamin K" },
    { name: "Vitamin E" },
    { name: "Vitamin B7 (Biotin)" },
    { name: "Vitamin B6 (Pyridoxine)" },
    { name: "Vitamin B5 (Pantothenic Acid)" },
    { name: "Vitamin B3 (Niacin)" },
    { name: "Vitamin B2 (Riboflavin)" },
    { name: "Vitamin B1 (Thiamine)" },
    { name: "Vitamin A" },
    { name: "Vitamin D2, D3 (Total Vitamin D)" },
    { name: "RA Quantitative" },
    { name: "ASO Titre" },
    { name: "Microalbumin Screen" },
    { name: "Urine Creatinine" },
    { name: "UACR Screening (Urine Albumin Creatinine Ratio)" }
  ]
}
];

const container = document.getElementById("packageContainer");

packages.forEach((pkg, index) => {

  const card = document.createElement("div");
  card.classList.add("package-card");

  const firstTests = pkg.tests.slice(0, 5);
  const remainingTests = pkg.tests.slice(5, 8);

  card.innerHTML = `
    <h3>${pkg.name}</h3>

    <div class="parameters-count">${pkg.parameters || ""}</div>

    <div class="price">
      <strong>${pkg.price || ""}</strong>
      <span class="old-price">${pkg.oldPrice || ""}</span>
    </div>

    <button class="book-btn">Book Now</button>

    <ul class="test-list" id="testList-${index}">
      ${firstTests.map(test => `
        <li>
          <div class="test-info">
            <strong>${test.name}</strong>
            <small>${test.parameters || ""}</small>
          </div>
          <span class="test-price">${test.price || ""}</span>
        </li>
      `).join("")}
    </ul>

    ${
      remainingTests.length > 0
        ? `<button class="view-more-btn">View More</button>`
        : ""
    }
  `;

  container.appendChild(card);

  const list = card.querySelector(`#testList-${index}`);
  const viewBtn = card.querySelector(".view-more-btn");

  if (viewBtn) {

    let expanded = false;

    viewBtn.addEventListener("click", () => {

      expanded = !expanded;

      if (expanded) {

        list.innerHTML = pkg.tests.map(test => `
          <li>
            <div class="test-info">
              <strong>${test.name}</strong>
              <small>${test.parameters || ""}</small>
            </div>
            <span class="test-price">${test.price || ""}</span>
          </li>
        `).join("");

       list.classList.add("scroll-active");

        viewBtn.innerText = "View Less";

      } else {

        list.innerHTML = firstTests.map(test => `
          <li>
            <div class="test-info">
              <strong>${test.name}</strong>
              <small>${test.parameters || ""}</small>
            </div>
            <span class="test-price">${test.price || ""}</span>
          </li>
        `).join("");

       list.classList.remove("scroll-active");

        viewBtn.innerText = "View More";

      }

    });

  }

  card.querySelector(".book-btn").addEventListener("click", () => {

    const testsList = pkg.tests
      .map(test =>
        `• ${test.name}
${test.parameters ? "   " + test.parameters : ""}
${test.price ? "   " + test.price : ""}`
      )
      .join("\n\n");

    const message =
`Hello LabXperts Team,

I would like to book the following package:

Package: ${pkg.name}
Total Parameters: ${pkg.parameters}
Offer Price: ${pkg.price}
Original Price: ${pkg.oldPrice}

Tests Included:

${testsList}

Please assist with booking.`;

    window.open(
      `https://wa.me/919650624441?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  });

});