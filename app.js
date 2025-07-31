      function calculateAge() {
            const day = parseInt(document.getElementById('day').value);
            const month = parseInt(document.getElementById('month').value);
            const year = parseInt(document.getElementById('year').value);
            const resultDiv = document.getElementById('result');
            const errorDiv = document.getElementById('error');

            // Clear previous results
            resultDiv.textContent = '';
            errorDiv.textContent = '';

            // Input validation
            if (!day || !month || !year) {
                errorDiv.textContent = 'Please fill in all fields';
                return;
            }

            if (day < 1 || day > 31 || month < 1 || month > 12 || year < 1900 || year > 2025) {
                errorDiv.textContent = 'Please enter valid date values';
                return;
            }

            // Validate date
            const dob = new Date(year, month - 1, day);
            if (dob.getDate() !== day || dob.getMonth() !== month - 1 || dob.getFullYear() !== year) {
                errorDiv.textContent = 'Invalid date';
                return;
            }

            const today = new Date();
            if (dob > today) {
                errorDiv.textContent = 'Date of birth cannot be in the future';
                return;
            }

            // Calculate age
            let years = today.getFullYear() - dob.getFullYear();
            let months = today.getMonth() - dob.getMonth();
            let days = today.getDate() - dob.getDate();

            if (days < 0) {
                months--;
                days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
            }

            if (months < 0) {
                years--;
                months += 12;
            }

            resultDiv.textContent = `You are ${years} years, ${months} months, and ${days} days old.`;
        }