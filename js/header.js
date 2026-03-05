document.addEventListener("DOMContentLoaded", function () {

// ================= HEADER HTML =================
const headerHTML = `
<header class="header-section" id="header">
  <div class="container">
    <div class="d-flex justify-content-between align-items-center">

      <div class="logo-sec">
        <a href="index.html">
          <img src="images/logo.png" alt="LabXperts Logo">
        </a>
      </div>

      <nav class="menu-sec" id="menu">
        <ul class="menu-list">
          <li><a href="index.html#home">Home</a></li>
          <li><a href="index.html#about">About Us</a></li>
          <li><a href="index.html#Bodypackages">Body Checkup</a></li>
          <li class="mega-parent">
            <a href="#">Health Profiles</a>

            <div class="mega-menu">

              <!-- Column 1 -->
              <div class="mega-column">
                <a href="package-detail.html?type=profile&name=Antenatal Profile">Antenatal Profile</a>
                <a href="package-detail.html?type=profile&name=Arthritis Profile - Advanced">Arthritis Profile - Advanced</a>
                <a href="package-detail.html?type=profile&name=Arthritis Profile - Basic">Arthritis Profile - Basic</a>
                <a href="package-detail.html?type=profile&name=Basic Allergy Detector Profile">Basic Allergy Detector Profile</a>
                <a href="package-detail.html?type=profile&name=Complete Blood Count (CBC)">Complete Blood Count (CBC)</a>
                <a href="package-detail.html?type=profile&name=Comprehensive Allergy Panel">Comprehensive Allergy Panel</a>
                <a href="package-detail.html?type=profile&name=Double Marker">Double Marker</a>
                <a href="package-detail.html?type=profile&name=Electrolytes">Electrolytes (NA, K, Cl)</a>
                <a href="package-detail.html?type=profile&name=ENA Profile">ENA Profile</a>
              </div>

              <!-- Column 2 -->
              <div class="mega-column">
                <a href="package-detail.html?type=profile&name=Fertility Profile">Fertility Profile</a>
                <a href="package-detail.html?type=profile&name=Fever Panel - 1">Fever Panel - 1</a>
                <a href="package-detail.html?type=profile&name=Fever Panel - 2">Fever Panel - 2</a>
                <a href="package-detail.html?type=profile&name=Fever Panel - 3">Fever Panel - 3</a>
                <a href="package-detail.html?type=profile&name=Free Light Chain Assay">Free Light Chain Assay</a>
                <a href="package-detail.html?type=profile&name=Free Thyroid Profile">Free Thyroid Profile</a>
                <a href="package-detail.html?type=profile&name=Infectious Disease Profile">Infectious Disease Profile</a>
                <a href="package-detail.html?type=profile&name=Iron Profile, Basic">Iron Profile - Basic</a>
                <a href="package-detail.html?type=profile&name=Kidney Profile">Kidney Profile</a>
              </div>

              <!-- Column 3 -->
              <div class="mega-column">
                <a href="package-detail.html?type=profile&name=Lipid Profile">Lipid Profile</a>
                <a href="package-detail.html?type=profile&name=Liver Profile">Liver Profile</a>
                <a href="package-detail.html?type=profile&name=Nirogyam A">Nirogyam A</a>
                <a href="package-detail.html?type=profile&name=Nirogyam A 1 Plus 1">Nirogyam A - 1+1</a>
                <a href="package-detail.html?type=profile&name=Nirogyam B">Nirogyam B</a>
                <a href="package-detail.html?type=profile&name=Nirogyam B 1 Plus 1">Nirogyam B - 1+1</a>
                <a href="package-detail.html?type=profile&name=Nirogyam C">Nirogyam C</a>
                <a href="package-detail.html?type=profile&name=Nirogyam C 1 Plus 1">Nirogyam C - 1+1</a>
                <a href="package-detail.html?type=profile&name=Pancreas Profile">Pancreas Profile</a>
              </div>

              <!-- Column 4 -->
              <div class="mega-column">
                <a href="package-detail.html?type=profile&name=PCOD Profile">PCOD Profile</a>
                <a href="package-detail.html?type=profile&name=Pre Marital Package">Pre Marital Package</a>
                <a href="package-detail.html?type=profile&name=Pre Operative Profile">Pre Operative Profile</a>
                <a href="package-detail.html?type=profile&name=PSA Profile">PSA Profile</a>
                <a href="package-detail.html?type=profile&name=Quadruple Markers">Quadruple Markers</a>
                <a href="package-detail.html?type=profile&name=Torch-8 Profile IgG and IgM">Torch-8 Profile (IgG & IgM)</a>
                <a href="package-detail.html?type=profile&name=Torch Igg">Torch-IgG</a>
                <a href="package-detail.html?type=profile&name=Torch Igm">Torch-IgM</a>
                <a href="package-detail.html?type=profile&name=Triple Marker 2nd Trimester">Triple Marker - (2nd Trimester)</a>
              </div>

            </div>
          </li>
          <li class="mega-parent">
            <a href="#">Primary Test</a>

            <div class="mega-menu large-menu">


              <!-- COLUMN 1 -->
              <div class="mega-column">

                <a href="primary-test.html?name=17-Alpha-Hydroxy-Progesterone">17-Alpha Hydroxy Progesterone</a>
                <a href="primary-test.html?name=ACCP">ACCP</a>
                <a href="primary-test.html?name=ACTH">ACTH</a>
                <a href="primary-test.html?name=Activated Partial Thromboplastin Time (Aptt)">Activated Partial Thromboplastin Time (APTT)</a>
                <a href="primary-test.html?name=Amylase">Amylase</a>
                <a href="primary-test.html?name=ANCA - IFA">ANCA - IFA</a>
                <a href="primary-test.html?name=Anti Mullerian Hormones(AMH)">Anti Mullerian Hormones (AMH)</a>
                <a href="primary-test.html?name=Anti Nuclear Antibody (ANA)">Anti Nuclear Antibody (ANA)</a>
                <a href="primary-test.html?name=ANTI STREPTOLYSIN O (ASO) TITRES">ANTI STREPTOLYSIN O (ASO) TITRES</a>
                <a href="primary-test.html?name=Anti Thyroglobulin Antibody">Anti Thyroglobulin Antibody</a>
               
                <a href="primary-test.html?name=Aspergillus IgE ,by Enzyme linked immunosorbent assay (ELISA)">Aspergillus IgE, by Enzyme Linked Immunosorbent Assay
                  (ELISA)</a>


                <a href="primary-test.html?name=Aspergillus IgG ,by Enzyme linked immunosorbent assay (ELISA)">Aspergillus IgG, by Enzyme Linked Immunosorbent Assay
                  (ELISA)</a>

                <a href="primary-test.html?name=Aspergillus IgM ,by Enzyme linked immunosorbent assay (ELISA)">Aspergillus IgM, by Enzyme Linked Immunosorbent Assay
                  (ELISA)</a>

                <a href="primary-test.html?name=Bence Jones Protein, Urine">Bence Jones Protein, Urine</a>
                <a href="primary-test.html?name=Beta 2 Microglobulin">Beta 2 Microglobulin</a>
                <a href="primary-test.html?name=Beta HCG - Titre">Beta HCG - Titre</a>

                <a href="primary-test.html?name=Bicarbonate">Bicarbonate</a>
                <a href="primary-test.html?name=Blood Culture">Blood Culture</a>
                <a href="primary-test.html?name=Blood Picture (Peripheral Smear)">Blood Picture (Peripheral Smear)</a>
                <a href="primary-test.html?name=CA 125 (Ovarian Cancer Marker)">CA 125 (Ovarian Cancer Marker)</a>
                <a href="primary-test.html?name=CA 15.3 (Breast Cancer)">CA 15.3 (Breast Cancer)</a>
                <a href="primary-test.html?name=CA 19.9 (Pancreatic Cancer)">CA 19.9 (Pancreatic Cancer)</a>
                <a href="primary-test.html?name=Calcium - Ionized">Calcium - Ionized</a>
                <a href="primary-test.html?name=Calcium-- Urine (24 hrs)">Calcium - Urine (24 hrs)</a>
                <a href="primary-test.html?name=Calcium Serum">Calcium, Serum</a>
                <a href="primary-test.html?name=C-ANCA (PR3) ,by ELISA">C-ANCA (PR3), by ELISA</a>
                <a href="primary-test.html?name=CEA">CEA</a>
                <a href="primary-test.html?name=CK- MB">CK- MB</a>
                <a href="primary-test.html?name=Coombs Test Direct">Coombs Test Direct</a>
                <a href="primary-test.html?name=Coombs Test Indirect">Coombs Test Indirect</a>
                <a href="primary-test.html?name=Copper">Copper</a>

              </div>


              <!-- COLUMN 2 -->
              <div class="mega-column">

                <a href="primary-test.html?name=Cortisol">Cortisol</a>
                <a href="primary-test.html?name=C-peptide">C-peptide</a>
                <a href="primary-test.html?name=CPK">CPK</a>
                <a href="primary-test.html?name=CREATININE URINE SPOT">CREATININE URINE SPOT</a>
                <a href="primary-test.html?name=CRP (C-Reactive Protein)">CRP (C-Reactive Protein)</a>
                <a href="primary-test.html?name=D-Dimer">D-Dimer</a>
                <a href="primary-test.html?name=Dengue IgG">Dengue IgG</a>
                <a href="primary-test.html?name=Dengue IgM">Dengue IgM</a>
                <a href="primary-test.html?name=Dengue Ns1 Antigen">Dengue NS1 Antigen</a>
                <a href="primary-test.html?name=DHEA-S">DHEA-S</a>
                <a href="primary-test.html?name=Erythrocyte Sedimentation Rate (ESR)">Erythrocyte Sedimentation Rate (ESR)</a>
                <a href="primary-test.html?name=Estradiol">Estradiol</a>
                <a href="primary-test.html?name=Ferritin">Ferritin</a>
                <a href="primary-test.html?name=Folic Acid (Folate)">Folic Acid (Folate)</a>
                <a href="primary-test.html?name=FSH">FSH</a>
                <a href="primary-test.html?name=G-6-PD, QUANTITATIVE, BLOOD">G-6-PD, QUANTITATIVE, BLOOD</a>
                <a href="primary-test.html?name=H.PYLORI">H.PYLORI</a>
                <a href="primary-test.html?name=Hb Electrophoresis">Hb Electrophoresis</a>
                <a href="primary-test.html?name=HBA1c (Glycosylated Hemoglobin)">HBA1c (Glycosylated Hemoglobin)</a>
                <a href="primary-test.html?name=Helicobacter Pylori IgA">Helicobacter Pylori IgA</a>
                <a href="primary-test.html?name=Helicobacter Pylori IgG">Helicobacter Pylori IgG</a>
                <a href="primary-test.html?name=Helicobacter Pylori IgM">Helicobacter Pylori IgM</a>
                <a href="primary-test.html?name=Hepatitis A Antibody (Anti-HAV) IgG">Hepatitis A Antibody (Anti-HAV) IgG</a>
                <a href="primary-test.html?name=Hepatitis A Antibody (Anti-HAV) IgM">Hepatitis A Antibody (Anti-HAV) IgM</a>

                <a href="primary-test.html?name=Hepatitis B Surface Antigen">Hepatitis B Surface Antigen</a>
                <a href="primary-test.html?name=Hepatitis C Virus">Hepatitis C Virus</a>
                <a href="primary-test.html?name=Hepatitis E Virus - IgG (HEV IgG)">Hepatitis E Virus - IgG (HEV IgG)</a>
                <a href="primary-test.html?name=Hepatitis E Virus - IgM (HEV IgM)">Hepatitis E Virus - IgM (HEV IgM)</a>
               <a href="primary-test.html?name=Herpes-Simplex-Virus-1-and-2-IgG">Herpes Simplex Virus 1 & 2 IgG</a>

                <a href="primary-test.html?name=Herpes-Simplex-Virus-1-and-2-IgM">Herpes Simplex Virus 1 & 2 IgM</a>
                <a href="primary-test.html?name=Herpes Simplex Virus 1 IgG">Herpes Simplex Virus 1 IgG</a>

              </div>

              <!-- COLUMN 3 -->
              <div class="mega-column">

                <a href="primary-test.html?name=Herpes Simplex Virus 1 and 2 IgM">Herpes Simplex Virus 1 IgM</a>
                <a href="primary-test.html?name=Herpes Simplex Virus 2 IgG">Herpes Simplex Virus 2 IgG</a>
                <a href="primary-test.html?name=Herpes Simplex Virus 2 IgM">Herpes Simplex Virus 2 IgM</a>
                <a href="primary-test.html?name=High Sensitive CRP (HsCRP)">High Sensitive CRP (HsCRP)</a>
                <a href="primary-test.html?name=HIV 1 and 2 Antibody, by Elisa">HIV 1 & 2 Antibody, by Elisa</a>

                <a href="primary-test.html?name=HLA B - 27 by PCR">HLA B - 27 by PCR</a>
                <a href="primary-test.html?name=Homocysteine">Homocysteine</a>
                <a href="primary-test.html?name=IGE - Serum">IGE - Serum</a>
                <a href="primary-test.html?name=IgG4 ,by Immunonephelometry">IgG4, by Immunonephelometry</a>
                <a href="primary-test.html?name=Immunoglobulin A (IgA)">Immunoglobulin A (IgA)</a>
                <a href="primary-test.html?name=Immunoglobulin IgG">Immunoglobulin IgG</a>

                <a href="primary-test.html?name=Immunoglobulin IgM">Immunoglobulin IgM</a>
                <a href="primary-test.html?name=Insulin">Insulin</a>
                <a href="primary-test.html?name=Iron (Serum)">Iron (Serum)</a>

                <a href="primary-test.html?name=LH">LH</a>
                <a href="primary-test.html?name=Lipase">Lipase</a>
                <a href="primary-test.html?name=Lithium">Lithium</a>
                <a href="primary-test.html?name=Lupus Anticoagulant">Lupus Anticoagulant</a>
                <a href="primary-test.html?name=Magnesium">Magnesium</a>
                <a href="primary-test.html?name=P-ANCA (MPO) ,by ELISA">P-ANCA (MPO), by ELISA</a>

                <a href="primary-test.html?name=Parathyroid Hormone (PTH)">Parathyroid Hormone (PTH)</a>
                <a href="primary-test.html?name=Phosphorus">Phosphorus</a>
                <a href="primary-test.html?name=Potassium (K Plus)">Potassium (K+)</a>
                <a href="primary-test.html?name=Potassium Random (urine)">Potassium Random (urine)</a>
                <a href="primary-test.html?name=Pro - Beta Natriuretic Peptide (BNP)">Pro - Beta Natriuretic Peptide (BNP)</a>
                <a href="primary-test.html?name=Pro BNP">Pro BNP</a>

                <a href="primary-test.html?name=Progesterone">Progesterone</a>
                <a href="primary-test.html?name=Prolactin">Prolactin</a>
                <a href="primary-test.html?name=Protein - Urine (24 hours)">Protein - Urine (24 hours)</a>
                <a href="primary-test.html?name=Protein Electrophoresis (Serum)">Protein Electrophoresis (Serum)</a>
                <a href="primary-test.html?name=Prothrombin Time (PT)">Prothrombin Time (PT)</a>

              </div>

              <!-- COLUMN 4 -->
              <div class="mega-column">

                <a href="primary-test.html?name=PSA - Total (Prostate Antigen)">PSA - Total (Prostate Antigen)</a>
                <a href="primary-test.html?name=PSA- Free">PSA - Free</a>
                <a href="primary-test.html?name=Rapid Plasma Reagin (RPR Test- VDRL)">Rapid Plasma Reagin (RPR Test - VDRL)</a>
                <a href="primary-test.html?name=Reticulocyte Count">Reticulocyte Count</a>
                <a href="primary-test.html?name=RHEUMATOID FACTOR (RA TEST)">RHEUMATOID FACTOR (RA TEST)</a>
                <a href="primary-test.html?name=Rubella IgG">Rubella IgG</a>
                <a href="primary-test.html?name=Rubella IgM">Rubella IgM</a>
                <a href="primary-test.html?name=Serum Calcium">Serum Calcium</a>

                <a href="primary-test.html?name=Testosterone Free">Testosterone Free</a>
                <a href="primary-test.html?name=Testosterone Total">Testosterone Total</a>
                <a href="primary-test.html?name=Thyroid Peroxidase Antibody (Anti-TPO)">Thyroid Peroxidase Antibody (Anti-TPO)</a>
                <a href="primary-test.html?name=Thyroid Profile">Thyroid Profile</a>
                <a href="primary-test.html?name=Troponin - T">Troponin - T</a>
                <a href="primary-test.html?name=Troponin- I">Troponin - I</a>
                <a href="primary-test.html?name=TSH (4th Generation)">TSH (4th Generation)</a>
                <a href="primary-test.html?name=TTGA - Elisa">TTGA - Elisa</a>
                <a href="primary-test.html?name=TUBERCULOSIS - GAMMA INTERFERON - QUANTIFERON(TB-GOLD)">TUBERCULOSIS - GAMMA INTERFERON - QUANTIFERON
                  (TB-GOLD)</a>
                <a href="primary-test.html?name=Typhidot">Typhidot</a>
                <a href="primary-test.html?name=Uric Acid (Serum)">Uric Acid (Serum)</a>
                <a href="primary-test.html?name=Urine - R/M">Urine - R/M</a>
                <a href="primary-test.html?name=Urine- C/S">Urine - C/S</a>
                <a href="primary-test.html?name=Urine Microalbumin">Urine Microalbumin</a>

                <a href="primary-test.html?name=Valproic Acid (Sodium Valproate)">Valproic Acid (Sodium Valproate)</a>
                <a href="primary-test.html?name=Varicella Zoster Virus IgG">Varicella Zoster Virus IgG</a>
                <a href="primary-test.html?name=Varicella ZosterVirus IgM">Varicella Zoster Virus IgM</a>
                <a href="primary-test.html?name=Vitamin B12">Vitamin B12</a>
                <a href="primary-test.html?name=Vitamin C">Vitamin C</a>
                <a href="primary-test.html?name=Vitamin D 25 OH">Vitamin D 25 OH</a>
                <a href="primary-test.html?name=Weil - Felix Test">Weil - Felix Test</a>
                <a href="primary-test.html?name=Widal Test ( Tube Method)">Widal Test (Tube Method)</a>
                <a href="primary-test.html?name=Widal Test (Slide Method)">Widal Test (Slide Method)</a>

              </div>

            </div>
          </li>

          <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>

      <div class="search-box position-relative d-none d-md-flex align-items-center">
        <input type="text" id="globalSearch" placeholder="Search Packages / Tests..." class="form-control">
        <button id="searchBtn" class="search-btn">🔍</button>
        <div id="searchSuggestions" class="search-suggestions"></div>

        <div class="ham d-lg-none" id="hamburgers">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="ham d-md-none" id="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>

    </div>

    <div class="search-box d-md-none mt-3 position-relative">
      <input type="text" id="globalSearchMobile" placeholder="Search Packages / Tests..." class="form-control">
      <button id="searchBtnMobile" class="search-btn">🔍</button>
      <div id="searchSuggestionsMobile" class="search-suggestions"></div>
    </div>

  </div>
</header>
`;


/* ================= INSERT HEADER ================= */

document.body.insertAdjacentHTML("afterbegin", headerHTML);


/* ================= SCROLL HEADER ================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});


/* ================= HAMBURGER ================= */

const hamburger = document.getElementById("hamburger");
const hamburgers = document.getElementById("hamburgers");
const menu = document.getElementById("menu");

function toggleMenu() {
  hamburger?.classList.toggle("active");
  hamburgers?.classList.toggle("active");
  menu?.classList.toggle("active");
}

hamburger?.addEventListener("click", toggleMenu);
hamburgers?.addEventListener("click", toggleMenu);


/* ================= MOBILE MEGA MENU CONTROL ================= */

document.querySelectorAll("#menu a").forEach(link => {

  link.addEventListener("click", function (e) {

    const parentLi = this.parentElement;
    const isMegaParent = parentLi.classList.contains("mega-parent");

    // ✅ MOBILE ONLY
    if (window.innerWidth <= 991) {

      /* ===== PARENT MENU CLICK ===== */
      if (isMegaParent) {
        e.preventDefault();

        parentLi.classList.toggle("open");

        // close other menus
        document.querySelectorAll(".mega-parent").forEach(item => {
          if (item !== parentLi) item.classList.remove("open");
        });

        return; // menu close NA ho
      }

      /* ===== REAL LINK CLICK ===== */
      menu.classList.remove("active");
      hamburger?.classList.remove("active");
      hamburgers?.classList.remove("active");
    }

  });

});


/* ================= SEARCH SYSTEM ================= */

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

function formatCategoryTitle(category){
  return category
    .replace(/([A-Z])/g," $1")
    .replace(/-/g," ")
    .trim()
    .split(" ")
    .map(w=>w.charAt(0).toUpperCase()+w.slice(1))
    .join(" ");
}

function setupSearch(inputId,btnId,suggestionId){

  const input=document.getElementById(inputId);
  const btn=document.getElementById(btnId);
  const box=document.getElementById(suggestionId);

  if(!input) return;

  function showSuggestions(query){

    box.innerHTML="";

    if(!query){
      box.style.display="none";
      return;
    }

    const results=categories.filter(cat =>
      cat.toLowerCase().includes(query)
    );

    if(!results.length){
      box.innerHTML=`<div class="no-result">No results found</div>`;
    }else{
      results.forEach(item=>{
        box.innerHTML+=`
          <div class="suggestion-item" data-name="${item}">
            <strong>${formatCategoryTitle(item)}</strong>
            <div class="suggestion-category">Category</div>
          </div>`;
      });
    }

    box.style.display="block";
  }

  input.addEventListener("input",e=>{
    showSuggestions(e.target.value.toLowerCase().trim());
  });

  box.addEventListener("click",e=>{
    const item=e.target.closest(".suggestion-item");
    if(!item) return;

    window.location.href =
      `package-detail.html?type=profile&name=${encodeURIComponent(item.dataset.name)}`;
  });

  btn.addEventListener("click",()=>{
    const value=input.value.trim();
    if(!value) return;

    window.location.href =
      `package-detail.html?search=${encodeURIComponent(value)}`;
  });

  document.addEventListener("click",e=>{
    if(!e.target.closest(".search-box")){
      box.style.display="none";
    }
  });
}

setupSearch("globalSearch","searchBtn","searchSuggestions");
setupSearch("globalSearchMobile","searchBtnMobile","searchSuggestionsMobile");


/* ================= AUTO URL ENCODE FIX ================= */

document
.querySelectorAll('a[href*="package-detail.html"]')
.forEach(link=>{

  const url=new URL(link.href,window.location.origin);
  const name=url.searchParams.get("name");

  if(name){
    url.searchParams.set("name",encodeURIComponent(name));
    link.href=url.pathname+"?"+url.searchParams.toString();
  }
});

});