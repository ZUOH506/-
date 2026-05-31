class TreeVisualizer {
    constructor(containerId, data, rootName) {
        this.container = document.getElementById(containerId);
        this.data = data;
        this.rootName = rootName;
        this.tooltip = null;
        this.nodePositions = [];
        this.init();
    }

    init() {
        this.createTooltip();
        this.renderTree(this.data, this.container);
    }

    getGeneration(node) {
        if (node.family !== '贾') return 10;
        if (node.name.includes('代')) return 1;
        if (node.name.includes('文')) return 2;
        if (node.name.includes('玉')) return 3;
        if (/[芸蘭兰蔷芹菌蒲藏蓉藍藍]/.test(node.name)) return 4;
        return 5;
    }

    sortByGeneration(children) {
        return [...children].sort((a, b) => {
            return this.getGeneration(a) - this.getGeneration(b);
        });
    }

    createTooltip() {
        this.tooltip = document.createElement('div');
        this.tooltip.className = 'tooltip';
        document.body.appendChild(this.tooltip);
    }

    getAvatarElement(avatarUrl, name) {
        const span = document.createElement('span');
        span.className = 'avatar';

        if (avatarUrl && (avatarUrl.startsWith('http://') || avatarUrl.startsWith('https://'))) {
            const img = document.createElement('img');
            img.src = avatarUrl;
            img.alt = name;
            img.className = 'avatar-img';
            img.onerror = () => {
                span.className = 'avatar avatar-emoji';
                span.textContent = '👤';
            };
            span.appendChild(img);
        } else {
            span.className = 'avatar avatar-emoji';
            span.textContent = avatarUrl || '👤';
        }

        return span;
    }

    renderTree(node, parentElement, level = 0, parentInfo = null) {
        const treeNode = document.createElement('div');
        treeNode.className = 'tree-node';
        treeNode.dataset.level = level;

        if (level > 0) {
            treeNode.classList.add('collapsed');
        }

        const nodeContent = document.createElement('div');
        nodeContent.className = 'node-content';

        let familyClass = '';
        if (node.family) {
            familyClass = `family-${node.family.toLowerCase()}`;
            nodeContent.classList.add(familyClass);
        }

        const avatarSpan = this.getAvatarElement(node.avatar, node.name);

        const nameDiv = document.createElement('div');
        nameDiv.className = 'name';
        nameDiv.textContent = node.name;

        const titleDiv = document.createElement('div');
        titleDiv.className = 'title';
        titleDiv.textContent = node.title || '';

        nodeContent.appendChild(avatarSpan);
        nodeContent.appendChild(nameDiv);
        nodeContent.appendChild(titleDiv);

        if (node.family) {
            const familyTag = document.createElement('span');
            familyTag.className = `family-tag ${familyClass}`;
            familyTag.textContent = node.family;
            nodeContent.appendChild(familyTag);
        }

        nodeContent.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleNode(treeNode, nodeContent);
        });
        nodeContent.addEventListener('mouseenter', (e) => this.showTooltip(e, node));
        nodeContent.addEventListener('mouseleave', () => this.hideTooltip());

        treeNode.appendChild(nodeContent);

        if (node.children && node.children.length > 0) {
            const childrenContainer = document.createElement('div');
            childrenContainer.className = 'children';

            const expandBtn = document.createElement('button');
            expandBtn.className = 'expand-btn';
            expandBtn.textContent = `▼ ${node.children.length} 人`;
            expandBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.toggleNode(treeNode, nodeContent);
            });
            nodeContent.appendChild(expandBtn);

            const sortedChildren = this.sortByGeneration(node.children);
            sortedChildren.forEach(child => {
                const childWrapper = document.createElement('div');
                childWrapper.className = 'child-branch';
                this.renderTree(child, childWrapper, level + 1, node);
                childrenContainer.appendChild(childWrapper);
            });

            treeNode.appendChild(childrenContainer);
        }

        parentElement.appendChild(treeNode);
    }

    toggleNode(treeNode, nodeContent) {
        const children = treeNode.querySelector('.children');
        const expandBtn = nodeContent.querySelector('.expand-btn');

        if (children) {
            if (treeNode.classList.contains('collapsed')) {
                treeNode.classList.remove('collapsed');
                treeNode.classList.add('expanded');
                if (expandBtn) expandBtn.textContent = expandBtn.textContent.replace('▼', '▲');
                nodeContent.classList.add('active');

                children.style.opacity = '0';
                children.style.display = 'flex';

                requestAnimationFrame(() => {
                    children.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                    children.style.opacity = '1';
                });
            } else {
                treeNode.classList.add('collapsed');
                treeNode.classList.remove('expanded');
                if (expandBtn) expandBtn.textContent = expandBtn.textContent.replace('▲', '▼');
                nodeContent.classList.remove('active');

                children.style.opacity = '0';
                setTimeout(() => {
                    children.style.display = 'none';
                }, 300);
            }
        }
    }

    showTooltip(event, node) {
        const tooltip = this.tooltip;
        const avatarSpan = this.getAvatarElement(node.avatar, node.name);

        tooltip.className = 'tooltip';
        if (node.family) {
            tooltip.classList.add(`family-${node.family.toLowerCase()}`);
        }

        tooltip.innerHTML = `
            <div class="tooltip-header">
                <div class="tooltip-info">
                    <h3>${node.name}</h3>
                    <div class="title">${node.title || ''}</div>
                </div>
            </div>
            <div class="tooltip-description">${node.description || ''}</div>
        `;

        tooltip.insertBefore(avatarSpan, tooltip.firstChild);

        const rect = event.target.closest('.node-content').getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top - tooltip.offsetHeight - 15}px`;

        if (tooltip.offsetTop < 0) {
            tooltip.style.top = `${rect.bottom + 15}px`;
        }

        tooltip.classList.add('visible');
    }

    hideTooltip() {
        this.tooltip.classList.remove('visible');
    }
}

function initTree(containerId, dataType) {
    let treeData;
    let rootName;

    if (dataType === 'ningguo') {
        treeData = charactersData.ningguo;
        rootName = '宁国府';
    } else if (dataType === 'rongguo') {
        treeData = charactersData.rongguo;
        rootName = '荣国府';
    }

    if (treeData) {
        new TreeVisualizer(containerId, treeData, rootName);
    }
}