document.addEventListener("DOMContentLoaded", function () {

    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get("name");

    const detailContainer = document.getElementById("testDetail");
    const nameBox = document.getElementById("testNameBox");

    if (!name || !detailContainer || !nameBox) {
        detailContainer.innerHTML = "<h2>Invalid Test</h2>";
        return;
    }

    const displayName = name.replace(/-/g, " ");

    const primaryTests = {

        "17-Alpha-Hydroxy-Progesterone": {
            price: "₹850/-",
            includes: [
                "17-Alpha Hydroxy Progesterone"
            ]
        },

        "ACCP": {
            price: "₹850/-",
            includes: [
                "Anti Cyclic Cirullinated Peptide (Anti-CCP)"
            ]
        },

        "ACTH": {
            price: "₹1290/-",
            includes: [
                "ACTH, by Chemiluminescence"
            ]
        },

        "Activated Partial Thromboplastin Time (Aptt)": {
            price: "₹550/-",
            includes: [
                "Patient Time (APTT) by Triggered Coagulation & Clot Detection",
                "Control Time (APTT) by Triggered Coagulation & Clot Detection"
            ]
        },

        "Amylase": {
            price: "₹550/-",
            includes: [
                "Amylase  - One of the major digestive enzymes produced by pancreas."
            ]
        },
        "ANCA - IFA": {
            price: "₹1590/-",
            includes: [
                "C-ANCA (IFA)",
                "P-ANCA (IFA)",
                "Dilution ,by Immunofluorescence-Microscopy"
            ]
        },
        "Anti Mullerian Hormones(AMH)": {
            price: "₹1090/-",
            includes: [
                "Anti Mullerian Hormones(AMH) ,by Chemiluminescence"
            ]
        },
        "Anti Nuclear Antibody (ANA)": {
            price: "₹650/-",
            includes: [
                "Anti Nuclear Antibody (ANA) ,by Enzyme linked immunosorbent assay (ELISA)"
            ]
        },

        "ANTI STREPTOLYSIN O (ASO) TITRES": {
            price: "₹650/-",
            includes: [
                "Anti Streptolysin O (aso) Titre - Quantitative ,by Immunoturbidimetry"
            ]
        },
        "Anti Thyroglobulin Antibody": {
            price: "₹690/-",
            includes: [
                "Anti Thyroglobulin Antibody ,by Chemiluminescence (CLIA)"
            ]
        },
        "Aspergillus IgE ,by Enzyme linked immunosorbent assay (ELISA)": {
            price: "₹1550/-",
            includes: [
                "Aspergillus IgE ,by Enzyme linked immunosorbent assay (ELISA)"
            ]
        },
        "Aspergillus IgG ,by Enzyme linked immunosorbent assay (ELISA)": {
            price: "₹1550/-",
            includes: [
                "Aspergillus IgG ,by Enzyme linked immunosorbent assay (ELISA)"
            ]
        },
        "Aspergillus IgM ,by Enzyme linked immunosorbent assay (ELISA)": {
            price: "₹1550/-",
            includes: [
                "Aspergillus IgM ,by Enzyme linked immunosorbent assay (ELISA)"
            ]
        },
        "Bence Jones Protein, Urine": {
            price: "₹690/-",
            includes: [
                "Bence Jones Protein, Urine ,by Biochemical"
            ]
        },
        "Beta 2 Microglobulin": {
            price: "₹1250/-",
            includes: [
                "Beta 2 Microglobulin ,by Enzyme Immunoassay (EIA)"
            ]
        },
        "Beta HCG - Titre": {
            price: "₹590/-",
            includes: [
                "Quantitative Beta HCG (BHCG- titre)"
            ]
        },
        "Bicarbonate": {
            price: "₹950/-",
            includes: [
                "Bicarbonate ,by Spectrophotometry"
            ]
        },

        "Blood Culture": {
            price: "₹950/-",
            includes: [
                "Culture , Blood"
            ]
        },
        "Blood Picture (Peripheral Smear)": {
            price: "₹290/-",
            includes: [
                "RBC Morphology",
                "WBC Morphology",
                "Platelet Morphology",
                "Hemoparasites",
                "Impression"

            ]
        },
        "CA 125 (Ovarian Cancer Marker)": {
            price: "₹750/-",
            includes: [
                "CA 125 (Ovarian Cancer Marker)"

            ]
        },

        "CA 15.3 (Breast Cancer)": {
            price: "₹990/-",
            includes: [
                "CA 15.3 (Breast Cancer)"

            ]
        },
        "CA 19.9 (Pancreatic Cancer)": {
            price: "₹790/-",
            includes: [
                "CA 19.9 (Pancreatic Cancer)"

            ]
        },
        "Calcium - Ionized": {
            price: "₹590/-",
            includes: [
                "Calcium - Ionized"

            ]
        },
        "Calcium-- Urine (24 hrs)": {
            price: "₹290/-",
            includes: [
                "Volume",
                "Calcium (urine Spot Test) ,by Spectro-photometry",
                "Calcium, 24hrs.urine ,by Spectrophotometry"

            ]
        },
        "Calcium Serum": {
            price: "₹250/-",
            includes: [
                "Volume",
                "Calcium, Serum ,by NM-BAPTA",
            ]
        },
        "C-ANCA (PR3) ,by ELISA": {
            price: "₹850/-",
            includes: [
                "C-ANCA (PR3) ,by ELISA",
            ]
        },
        "CEA": {
            price: "₹750/-",
            includes: [
                "CEA (Carcino Embryonic Antigen)",
            ]
        },
        "CK- MB": {
            price: "₹450/-",
            includes: [
                "CK-MB ,by Immunofluorescence",
            ]
        },
        "Coombs Test Direct": {
            price: "₹550/-",
            includes: [
                "Coombs Test Direct",
            ]
        },
        "Coombs Test Indirect": {
            price: "₹550/-",
            includes: [
                "Coombs Test Indirect",
            ]
        },
        "Copper": {
            price: "₹550/-",
            includes: [
                "Copper, Serum ,by Spectrometry",
            ]
        },
        "Cortisol": {
            price: "₹750/-",
            includes: [
                "Cortisol [Morning] ,by Chemiluminescence Immunoassay (CLIA)",
            ]
        },
        "C-peptide": {
            price: "₹850/-",
            includes: [
                "C-peptide ,by Chemiluminescence Immunoassay (CLIA)",
            ]
        },
        "CPK": {
            price: "₹450/-",
            includes: [
                "Creatine Phosphokinase (CPK) ,by IFCC, UV Kinetic",
            ]
        },

        "CREATININE URINE SPOT": {
            price: "₹290/-",
            includes: [
                "CREATININE URINE SPOT",
            ]
        },

        "CRP (C-Reactive Protein)": {
            price: "₹450/-",
            includes: [
                "CRP (C-Reactive Protein)-Quantitative ,by Turbidimetric Immunoassay",
            ]
        },

        "D-Dimer": {
            price: "₹990/-",
            includes: [
                "D-Dimer ,by Immunoturbidimetry",
            ]
        },
        "Dengue IgG": {
            price: "₹750/-",
            includes: [
                "Dengue IgG, by Elisa",
            ]
        },
        "Dengue IgM": {
            price: "₹750/-",
            includes: [
                "Dengue Igm, by Elisa",
            ]
        },
        "Dengue Ns1 Antigen": {
            price: "₹750/-",
            includes: [
                "Dengue Ns1 Antigen, by Elisa",
            ]
        },
        "DHEA-S": {
            price: "₹650/-",
            includes: [
                "DHEA SULPHATE ,by Electrochemiluminescence",
            ]
        },
        "Erythrocyte Sedimentation Rate (ESR)": {
            price: "₹200/-",
            includes: [
                "Erythrocyte Sedimentation Rate (ESR) ,by wintrobe method",
            ]
        },
        "Estradiol": {
            price: "₹590/-",
            includes: [
                "Estradiol [E2] ,by Electrochemiluminescence",
            ]
        },
        "Ferritin": {
            price: "₹550/-",
            includes: [
                "Ferritin ,by Electrochemiluminescence",
            ]
        },
        "Folic Acid (Folate)": {
            price: "₹550/-",
            includes: [
                "Folic Acid ,by Electrochemiluminescence",
            ]
        },
        "FSH": {
            price: "₹550/-",
            includes: [
                "Follicle Stimulating Hormone (FSH) ,by Electrochemiluminescence",
            ]
        },
        "G-6-PD, QUANTITATIVE, BLOOD": {
            price: "₹890/-",
            includes: [
                "G-6-PD, QUANTITATIVE, BLOOD ,by UV Kinetics",
                "Glucose-6-phosphate dehydrogenase"
            ]
        },
        "H.PYLORI": {
            price: "₹850/-",
            includes: [
                "H.PYLORI"
            ]
        },
        "Hb Electrophoresis": {
            price: "₹790/-",
            includes: [
                "Hemoglobin Electrophoresis (Hb Variant Analysis - HPLC)"
            ]
        },
        "HBA1c (Glycosylated Hemoglobin)": {
            price: "₹390/-",
            includes: [
                "HbA1c (ngsp) ,by HPLC",
                "HbA1c (IFCC)",
                "Estimated Average Glucose"
            ]
        },
        "Helicobacter Pylori IgA": {
            price: "₹1150/-",
            includes: [
                "Helicobacter Pylori IgA ,by ELISA"
            ]
        },
        "Helicobacter Pylori IgG": {
            price: "₹1150/-",
            includes: [
                "Helicobacter Pylori IgG ,by ELISA"
            ]
        },
        "Helicobacter Pylori IgM": {
            price: "₹1150/-",
            includes: [
                "Helicobacter Pylori IgM ,by ELISA"
            ]
        },
        "Hepatitis A Antibody (Anti-HAV) IgG": {
            price: "₹1150/-",
            includes: [
                "Helicobacter Pylori IgM ,by ELISA"
            ]
        },
        "Hepatitis A Antibody (Anti-HAV) IgM": {
            price: "₹750/-",
            includes: [
                "Hepatitis A Antibody (Anti-HAV) IgM ,by ELISA"
            ]
        },
        "Hepatitis B Surface Antigen": {
            price: "₹550/-",
            includes: [
                "Hepatitis B Surface Antigen (HBsAg), by Elisa"
            ]
        },
        "Hepatitis C Virus": {
            price: "₹550/-",
            includes: [
                "Hepatitis C Virus (HCV Antibody), by Elisa"
            ]
        },
        "Hepatitis E Virus - IgG (HEV IgG)": {
            price: "₹1050/-",
            includes: [
                "Hepatitis E Virus - IgG (HEV IgG) ,by ELISA"
            ]
        },
        "Hepatitis E Virus - IgM (HEV IgM)": {
            price: "₹750/-",
            includes: [
                "Hepatitis E Virus - IgM (HEV IgM) ,by ELISA"
            ]
        },

        "Herpes-Simplex-Virus-1-and-2-IgG": {
            price: "₹650/-",
            includes: [
                "Herpes Simplex Virus 1 & 2 IgG ,by ELISA"
            ]
        },
        "Herpes-Simplex-Virus-1-and-2-IgM": {
            price: "₹650/-",
            includes: [
                "Herpes Simplex Virus 1 & 2 IgG ,by ELISA"
            ]
        },
        "Herpes Simplex Virus 1 IgG": {
            price: "₹550/-",
            includes: [
                "Herpes Simplex Virus 1 IgG ,by ELISA   "
            ]
        },

        "Herpes Simplex Virus 1 and 2 IgM": {
            price: "₹650/-",
            includes: [
                "Herpes Simplex Virus 1 & 2 IgM ,by ELISA"
            ]
        },

        "Herpes Simplex Virus 2 IgG": {
            price: "₹550/-",
            includes: [
                "Herpes Simplex Virus 1 & 2 IgM ,by ELISA"
            ]
        },

        "Herpes Simplex Virus 2 IgM": {
            price: "₹550/-",
            includes: [
                "Herpes Simplex Virus 2 IgM ,by ELISA"
            ]
        },

        "High Sensitive CRP (HsCRP)": {
            price: "₹590/-",
            includes: [
                "High Sensitive CRP (HsCRP)"
            ]
        },

        "HIV 1 and 2 Antibody, by Elisa": {
            price: "₹550/-",
            includes: [
                " HIV 1& 2 Antibody, by Elisa"
            ]
        },

        "HLA B - 27 by PCR": {
            price: "₹1390/-",
            includes: [
                "HLA B - 27 by PCR"
            ]
        },
        "Homocysteine": {
            price: "₹890/-",
            includes: [
                "Homocysteine  - an independent risk factor for heart disease."
            ]
        },

        "IGE - Serum": {
            price: "₹590/-",
            includes: [
                "Total IGE - Serum"
            ]
        },

        "IgG4 ,by Immunonephelometry": {
            price: "₹3700/-",
            includes: [
                "IgG4 ,by Immunonephelometry"
            ]
        },

        "Immunoglobulin A (IgA)": {
            price: "₹690/-",
            includes: [
                "Immunoglobulin-IgA ,by Immunoturbidimetry"
            ]
        },

        "Immunoglobulin IgG": {
            price: "₹690/-",
            includes: [
                "Immunoglobulin-IgG ,by Immunoturbidimetry"
            ]
        },

        "Immunoglobulin IgM": {
            price: "₹690/-",
            includes: [
                "Immunoglobulin- IgM ,by Immunoturbidimetry"
            ]
        },

        "Insulin": {
            price: "₹490/-",
            includes: [
                "Insulin (Serum)"
            ]
        },

        "Iron (Serum)": {
            price: "₹300/-",
            includes: [
                "Iron, Serum ,by Colorimetric"
            ]
        },

        "LH": {
            price: "₹550/-",
            includes: [
                "LH (leutinizing Hormone) ,by Chemiluminescence Immunoassay(CLIA)"
            ]
        },

        "Lipase": {
            price: "₹550/-",
            includes: [
                "Lipase - One of the major digestive enzymes produced by pancreas."
            ]
        },

        "Lithium": {
            price: "₹550/-",
            includes: [
                "Lithium ,by Ion Selective Electrode"
            ]
        },

        "Lupus Anticoagulant": {
            price: "₹1190/-",
            includes: [
                "Patient Value ,by (Electromechanical clot Detection)",
                "Control Value",
                "Screen ratio",
                "Interpretation-"
            ]
        },

        "Magnesium": {
            price: "₹450/-",
            includes: [
                "Magnesium ,by Spectro-photometry"
            ]
        },

        "P-ANCA (MPO) ,by ELISA": {
            price: "₹850/-",
            includes: [
                "P-ANCA (MPO) ,by ELISA"
            ]
        },

        "Parathyroid Hormone (PTH)": {
            price: "₹750/-",
            includes: [
                "Parathyroid Hormone (PTH)"
            ]
        },

        "Phosphorus": {
            price: "₹290/-",
            includes: [
                "Phosphorus ,by Ammonium molybdate UV"
            ]
        },

        "Potassium (K Plus)": {
            price: "₹200/-",
            includes: [
                "Potassium (K+) ,by Ion Selective Electrode"
            ]
        },

        "Potassium Random (urine)": {
            price: "₹350/-",
            includes: [
                "Potassium Random (urine)"
            ]
        },

        "Pro - Beta Natriuretic Peptide (BNP)": {
            price: "₹2250/-",
            includes: [
                "Pro - Beta Natriuretic Peptide (BNP) ,by SANDWITCH IMMUNOASSAY"
            ]
        },

        "Pro BNP": {
            price: "₹2300/-",
            includes: [
                "Pro BNP (Pro-Beta Natriuretic Peptide)"
            ]
        },


        "Progesterone": {
            price: "₹750/-",
            includes: [
                "Progesterone ,by Chemiluminescence Immunoassay (CLIA)"
            ]
        },

        "Protein - Urine (24 hours)": {
            price: "₹390/-",
            includes: [
                "24 Hrs Urine Vol.",
                "Protein Urine ,by Turbidimetric",
                "24 Hrs Urine Protein"
            ]
        },


        "Protein Electrophoresis (Serum)": {
            price: "₹750/-",
            includes: [
                "Protein, Total ,by Spectrophotometry / Microscopy",
                "Albumin ,by Bromo Cresol Green (BCG)",
                "Globulin ,by Calculated",
                "A:G (Albumin:Globulin) Ratio ,by Calculated",
                "Alpha 1-globulin",
                "Alpha 2-globulin",
                "Beta 1-globulin",
                "Beta 2-globulin",
                "Gamma Globulin",
                "Myeloma Band (M-Band)",
                "Spe Comments"
            ]
        },

        "Prothrombin Time (PT)": {
            price: "₹550/-",
            includes: [
                "Patient Value (PT) ,by Triggered Coagulation & Clot Detection",
                "Control Value (MN P.T)",
                "ISI",
                "International Normalised Ratio (INR)",
            ]
        },

        "PSA - Total (Prostate Antigen)": {
            price: "₹490/-",
            includes: [
                "PSA - Prostate Antigen",
            ]
        },

        "PSA- Free": {
            price: "₹890/-",
            includes: [
                "Free - PSA (Prostate Antigen)",
            ]
        },

        "Rapid Plasma Reagin (RPR Test- VDRL)": {
            price: "₹290/-",
            includes: [
                "Rapid Plasma Reagin (RPR Test) ,by Flocculation",
            ]
        },

        "Reticulocyte Count": {
            price: "₹350/-",
            includes: [
                "Reticulocyte Count ,by Supravital Stain",
            ]
        },

        "RHEUMATOID FACTOR (RA TEST)": {
            price: "₹590/-",
            includes: [
                "Rheumatoid Factor (RA Factor) - Quantitative ,by Immunoturbidimety",
            ]
        },

        "Rubella IgG": {
            price: "₹450/-",
            includes: [
                "Rubella Virus IgG Antibody ,by ELISA",
            ]
        },

        "Rubella IgM": {
            price: "₹450/-",
            includes: [
                "Rubella Virus IgM Antibody ,by ELISA",
            ]
        },

        "Serum Calcium": {
            price: "₹250/-",
            includes: [
                "Serum Calcium",
            ]
        },

        "Testosterone Free": {
            price: "₹890/-",
            includes: [
                "Testosterone-  Free",
            ]
        },

        "Testosterone Total": {
            price: "₹650/-",
            includes: [
                "Testosterone - Total",
            ]
        },

        "Thyroid Peroxidase Antibody (Anti-TPO)": {
            price: "₹690/-",
            includes: [
                "Thyroid Peroxidase Antibody (Anti-TPO) ,by Chemiluminescence",
            ]
        },

        "Thyroid Profile": {
            price: "₹290/-",
            includes: [
                "T3",
                "T4",
                "TSH"
            ]
        },

        "Thyroid Profile": {
            price: "₹290/-",
            includes: [
                "T3",
                "T4",
                "TSH"
            ]
        },

        "Troponin - T": {
            price: "₹1090/-",
            includes: [
                "Troponin - T"
            ]
        },

        "Troponin- I": {
            price: "₹1090/-",
            includes: [
                "Troponin- I"
            ]
        },

        "TSH (4th Generation)": {
            price: "₹290/-",
            includes: [
                "TSH (4th Generation) ,by Electrochemiluminescence immunoassay (ECLIA)"
            ]
        },

        "TTGA - Elisa": {
            price: "₹750/-",
            includes: [
                "Tissue Transglutaminase Antibody IgA, by Elisa - TTGA"
            ]
        },

        "TUBERCULOSIS - GAMMA INTERFERON - QUANTIFERON(TB-GOLD)": {
            price: "₹1550/-",
            includes: [
                "Quantiferon - Tb",
                "INTERFEON GAMMA TB (ANTIGEN MINUS NIL) ,by ELISA",
                "Tb Antigen -Tube",
                "INTERFERON GAMMA IN ANTIGEN TUBE ,by ELISA",
                "Tb Mitogen Tube ,by ELISA",
            ]
        },

        "Typhidot": {
            price: "₹490/-",
            includes: [

                "Salmonella Typhi IgG (Typhi Dot) ,by Chromatography",
                "Tb Antigen -TubeSalmonella Typhi IgM (Typhi Dot) ,by Chromatography",

            ]
        },

        "Uric Acid (Serum)": {
            price: "₹250/-",
            includes: [

                "Uric Acid ,by Uricase Colorimetric",

            ]
        },

        "Urine - R/M": {
            price: "₹250/-",
            includes: [
                "Urine- Routine and Microscopy",
            ]
        },

        "Urine- C/S": {
            price: "₹490/-",
            includes: [
                "Urine- Culture and Sensitivity",
            ]
        },

        "Urine Microalbumin": {
            price: "₹490/-",
            includes: [
                "Urine Microalbumin / Creatinine Ratio Spot",
            ]
        },

        "Valproic Acid (Sodium Valproate)": {
            price: "₹790/-",
            includes: [
                ".Valproic Acid ,by Spectrophotometry"
            ]
        },

        "Varicella Zoster Virus IgG": {
            price: "1190/-",
            includes: [
                "Varicella Zoster IgG Ab ,by ELISA"
            ]
        },


        "Varicella ZosterVirus IgM": {
            price: "1190/-",
            includes: [
                "Varicella Zoster IgM Ab ,by ELISA"
            ]
        },

        "Vitamin B12": {
            price: "650/-",
            includes: [
                "Vitamin B12"
            ]
        },

        "Vitamin C": {
            price: "2090/-",
            includes: [
                "Vitamin C, Ascorbic Acid, by HPLC"
            ]
        },

          "Vitamin D 25 OH": {
            price: "750/-",
            includes: [
                "25 OH Vitamin D"
            ]
        },

         "Weil - Felix Test": {
            price: "950/-",
            includes: [
                "Weil - Felix Test",
                "Proteus Ox19 Antigen ,by Heterophile agglutination",
                "Proteus Ox2 Antigen ,by Heterophile agglutination",
                "Proteus Oxk Antigen ,by Heterophile agglutination"
            ]
        },

        "Widal Test ( Tube Method)": {
            price: "350/-",
            includes: [
                "S. Typhi Antigen (O) ,by Agglutianation",
                "S. Typhi Antigen (H) ,by Agglutianation",
                "S. Paratyphi Antigen (AH) ,by Agglutianation",
                "S. Paratyphi Antigen (BH) ,by Agglutianation"
            ]
        },

        "Widal Test (Slide Method)": {
            price: "250/-",
            includes: [
                "S. Typhi Antigen (O) ,by Agglutianation",
                "S. Typhi Antigen (H) ,by Agglutianation",
                "S. Paratyphi Antigen (AH) ,by Agglutianation",
                "S. Paratyphi Antigen (BH) ,by Agglutianation"
            ]
        },


    };

    const selectedData = primaryTests[name];

    if (!selectedData) {
        detailContainer.innerHTML = "<h2>Test Not Found</h2>";
        return;
    }

    const includesHTML = `
    <ul class="detail-list">
      ${selectedData.includes.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;

    detailContainer.innerHTML = `
    <div class="detail-card">
      <h1 class="detail-title">${displayName}</h1>
      <h3 class="detail-price">${selectedData.price}</h3>
      ${includesHTML}
      <button class="book-btn" id="bookNowBtn">Book Now</button>
    </div>
  `;

    // Right Side Name Box
    nameBox.innerHTML = `
    <div class="big-test-name">
      ${displayName}
    </div>
  `;

    document.getElementById("bookNowBtn").addEventListener("click", function () {

        const message =
            `Hello, I want to book this test:\n\n` +
            `Test Name: ${displayName}\n` +
            `Price: ${selectedData.price}`;

        window.open(
            `https://wa.me/919650624441?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    });

});