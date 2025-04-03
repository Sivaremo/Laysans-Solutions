document.getElementById('jobform').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the submit button
    const submitButton = document.querySelector('button[type="submit"]');
    
    // Change button text and disable it
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    // Gather form data
    const jobData = {
        JobName: document.getElementById('jobName').value,
        RoleName: document.getElementById('roleName').value,
        Aboutjob: document.getElementById('aboutJob').value,
        exp: document.getElementById('experience').value,
        Iconclassname: document.getElementById('iconClass').value
    };

    // POST request to create a new job
    fetch('https://laysans-solutions-api.onrender.com/career', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(jobData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Optionally, you can display a success message or update the UI
    })
    .catch((error) => {
        console.error('Error:', error);
    })
    .finally(() => {
        // Reset button text and enable it
        submitButton.textContent = 'Submit';
        submitButton.disabled = false;
    });
});

// Function to update a job (PUT request)
function updateJob(jobId) {
    const updatedJobData = {
        JobName: document.getElementById('jobName').value,
        RoleName: document.getElementById('roleName').value,
        Aboutjob: document.getElementById('aboutJob').value,
        exp: document.getElementById('experience').value,
        Iconclassname: document.getElementById('iconClass').value
    };

    fetch(`https://laysans-solutions-api.onrender.com/career/${jobId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedJobData)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Updated:', data);
        // Optionally, you can display a success message or update the UI
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}