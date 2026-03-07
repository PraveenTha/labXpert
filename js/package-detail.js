document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     GET URL PARAMS (FIXED)
  ========================= */

  const urlParams = new URLSearchParams(window.location.search);

  const type = urlParams.get("type");

  // ✅ DOUBLE ENCODE FIX
  let name = urlParams.get("name") || "";
  name = decodeURIComponent(name);
  name = decodeURIComponent(name).trim();

  const detailContainer = document.getElementById("packageDetail");
  const imageContainer = document.getElementById("packageImage");

  if (!detailContainer || !imageContainer) return;

  if (!name || !type) {
    detailContainer.innerHTML = "<h2>Invalid Package</h2>";
    return;
  }

    /* =======================
       DATA STORAGE
    ======================= */

    const healthProfiles = {
        "Antenatal Profile": {
            price: "₹1190/-",
            image: "./images/package/1.png",
            includes: [
                "Used to check the wellbeing of the mother and fetus (developing baby).",
                "CBC – Complete Blood Count",
                "Thyroid – TSH",
                "Urine- R/m",
                "Blood Sugar – Random",
                "Blood Group",
                "Hiv 1&2 Antibody,-Rapid",
                "Hepatitis B Surface Antigen (HBsAg), - Rapid",
                "Hepatitis C Virus (HCV Antibody), - Rapid",
                "Vdrl (RPR –Serology for Syphilis) - Rapid"
            ]
        },

        "Arthritis Profile - Advanced": {
            price: "₹2690/-",
            image: "./images/package/2.png",
            includes: [
                "Vitamin D",
                "CBC",
                "ESR",
                "Uric Acid",
                "Rheumatoid Factor - Quantitaive",
                "CRP",
                "Calcium",
                "ASO - Quantitative",
                "Phosphorus",
                "Alkaline Phosphatase",
                "HLAB27",
                "Anti CCP   - (Anti-cyclic citrullinated peptide)"
            ]
        },
        "Arthritis Profile - Basic": {
            price: "₹1500/-",
            image: "./images/package/2.png",
            includes: [
                "Vitamin D",
                "CBC",
                "ESR",
                "Uric Acid",
                "Rheumatoid Factor - Quantitaive",
                "CRP",
                "Calcium",
                "ASO - Quantitative",
                "Phosphorus",
                "Alkaline Phosphatase"

            ]
        },
        "Basic Allergy Detector Profile": {
            price: "₹590/-",
            image: "./images/package/3.jpg",
            includes: [
                "CBC - Complete Blood Count",
                "ESR",
                "Total IgE"
            ]
        },
        "Complete Blood Count (CBC)": {
            price: "₹390/-",
            image: "./images/package/4.png",
            includes: [
                "RBC Count (by Impedance Variation)",
                "Haemoglobin (HB) (by Spectrophotometry)",
                "Haematocrit (PCV) (by Analogical Integration)",
                "MCV (by Calculated)",
                "MCH (by Calculated)",
                "MCHC (by Calculated)",
                "RDW-CV (by Calculated)",
                "Platelet Count (by Impedance Variation)",
                "Total WBC Count (by Impedance Variation)",
                "NRBC (by WBC Histogram and VCS Technology)",
                "MPV (by Calculated)",
                "PDW (by Calculated)",
                "PCT (by Calculated)",
                "Corr. TLC",
                "Differential Leucocyte Count",
                "Neutrophil (by Flow Cytometry/Manual)",
                "Lymphocyte (by Flow Cytometry/Manual)",
                "Monocytes (by Flow Cytometry/Manual)",
                "Eosinophils (by Flow Cytometry/Manual)",
                "Basophils (by Flow Cytometry/Manual)",
                "Absolute Neutrophils",
                "Absolute Lymphocytes",
                "Absolute Monocytes",
                "Absolute Eosinophils",
                "Absolute Basophils"
            ]
        },
        "Comprehensive Allergy Panel": {
            price: "₹3800/-",
            image: "./images/package/3.jpg",
            includes: [
                "Veg Food",
                "Non Veg Food",
                "Drugs",
                "Inhalants"
            ]
        },

        "Double Marker": {
            price: "₹1200/-",
            image: "./images/package/1.png",
            includes: [
                "Free Beta HCG",
                "PAPPA (Pregnancy Associated Plasma Protein A)",
            ]
        },
        "Electrolytes": {
            price: "₹400/-",
            image: "./images/package/5.jpg",
            includes: [
                "Electrolyte Na+ k+ ica2+ cl-",
            ]
        },
        "ENA Profile": {
            price: "₹3500/-",
            image: "./images/package/6.jpg",
            includes: [
                "ENA- Extractable Nuclear Antigen Profile",
            ]
        },
        "Fertility Profile": {
            price: "₹850/-",
            image: "./images/package/1.png",
            includes: [
                "Fertility Profile (LH-FSH-PROLACTIN-TSH)",
                "Hormones affecting woman's fertility",
                "LH- Luteinizing Hormone ",
                "FSH- Follicle-stimulating hormone",
                "PRL- Prolactin",
                "TSH- Thyroid Stimulating Hormone",
            ]
        },
        "Fever Panel - 1": {
            price: "₹690/-",
            image: "./images/package/7.png",
            includes: [
                "Complete Blood Count - CBC",
                "Typhidot Igg / Igm",
                "Malaria Antigen",
                "Urine- R/M",
            ]
        },
        "Fever Panel - 2": {
            price: "₹1090/-",
            image: "./images/package/7.png",
            includes: [
                "Complete Blood Count - CBC",
                "Typhidot Igg / Igm",
                "Malaria Antigen",
                "Widal",
                "Dengue NS1",
                "Urine- R/M",
            ]
        },
        "Fever Panel - 3": {
            price: "₹1590/-",
            image: "./images/package/7.png",
            includes: [
                "Complete Blood Count - CBC",
                "Typhidot Igg / Igm",
                "Malaria Antigen",
                "Widal",
                "Dengue NS1",
                "Dengue Igg",
                "Dengue Igm",
                "Urine- R/M",
            ]
        },
        "Free Light Chain Assay": {
            price: "₹3900/-",
            image: "./images/package/8.png",
            includes: [
                "Free Light Chain Kappa ,by Nephelometry",
                "Free Light Chain Lambda ,by Nephelometry",
                "Kappa/lambda Ratio",
            ]
        },
        "Free Thyroid Profile": {
            price: "₹550/-",
            image: "./images/package/9.jpg",
            includes: [
                "Ft3",
                "Ft4",
                "TSH",
            ]
        },
        "Infectious Disease Profile": {
            price: "₹790/-",
            image: "./images/package/10.png",
            includes: [
                "HIV 1&2 Antibody , -Rapid",
                "Hepatitis  B Surface Antigen (HBsAg), - Rapid",
                "Hepatitis C Virus (HCV Antibody), - Rapid",
            ]
        },
        "Iron Profile, Basic": {
            price: "₹550/-",
            image: "./images/package/11.png",
            includes: [
                "Iron, Serum ,by Colorimetric",
                "Total Iron­ Binding Capacity-(TIBC) ,by Spectro-photometry",
                "Transferrin Saturation",
            ]
        },
        "Kidney Profile": {
            price: "₹350/-",
            image: "./images/package/12.jpg",
            includes: [
                "BLOOD UREA",
                "SERUM CREATININE",
                "URIC ACID",
                "CALCIUM",
                "PHOSPHOROUS SERUM",
                "BUN (Blood Urea Nitrogen)",
                "BUN/CREATININE RATIO",
                "UREA/CREATININE RATIO",
                "SODIUM",
                "POTASSIUM",
                "CHLORIDE",
                "Ionic calcium"
            ]
        },

        "Lipid Profile": {
            price: "₹290/-",
            image: "./images/package/13.jpg",
            includes: [
                "CHOLESTEROL",
                "TRIGLYCERIDE",
                "HDL CHOLESTEROL",
                "LDL CHOLESTEROL",
                "VLDL CHOLESTEROL",
                "LDL / HDL RATIO",
                "HDL / LDL RATIO",
                "CHOL / HDL RATIO",
                "NON-HDL CHOLESTEROL"
            ]
        },
        "Liver Profile": {
            price: "₹350/-",
            image: "./images/package/14.png",
            includes: [
                "TOTAL BILIRUBIN",
                "CONJUGATED BILIRUBIN",
                "UNCONJUGATED BILIRUBIN",
                "SGOT (AST)",
                "SGPT (ALT)",
                "ALK. PHOSPHATASE",
                "T. PROTEIN",
                "ALBUMIN",
                "GLOBULIN",
                "A/G RATIO",
                "GAMMA G.T.",
                "SGOT/SGPT RATIO"
            ]
        },
        "Nirogyam A": {
            price: "₹790/-",
            image: "./images/package/15.png",
            includes: [
                "Diabetic Screen (Fasting Sugar)",
                "Blood Profile (CBC)",
                "ESR (wintrobe method.)",
                "Heart Health - Lipids",
                "Liver Profile",
                "Kidney Profile",
                "Thyroid Profile",
                "Electrolytes Profile",
                "Urine Analysis"
            ]
        },

        "Nirogyam A 1 Plus 1": {
            price: "₹1490/-",
            image: "./images/package/16.png",
            includes: [
                "Diabetic Screen (Fasting Sugar)",
                "Blood Profile (CBC)",
                "ESR (Westergren)",
                "Heart Health - Lipids",
                "Liver Profile",
                "Kidney Profile",
                "Thyroid Profile",
                "Electrolytes Profile",
                "Urine Analysis"
            ]
        },
        "Nirogyam B": {
            price: "₹890/-",
            image: "./images/package/17.png",
            includes: [
                "HBA1c (Sugar Memory)",
                "Diabetic Screen (Fasting Sugar)",
                "Blood Profile (CBC)",
                "ESR (Westergren)",
                "Heart Health - Lipids",
                "Liver Profile",
                "Kidney Profile",
                "Thyroid Profile",
                "Electrolytes Profile",
                "Urine Analysis"
            ]
        },
        "Nirogyam B 1 Plus 1": {
            price: "₹1690/-",
            image: "./images/package/18.png",
            includes: [
                "HBA1c (Sugar Memory)",
                "Diabetic Screen (Fasting Sugar)",
                "Blood Profile (CBC)",
                "ESR (Westergren)",
                "Heart Health - Lipids",
                "Liver Profile",
                "Kidney Profile",
                "Thyroid Profile",
                "Electrolytes Profile",
                "Urine Analysis"
            ]
        },
        "Nirogyam C": {
            price: "₹1250/-",
            image: "./images/package/19.png",
            includes: [
                "Vitamin D",
                "Vitamin B12",
                "Iron Profile",
                "HBA1c (Sugar Memory)",
                "Diabetic Screen (Fasting Sugar)",
                "Blood Profile (CBC)",
                "ESR (Westergren)",
                "Heart Health - Lipids",
                "Liver Profile",
                "Kidney Profile",
                "Thyroid Profile",
                "Electrolytes Profile",
                "Urine Analysis"
            ]
        },
        "Nirogyam C 1 Plus 1": {
            price: "₹2390/-",
            image: "./images/package/20.png",
            includes: [
                "Vitamin D",
                "Vitamin B12",
                "Iron Profile",
                "HBA1c (Sugar Memory)",
                "Diabetic Screen (Fasting Sugar)",
                "Blood Profile (CBC)",
                "ESR (Westergren)",
                "Heart Health - Lipids",
                "Liver Profile",
                "Kidney Profile",
                "Thyroid Profile",
                "Electrolytes Profile",
                "Urine Analysis"
            ]
        },

        "Pancreas Profile": {
            price: "₹800/-",
            image: "./images/package/21.webp",
            includes: [
                "Pancrease Profile - Amylase, Lipase - Pancrease produces two major digestive enzymes that helps in digestion. "
            ]
        },

        "PCOD Profile": {
            price: "₹1190/-",
            image: "./images/package/22.png",
            includes: [
                "PCOD Profile (Polycystic Ovary Syndrome)",
                "Condition Affecting a Woman's Hormone Levels",
                "LH - Luteinizing Hormone",
                "FSH - Follicle Stimulating Hormone",
                "PRL - Prolactin",
                "TSH - Thyroid Stimulating Hormone",
                "Insulin - Fasting",
                "Total Testosterone",
                "Fasting Blood Sugar"
            ]
        },

        "Pre Marital Package": {
            price: "₹1490/-",
            image: "./images/package/23.png",
            includes: [
                "Sugar - Fasting",
                "Blood Group - Rh Type",
                "HIV 1 & 2 - Quantitative",
                "HBsAg - Quantitative",
                "HCV - Quantitative",
                "VDRL",
                "HB Electrophoresis - HPLC",
                "CBC - Complete Blood Count"
            ]
        },
        "Pre Operative Profile": {
            price: "₹1000/-",
            image: "./images/package/24.png",
            includes: [
                "Fasting Sugar - FBS",
                "Average Blood Sugar - HBA1c",
                "HIV 1 & 2",
                "Hepatitis B Surface Antigen - HBsAg",
                "Anti Hepatitis C Virus - AHCV",
                "Complete Blood Count - CBC"
            ]
        },
        "PSA Profile": {
            price: "₹1190/-",
            image: "./images/package/25.png",
            includes: [
                "Total PSA (Total Prostate Antigen)",
                "Free PSA (Free Prostate Antigen)",

            ]
        },
        "Quadruple Markers": {
            price: "₹1900/-",
            image: "./images/package/26.png",
            includes: [
                "MoM AFP",
                "MoM Estriol, Unconjugated (uE3)",
                "MoM hCG",
                "MoM Inhibin A"
            ]
        },

        "Torch-8 Profile IgG and IgM": {
            price: "₹1090/-",
            image: "./images/package/27.png",
            includes: [
                "Toxoplasma Gondii IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Toxoplasma Gondii IgG (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Cytomegalovirus IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Cytomegalovirus IgG (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Rubella (German Measles) IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Rubella (German Measles) IgG (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Herpes Simplex Virus 1 & 2 IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Herpes Simplex Virus 1 & 2 IgG (by ELISA)"
            ]
        },
        "Torch Igg": {
            price: "₹790/-",
            image: "./images/package/28.png",
            includes: [
                "Toxoplasma Gondii IgG (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Rubella (German Measles) IgG (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Cytomegalovirus IgG (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Herpes Simplex Virus 1 & 2 IgG (by ELISA)"
            ]
        },
        "Torch Igm": {
            price: "₹790/-",
            image: "./images/package/29.png",
            includes: [
                "Toxoplasma Gondii IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Rubella (German Measles) IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Cytomegalovirus IgM (by Enzyme Linked Immunosorbent Assay - ELISA)",
                "Herpes Simplex Virus 1 & 2 IgM (by Enzyme Linked Immunosorbent Assay - ELISA)"
            ]
        },
         "Triple Marker 2nd Trimester": {
            price: "₹1200/-",
            image: "./images/package/30.png",
            includes: [
                "Alpha-Feto Protein - AFP",
                "Beta HCG",
                "Unconjugated Estriol - E3",
                
            ]
        },
    };

  /* =========================
     SELECT DATA (SAFE MATCH)
  ========================= */

  let selectedData = null;

  if (type === "profile") {
    selectedData = healthProfiles[name];
  }

  if (type === "test") {
    selectedData = primaryTests[name];
  }

  if (!selectedData) {
    console.log("NOT FOUND:", name);
    detailContainer.innerHTML = "<h2>Package Not Found</h2>";
    return;
  }


  /* =========================
     BUILD INCLUDE LIST
  ========================= */

  let includesHTML = "";

  if (selectedData.includes?.length) {
    includesHTML = `
      <ul class="detail-list">
        ${selectedData.includes.map(item => `<li>${item}</li>`).join("")}
      </ul>
    `;
  }


  /* =========================
     RENDER DETAILS
  ========================= */

  detailContainer.innerHTML = `
    <div class="detail-card">
      <h1 class="detail-title">${name}</h1>

      ${selectedData.description
        ? `<p class="detail-desc">${selectedData.description}</p>`
        : ""}

      <h3 class="detail-price">${selectedData.price}</h3>

      ${includesHTML}

      <button class="book-btn" id="bookNowBtn">Book Now</button>
    </div>
  `;


  /* =========================
     IMAGE
  ========================= */

  imageContainer.innerHTML = `
    <img src="${selectedData.image || 'images/default.jpg'}"
         class="detail-image img-fluid"
         alt="${name}">
  `;


  /* =========================
     WHATSAPP BUTTON
  ========================= */

  document.getElementById("bookNowBtn")?.addEventListener("click", () => {

    const message =
      `Hello, I want to book:\n\n` +
      `Package/Test: ${name}\n` +
      `Price: ${selectedData.price}`;

    window.open(
      `https://wa.me/919650624441?text=${encodeURIComponent(message)}`,
      "_blank"
    );

  });

});