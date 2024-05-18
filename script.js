// script.js

document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'https://coding-week-2024-api.onrender.com/api/data';  // Replace with actual API endpoint
    const section1Content = document.getElementById('section1-content');
    const section2Content = document.getElementById('section2-content');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            renderSection1(data);
            renderSection2(data);
        })
        .catch(error => console.error('Error fetching data:', error));

    function renderSection1(data) {
        data.forEach(blog => {
            if (blog.type.includes('featured')) {
                const post = document.createElement('div');
                post.className = 's-col1-post';
                post.innerHTML = `
                    <div class="s-c1-image">
                        <a href="ind4.html" alt="${blog.headline}">
                            <img src="${blog.image}" alt="${blog.headline}">
                        </a>
                    </div>
                    <div class="s-c1-post-content">
                        <div class="s-c1-post-meta">
                            <span class="s-c1-post-categories">
                                <a href="#">${blog.type.join('</a><a href="#">')}</a>
                            </span>
                        </div>
                        <h3 class="s-c1-post-title">
                            <a href="#" onclick="showModal('${blog.content}')">${blog.headline}</a>
                        </h3>
                        <div class="s-c1-post-entry-meta">
                            <span class="s-c1-post-author">
                                <img class="post-author-image" src="${blog.authorImage}" alt="${blog.author}">
                                <a href="#" title="${blog.author}">${blog.author}</a>
                            </span>
                            <span class="s-c1-post-date">
                                <svg class="mzb-icon mzb-icon--calender" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                    <path d="M1.892 12.929h10.214V5.5H1.892v7.429zm2.786-8.822v-2.09a.226.226 0 00-.066-.166.226.226 0 00-.166-.065H3.98a.226.226 0 00-.167.065.226.226 0 00-.065.167v2.09c0 .067.022.122.065.166.044.044.1.065.167.065h.465a.226.226 0 00.166-.065.226.226 0 00.066-.167zm5.571 0v-2.09a.226.226 0 00-.065-.166.226.226 0 00-.167-.065h-.464a.226.226 0 00-.167.065.226.226 0 00-.065.167v2.09c0 .067.021.122.065.166.043.044.099.065.167.065h.464a.226.226 0 00.167-.065.226.226 0 00.065-.167zm2.786-.464v9.286c0 .251-.092.469-.276.652a.892.892 0 01-.653.276H1.892a.892.892 0 01-.653-.275.892.892 0 01-.276-.653V3.643c0-.252.092-.47.276-.653a.892.892 0 01.653-.276h.929v-.696c0-.32.113-.593.34-.82.228-.227.501-.34.82-.34h.465c.319 0 .592.113.82.34.227.227.34.5.34.82v.696h2.786v-.696c0-.32.114-.593.34-.82.228-.227.501-.34.82-.34h.465c.32 0 .592.113.82.34.227.227.34.5.34.82v.696h.93c.25 0 .468.092.652.276a.892.892 0 01.276.653z"></path>
                                </svg>
                                <a href="#">${blog.date}</a>
                            </span>
                        </div>
                    </div>
                `;
                section1Content.appendChild(post);
            }
        });
    }

    function renderSection2(data) {
        data.forEach(blog => {
            const post = document.createElement('div');
            post.className = 's-c2-post';
            post.innerHTML = `
                <div class="s-c2-featured-image">
                    <a href="#" alt="${blog.headline}">
                        <img src="${blog.image}" alt="${blog.headline}">
                    </a>
                </div>
                <div class="s-c2-post-content">
                    <h3 class="s-c2-post-title">
                        <a href="#" onclick="showModal('${blog.content}')">${blog.headline}</a>
                    </h3>
                    <div class="s-c2-post-entry-meta">
                        <span class="s-c2-post-date">
                            <svg class="s-c2-icon--calender" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                                <path d="M1.892 12.929h10.214V5.5H1.892v7.429zm2.786-8.822v-2.09a.226.226 0 00-.066-.166.226.226 0 00-.166-.065H3.98a.226.226 0 00-.167.065.226.226 0 00-.065.167v2.09c0 .067.022.122.065.166.044.044.1.065.167.065h.465a.226.226 0 00.166-.065.226.226 0 00.066-.167zm5.571 0v-2.09a.226.226 0 00-.065-.166.226.226 0 00-.167-.065h-.464a.226.226 0 00-.167.065.226.226 0 00-.065.167v2.09c0 .067.021.122.065.166.043.044.099.065.167.065h.464a.226.226 0 00.167-.065.226.226 0 00.065-.167zm2.786-.464v9.286c0 .251-.092.469-.276.652a.892.892 0 01-.653.276H1.892a.892.892 0 01-.653-.275.892.892 0 01-.276-.653V3.643c0-.252.092-.47.276-.653a.892.892 0 01.653-.276h.929v-.696c0-.32.113-.593.34-.82.228-.227.501-.34.82-.34h.465c.319 0 .592.113.82.34.227.227.34.5.34.82v.696h2.786v-.696c0-.32.114-.593.34-.82.228-.227.501-.34.82-.34h.465c.32 0 .592.113.82.34.227.227.34.5.34.82v.696h.93c.25 0 .468.092.652.276a.892.892 0 01.276.653z"></path>
                            </svg>
                            <a href="#">${blog.date}</a>
                        </span>
                    </div>
                </div>
            `;
            section2Content.appendChild(post);
        });
    }

    window.showModal = function(content) {
        modal.style.display = 'block';
        modalContent.innerHTML = `<p>${content}</p>`;
    };

    modal.onclick = function() {
        modal.style.display = 'none';
    };
});


