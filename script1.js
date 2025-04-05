const stateDistrictMap = {
    "Andhra Pradesh": ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"],

    
    // Add more states and their districts as needed
};

function updateDistricts() {
    const stateSelect = document.getElementById('state');
    const districtSelect = document.getElementById('district');
    const selectedState = stateSelect.value;

    // Clear previous district options
    districtSelect.innerHTML = '<option value="">Select District</option>';

    if (selectedState && stateDistrictMap[selectedState]) {
        const districts = stateDistrictMap[selectedState];
        districts.forEach(district => {
            const option = document.createElement('option');
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
}



document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    if (name && email && phone) {
        document.getElementById('success-message').style.display = 'block';
        // You can add your email sending logic here
        setTimeout(function() {
            document.getElementById('success-message').style.display = 'none';
        }, 5000);
    } else {
        alert('Please fill in all fields.');
    }
});
