// script.js

document.addEventListener('DOMContentLoaded', function() {
    const registrationForm = document.getElementById('registrationForm');

    // Function to populate dropdowns (replace with your data fetching logic)
    function populateDropdown(selectId, options) {
        const select = document.getElementById(selectId);
        options.forEach(option => {
            const optionElement = document.createElement('option');
            optionElement.value = option.value;
            optionElement.textContent = option.text;
            select.appendChild(optionElement);
        });
    }

    // Example data (replace with your actual data from backend)
    const districts = [
        { value: 'Ananthapur', text: 'Ananthapur' },
        { value: 'Amaravathi', text: 'Amaravathi' },
        { value: 'east Godavari', text: 'East godavari' },
        { value: 'Guntur', text: 'Guntur' },
        { value: 'Kadapa', text: 'Kadapa' },
        { value: 'east Godavari', text: 'East godavari' },
        { value: 'Krishna', text: 'krishna' },
        { value: 'kurnool', text: 'Kurnool' },
        { value: 'Nellore', text: 'Nellore' },
        { value: 'Prakasam', text: 'Prakasam' },
        { value: 'srikakulam', text: 'Srikakulam' },
        { value: 'Vizayagaram', text: 'Vizayanagaram' },
        { value: 'Visakhapatnam', text: 'Visakhapatnam' },
        { value: 'West Godavari', text: 'West Godavari' },
        
    ];
    const bloodBanks = [
        { value: 'bank1', text: 'Andhra Pradesh' },
        
        // ... more blood banks
    ];
    const bloodGroups = [
        { value: 'A+', text: 'A+' },
        { value: 'A-', text: 'A-' },
        { value: 'B+', text: 'B+' },
        { value: 'B-', text: 'B-' },
        { value: 'O+', text: 'O+' },
        { value: 'O-', text: 'O-' },
        { value: 'AB+', text: 'AB+' },
        { value: 'AB-', text: 'AB-' },
    ];

    populateDropdown('district', districts);
    populateDropdown('bloodBank', bloodBanks);
    populateDropdown('bloodGroup', bloodGroups);

    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Basic form validation (add more robust validation)
        const district = document.getElementById('district').value;
        if (!district) {
            alert('Please select a district.');
            return;
        }

        // Collect form data
        const formData = new FormData(registrationForm);
        const data = Object.fromEntries(formData);
        console.log('Form Data:', data);

        // Example: Sending data to a backend using fetch (replace with your actual API endpoint)
        /*
        fetch('/your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(response => response.json())
        .then(result => {
            console.log('Success:', result);
            alert('Registration successful!');
            registrationForm.reset(); // Clear form after submission
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration failed. Please try again.');
        });
        */
        alert("Form submitted. Check the console for data. This would normally send the data to a backend");
        registrationForm.reset();

    });
});