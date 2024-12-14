function calculateLoan()
{
    const loanAmount=document.getElementById("LoanAmount").value;
    const interestRate=document.getElementById("InterestRate").value;
    const months=document.getElementById("Months").value;
    let interest=loanAmount*interestRate*months;
    interest/=100;
    let monthlyPayment=(((loanAmount)/months)+interest).toFixed(2);
    document.getElementById("payment").innerHTML=`Monthly Payments:${monthlyPayment}`;
}
