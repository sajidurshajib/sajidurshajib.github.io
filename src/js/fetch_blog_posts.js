async function fetchDevTo() {
    try {
        const response = await fetch('https://dev.to/api/articles?username=sajidurshajib&per_page=7');
        const json = await response.json();
        return json;
    } catch (error) {
        console.error('Failed to fetch data:', error);
    }
}

async function loadBlogs() {
    try {
        const data = await fetchDevTo();
        if (!data) {
            console.error('No blog post found');
            return;
        }

        const professionalList = document.querySelector('#blog-post-list');
        professionalList.innerHTML = '';

        data.forEach(({ title, canonical_url, description }) => {
            const listItem = `
                <li class="mb-4">
                    <b class="text-gray-700 dark:text-white tracking-widest hover:text-blue-500 dark:hover:text-blue-400"><a href="${canonical_url}">${title}</a></b>
                    <p class="mb-1">${description}</p>
                </li>
            `;
            professionalList.innerHTML += listItem;
        });
    } catch (error) {
        console.error('Failed to load experience data:', error);
    }
}

document.addEventListener('DOMContentLoaded', loadBlogs);
