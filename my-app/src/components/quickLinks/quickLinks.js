import './quickLinks.css';

export function createQuickLinks() {
  const links = [
    {icon: '/icons/game.svg', label: 'Mini Game'},
    {icon: '/icons/heart.svg', label: 'Yêu thích'},
    {icon: '/icons/form.svg', label: 'Mini Form'},
    {icon: '/icons/news.svg', label: 'Tin tức'},
    {icon: '/icons/star.svg', label: 'Ưu đãi'},
    {icon: '/icons/suggestion.svg', label: 'Góp ý'},
    {icon: '/icons/about.svg', label: 'Về chúng tôi'},
  ];

  const quickLinksContainer = document.createElement('div');
  quickLinksContainer.className = 'quick-links-container';

  const wrapper = document.createElement('div');
  wrapper.className = 'quick-links-wrapper';

  links.forEach(link => {
    const linkItem = document.createElement('div');
    linkItem.className = 'quick-link-item';

    linkItem.innerHTML = `
      <div class="quick-link-icon-container">
        <div class="quick-link-icon-background"></div>
        <img class="quick-link-icon" src="${link.icon}" alt="">
      </div>
      <div class="quick-link-label">${link.label}</div>
    `;
    wrapper.appendChild(linkItem);
  });

  quickLinksContainer.appendChild(wrapper);
  return quickLinksContainer;
}