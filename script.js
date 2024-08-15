const projectData = {
    "_id": {"$oid": "63b64dc9e3b230ebb60a495d"},
    "title": "Technical Project Management",
    "description": "<p>Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.</p>\n<p>Let's prepare Sandwiches, we will use Pareto&rsquo;s Law. That&rsquo;s an 80-20 approach.<br>80% of the time in researching, and planning and 20% of the time in implementation.</p>\n<p>So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.</p>\n<p>Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.</p>\n<p>Let's start thinking together, and search for how you can get the essence of project management.</p>",
    "tasks": [{
        "task_id": 18882,
        "task_title": "Explore the world of management",
        "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
        "assets": [{
            "asset_id": 18883,
            "asset_title": "Technical Project Management",
            "asset_description": "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            "asset_content": " https://www.youtube.com/embed/TiMRwri1xJ8",
            "asset_type": "display_asset",
            "asset_content_type": "video"
        },{
            "asset_id": 18884,
            "asset_title": "Threadbuild",
            "asset_description": "Watch the video and thread build, and jot out key threads while watching that video.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "threadbuilder"
        },{
            "asset_id": 18885,
            "asset_title": "Structure you pointers ",
            "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            "asset_content": " ",
            "asset_type": "input_asset",
            "asset_content_type": "article"
        },{
            "asset_id": 18886,
            "asset_title": "4SA Method",
            "asset_description": "To explore more read more",
            "asset_content": " https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            "asset_type": "display_asset",
            "asset_content_type": "article"
        }]
    }]
};

document.getElementById('project-title').textContent = projectData.title;
document.getElementById('task-title').textContent = projectData.tasks[0].task_title;
document.getElementById('task-description').textContent = projectData.tasks[0].task_description;

const journeyBoardList = document.getElementById('journey-board-list');
const assetContainers = document.getElementById('asset-containers');

projectData.tasks[0].assets.forEach(asset => {
    const li = document.createElement('li');
    li.textContent = asset.asset_title;
    journeyBoardList.appendChild(li);

    const assetContainer = document.createElement('div');
    assetContainer.className = 'asset-container';
    assetContainer.innerHTML = `
        <div class="asset-header">
            <span class="asset-title">${asset.asset_title}</span>
            <i class="fas fa-chevron-down"></i>
        </div>
        <div class="asset-description">${asset.asset_description}</div>
        <div class="asset-content"></div>
    `;

    const assetContent = assetContainer.querySelector('.asset-content');

    if (asset.asset_content_type === 'video') {
        assetContent.innerHTML = `
            <div class="video-container">
                <iframe src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>
            </div>
        `;
    } else if (asset.asset_content_type === 'article' && asset.asset_type === 'display_asset') {
        const articleLink = document.createElement('a');
        articleLink.href = asset.asset_content;
        articleLink.textContent = 'Read Article';
        articleLink.target = '_blank';
        assetContent.appendChild(articleLink);
    } else if (asset.asset_content_type === 'threadbuilder' || (asset.asset_content_type === 'article' && asset.asset_type === 'input_asset')) {
        const textarea = document.createElement('textarea');
        textarea.placeholder = `Enter your ${asset.asset_content_type} here...`;
        assetContent.appendChild(textarea);
    }

    assetContainers.appendChild(assetContainer);

    const assetHeader = assetContainer.querySelector('.asset-header');
    const assetDescription = assetContainer.querySelector('.asset-description');
    assetHeader.addEventListener('click', () => {
        assetDescription.style.maxHeight = assetDescription.style.maxHeight ? null : assetDescription.scrollHeight + "px";
        assetHeader.querySelector('i').classList.toggle('fa-chevron-down');
        assetHeader.querySelector('i').classList.toggle('fa-chevron-up');
    });
});

const journeyBoard = document.querySelector('.journey-board');
const journeyBoardTab = document.querySelector('.journey-board-tab');

journeyBoardTab.addEventListener('click', () => {
    journeyBoard.classList.toggle('active');
});