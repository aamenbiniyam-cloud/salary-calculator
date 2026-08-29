function money(number) {

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(number || 0);

}


/* TAX */

function estimateTax(gross) {

  let tax = 0;

  if (gross <= 2000) {
    tax = 0;
  }

  else if (gross <= 3000) {
    tax = (gross - 2000) * 0.15;
  }

  else if (gross <= 4000) {
    tax =
      150 +
      (gross - 3000) * 0.20;
  }

  else if (gross <= 7000) {
    tax =
      350 +
      (gross - 4000) * 0.25;
  }

  else {
    tax =
      1100 +
      (gross - 7000) * 0.30;
  }

  return Math.max(0, tax);
}


/* SALARY */

function calculateSalary() {

  const gross =
    Number(
      document.getElementById("gross").value
    ) || 0;


  if (gross <= 0) {

    alert("Please enter a valid salary.");

    return;
  }


  const pension =
    gross * 0.07;


  const tax =
    estimateTax(gross);


  const net =
    Math.max(
      0,
      gross - pension - tax
    );


  const result =
    document.getElementById(
      "salaryResult"
    );


  result.classList.remove("hidden");


  result.innerHTML = `

    <h2>Salary Result</h2>

    <p>
      Gross Monthly Salary
    </p>

    <div class="number">
      ${money(gross)} ETB
    </div>

    <hr>

    <p>
      Employee Pension:
      <strong>
        ${money(pension)} ETB
      </strong>
    </p>

    <p>
      Estimated Income Tax:
      <strong>
        ${money(tax)} ETB
      </strong>
    </p>

    <p>
      Estimated Take-Home Salary
    </p>

    <div class="number">
      ${money(net)} ETB
    </div>

  `;
}


/* PENSION */

function calculatePension() {

  const salary =
    Number(
      document.getElementById(
        "pensionSalary"
      ).value
    ) || 0;


  const employeeRate =
    Number(
      document.getElementById(
        "employeeRate"
      ).value
    ) || 0;


  const employerRate =
    Number(
      document.getElementById(
        "employerRate"
      ).value
    ) || 0;


  if (salary <= 0) {

    alert(
      "Please enter the pensionable salary."
    );

    return;
  }


  const employee =
    salary * employeeRate / 100;


  const employer =
    salary * employerRate / 100;


  const total =
    employee + employer;


  const result =
    document.getElementById(
      "pensionResult"
    );


  result.classList.remove("hidden");


  result.innerHTML = `

    <h2>Pension Result</h2>

    <p>
      Employee Contribution:
      <strong>
        ${money(employee)} ETB
      </strong>
    </p>

    <p>
      Employer Contribution:
      <strong>
        ${money(employer)} ETB
      </strong>
    </p>

    <hr>

    <p>
      Total Monthly Pension
    </p>

    <div class="number">
      ${money(total)} ETB
    </div>

  `;
}


/* PAYSLIP */

function makePayslip() {

  const name =
    document.getElementById(
      "payName"
    ).value || "—";


  const month =
    document.getElementById(
      "payMonth"
    ).value || "—";


  const department =
    document.getElementById(
      "payDept"
    ).value || "—";


  const employeeId =
    document.getElementById(
      "payId"
    ).value || "—";


  const gross =
    Number(
      document.getElementById(
        "payGross"
      ).value
    ) || 0;


  const other =
    Number(
      document.getElementById(
        "payOther"
      ).value
    ) || 0;


  if (gross <= 0) {

    alert(
      "Please enter the gross salary."
    );

    return;
  }


  const pension =
    gross * 0.07;


  const tax =
    estimateTax(gross);


  const net =
    Math.max(
      0,
      gross -
      pension -
      tax -
      other
    );


  document.getElementById(
    "outName"
  ).textContent = name;


  document.getElementById(
    "outMonth"
  ).textContent = month;


  document.getElementById(
    "outDept"
  ).textContent = department;


  document.getElementById(
    "outId"
  ).textContent = employeeId;


  document.getElementById(
    "outGross"
  ).textContent =
    money(gross);


  document.getElementById(
    "outPension"
  ).textContent =
    money(pension);


  document.getElementById(
    "outTax"
  ).textContent =
    money(tax);


  document.getElementById(
    "outOther"
  ).textContent =
    money(other);


  document.getElementById(
    "outNet"
  ).textContent =
    money(net) + " ETB";


  document.getElementById(
    "payslip"
  ).classList.remove("hidden");

}
