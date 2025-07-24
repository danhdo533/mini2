// header.js
// import CSS để Vite/bundler tự nạp style
import './header.css';
import './banner.css';


export function createHeader() {
  const header = document.createElement('header');
  header.className = 'site-header';

  // ===== header-top =====
  const top = document.createElement('div');
  top.className = 'header-top';

  // -- Logo --
  const logo = document.createElement('div');
  logo.className = 'logo';
  logo.innerHTML = `
    <div class="logo__icon">
      <img src="/vite.svg" alt="Logo" />
    </div>
    <span class="logo__text">Mini Ai</span>
  `;
  top.appendChild(logo);

  // -- Dots + Brand --
  const shareBtn = document.createElement('button');
  shareBtn.className = 'share-button';
  shareBtn.setAttribute('aria-label', 'Share');
  shareBtn.innerHTML = `
    <img src="/share-icon.svg" alt="" />
  `;
  top.appendChild(shareBtn);

  // ===== search-bar =====
  const search = document.createElement('div');
  search.className = 'search-bar';
  search.innerHTML = `
    <span class="search-bar__placeholder">
      Tìm kiếm dịch vụ sản phẩm.....
    </span>
    <div class="search-bar__fade"></div>
    <div class="search-bar__icon">
      <img src="/search-icon.svg" alt="Search" />
    </div>
  `;

  header.append(top, search);
  return header;
}

export function createBanner() {
  const imageSources = [
    '/image/banner.jpg',
    // Add more image paths here, e.g., '/image/banners/banner2.jpg'
    '/image/banner.jpg' // Using the same image as a placeholder
  ];

  const bannerSlider = document.createElement('div');
  bannerSlider.className = 'banner-slider';

  const sliderWrapper = document.createElement('div');
  sliderWrapper.className = 'banner-slider__wrapper';

  imageSources.forEach(src => {
    const slide = document.createElement('div');
    slide.className = 'banner-slider__slide';
    const img = document.createElement('img');
    img.src = src;
    img.alt = 'Banner Image';
    slide.appendChild(img);
    sliderWrapper.appendChild(slide);
  });

  bannerSlider.appendChild(sliderWrapper);

  let currentIndex = 0;
  const slideWidth = 100; // Since each slide is 100% width

  setInterval(() => {
    currentIndex = (currentIndex + 1) % imageSources.length;
    sliderWrapper.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
  }, 3000); // Change slide every 3 seconds

  return bannerSlider;
}