/* =====================================================
   FOOTER WITH SEARCH (LABXPERTS)
===================================================== */

/* ================= GLOBAL CATEGORY DATA ================= */
/* (Same data header search use karta hai) */

const categories = [
    "Antenatal Profile",
    "Arthritis Profile - Advanced",
    "Arthritis Profile - Basic",
    "Basic Allergy Detector Profile",
    "Complete Blood Count (CBC)",
    "Comprehensive Allergy Panel",
    "Double Marker",
    "Electrolytes",
    "ENA Profile",

    "Fertility Profile",
    "Fever Panel - 1",
    "Fever Panel - 2",
    "Fever Panel - 3",
    "Free Light Chain Assay",
    "Free Thyroid Profile",
    "Infectious Disease Profile",
    "Iron Profile, Basic",
    "Kidney Profile",

    "Lipid Profile",
    "Liver Profile",
    "Nirogyam A",
    "Nirogyam A 1 Plus 1",
    "Nirogyam B",
    "Nirogyam B 1 Plus 1",
    "Nirogyam C",
    "Nirogyam C 1 Plus 1",
    "Pancreas Profile",

    "PCOD Profile",
    "Pre Marital Package",
    "Pre Operative Profile",
    "PSA Profile",
    "Quadruple Markers",
    "Torch-8 Profile IgG and IgM",
    "Torch Igg",
    "Torch Igm",
    "Triple Marker 2nd Trimester"
];


/* ================= FOOTER HTML ================= */

const footerHTML = `
<footer class="footer-section">
  <div class="container">
    <div class="row">

      <!-- ABOUT -->
      <div class="col-md-4 mb-4">
        <img src="images/logo.png" alt="LabXperts Logo"
             style="max-width:200px;" class="mb-3">
        <p>
          LabXperts provides reliable diagnostic services and health
          packages designed for preventive and advanced healthcare needs.
        </p>
      </div>

      

      <!-- LOCATION -->
      <div class="col-md-4 mb-4">
        <h5>Home Collection Available in Ghaziabad</h5>
        <ul class="footer-links location-list">
          <li>Patel Nagar 1st</li>
                    <li>Patel Nagar 2nd</li>
                    <li>Patel Nagar 3rd</li>
                    <li>Lohia Nagar</li>
                    <li>Nand Gram</li>
                    <li>Raj Nagar</li>
                    <li>Kavi Nagar</li>
                    <li>Nehru Nagar</li>
                    <li>Shastri Nagar</li>
                    <li>Govind Puram</li>
                    <li>Rakesh Marg</li>
                    <li>Golf Links</li>
                    <li>Wave City</li>
                    <li>Aditya World City</li>
                    <li>Vasundhara</li>
                    <li>Indirapuram</li>
                    <li>Vaishali</li>
                    <li>Kausambhi</li>
                    <li>Crossing Republic</li>
                    <li>Pratap Vihar</li>
                    <li>Vijay Nagar</li>
                    <li>Lal Kuan</li>
                     <li>Raj Nagar Extension</li>
                    <li>Swarn Jayanti Puram</li>
        </ul>
      </div>

      <!-- SEARCH BOX -->
      <div class="col-md-4 mb-4">
        <h5>Search Packages</h5>

        <div class="search-box position-relative">
          <input type="text"
                 id="footerSearch"
                 class="form-control"
                 placeholder="Search Packages / Tests...">

          <button id="footerSearchBtn" class="search-btn">🔍</button>

          <div id="footerSearchSuggestions"
               class="search-suggestions"></div>
        </div>
      </div>

    </div>

    <div class="footer-bottom text-center mt-3">
      <p>© ${new Date().getFullYear()} LabXperts. All Rights Reserved.</p>
    </div>
  </div>
</footer>
`;


/* ================= INSERT FOOTER ================= */

document.body.insertAdjacentHTML("beforeend", footerHTML);


/* =====================================================
   SEARCH SYSTEM (FOOTER)
===================================================== */

function setupFooterSearch() {

    const input = document.getElementById("footerSearch");
    const btn = document.getElementById("footerSearchBtn");
    const box = document.getElementById("footerSearchSuggestions");

    if (!input) return;

    function showSuggestions(query) {

        box.innerHTML = "";

        if (!query) {
            box.style.display = "none";
            return;
        }

        const results = categories.filter(cat =>
            cat.toLowerCase().includes(query)
        );

        if (!results.length) {
            box.innerHTML = `<div class="no-result">No results found</div>`;
        } else {

            results.forEach(item => {
                box.innerHTML += `
          <div class="suggestion-item" data-name="${item}">
            <strong>${item}</strong>
            <div class="suggestion-category">Profile</div>
          </div>
        `;
            });
        }

        box.style.display = "block";
    }

    /* INPUT SEARCH */
    input.addEventListener("input", e => {
        showSuggestions(e.target.value.toLowerCase().trim());
    });

    /* CLICK SUGGESTION */
    box.addEventListener("click", e => {

        const item = e.target.closest(".suggestion-item");
        if (!item) return;

        const name = item.dataset.name;

        window.location.href =
            `package-detail.html?type=profile&name=${encodeURIComponent(name)}`;
    });

    /* BUTTON SEARCH */
    btn.addEventListener("click", () => {

        const value = input.value.trim();
        if (!value) return;

        window.location.href =
            `package-detail.html?search=${encodeURIComponent(value)}`;
    });

    /* OUTSIDE CLICK CLOSE */
    document.addEventListener("click", e => {
        if (!e.target.closest(".search-box")) {
            box.style.display = "none";
        }
    });
}


/* ================= INIT ================= */

document.addEventListener("DOMContentLoaded", setupFooterSearch);