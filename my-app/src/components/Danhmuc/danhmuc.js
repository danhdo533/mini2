// src/components/Danhmuc/danhmuc.js
import './danhmuc.css';

export function createDanhmuc() {
  // 1. Tạo container chính
  const danhmucContainer = document.createElement('div');
  danhmucContainer.className = 'danhmuc-container';
  
  console.log('📦 Đang tạo component Danh mục');

  // 2. Title Bar
  const titleBar = document.createElement('div');
  // titleBar.className = 'categories-title-bar';
  titleBar.innerHTML = `<h1>Danh mục</h1>`;

  // 3. Slider danh mục
  const slider = document.createElement('div');
  slider.className = 'categories-slider';
  const categories = [
    { name: 'Tất cả',    image: '/image/danhmuc2.png', active: true },
    { name: 'Mini app',  image: '/image/danhmuc2.png', active: false },
    { name: 'Mini shop', image: '/image/danhmuc2.png', active: false },
  ];

  categories.forEach((cat, index) => {
    const item = document.createElement('div');
    item.className = 'category-item';
    if (cat.active) item.classList.add('active');

    // Khi click thay đổi active
    item.addEventListener('click', () => {
      categories.forEach((c, i) => c.active = (i === index));
      slider.querySelectorAll('.category-item').forEach((el, i) => {
        el.classList.toggle('active', i === index);
      });
      console.log(`✅ Chọn danh mục: ${cat.name}`);
    });

    item.innerHTML = `
      <div class="category-icon-container">
        ${cat.image 
          ? `<img src="${cat.image}" />` 
          : '<div class="category-icon-placeholder"></div>'}
      </div>
      <div class="category-label-container">
        <div class="category-label">${cat.name}</div>
      </div>
    `;
    slider.appendChild(item);
  });

  // 4. Grid sản phẩm giả lập
  const productGrid = document.createElement('div');
  productGrid.className = 'product-grid';
  for (let i = 0; i < 8; i++) {
    const product = document.createElement('div');
    product.className = 'product-item-placeholder';
    product.innerHTML = `
      <div class="product-image-placeholder"></div>
      <div class="product-info-placeholder">
        <div class="line-1"></div>
        <div class="line-2"></div>
        <div class="line-3-container">
          <div class="line-3"></div>
          <div class="product-icon-placeholder"></div>
        </div>
      </div>
    `;
    productGrid.appendChild(product);
  }

  // 5. Gộp tất cả vào container chính
  danhmucContainer.append(titleBar, slider, productGrid);

  console.log('✅ Đã tạo xong Danhmuc container:', danhmucContainer);

  // 6. Trả về node để render
  return danhmucContainer;
}
