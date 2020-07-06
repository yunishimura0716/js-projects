document.getElementById('loan-form').addEventListener('submit', function(e){
    //show loading
    document.getElementById('loading').style.display = 'block';
    //hide results
    document.getElementById('results').style.display = 'none';

    setTimeout(calculateResults, 2000);
    
    e.preventDefault();
});

function calculateResults(){
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthylPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');

    //get value for calculation
    const principal = parseFloat(amount.value);
    const calculatedInterests = parseFloat(interest.value) / 100 / 12;
    const calcualtedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterests, calcualtedPayments);
    const monthly = principal*x*calculatedInterests / (x - 1);

    if(isFinite(monthly)){
        monthylPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly * calcualtedPayments).toFixed(2);
        totalInterest.value = (monthly * calcualtedPayments - principal).toFixed(2);
        
        //hide loading
        document.getElementById('loading').style.display = 'none';
        //show results
        document.getElementById('results').style.display = 'block';
    } else {
        //hide loading
        document.getElementById('loading').style.display = 'none';
        errorShow("Please check your number");
    }
}

function errorShow(error){
    const errorDiv = document.createElement('div');
    errorDiv.className = 'alert alert-danger';
    errorDiv.appendChild(document.createTextNode(error));

    //insert at before heading
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
    
    card.insertBefore(errorDiv, heading);

    //remove after 3 seconds
    setTimeout(clearError, 3000);
}

function clearError(){
    document.querySelector('.alert').remove();
}
