async function fetchData() {
    try {
        const response = await fetch('../../data.json');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

async function loadProfessionalJourney() {
    try {
        const data = await fetchData();

        if (!data || !data.prof_journey) {
            console.error('Invalid data format or missing "prof_journey" key');
            return;
        }

        const professionalList = document.querySelector('#professional-journey');
        professionalList.innerHTML = '';

        data.prof_journey.forEach(({ icon, company, role, description }) => {
            const listItem = `
                <li class="mb-3">
                    <b class="text-gray-700 dark:text-white tracking-widest">${icon} ${company}</b> - ${role}
                    <p class="mt-1">${description}</p>
                </li>
            `;
            professionalList.innerHTML += listItem;
        });
    } catch (error) {
        console.error('Failed to load experience data:', error);
    }
}


async function loadSkils() {
    try {
        const data = await fetchData();

        if (!data || !data.skills) {
            console.error('Invalid data format or missing "skills" key');
            return;
        }

        const skillList = document.querySelector('#skill-div');
        skillList.innerHTML = '';

        data.skills.forEach((skill) => {
            const listItem = `
                <span class="text-xs px-3 py-1 bg-gray-100 dark:bg-blue-950 rounded-md">${skill}</span>
            `;
            skillList.innerHTML += listItem;
        });
    } catch (error) {
        console.error('Failed to load experience data:', error);
    }
}


function loaded(){
    loadProfessionalJourney();
    loadSkils()
}

document.addEventListener('DOMContentLoaded', loaded);
