import './categories.css';

export function createCategories() {
  const categoriesContainer = document.createElement('div');
  categoriesContainer.className = 'categories-container';

  // Title Bar
  const titleBar = document.createElement('div');
  titleBar.className = 'categories-title-bar';
  titleBar.innerHTML = `
    <div class="categories-title">Danh mục</div>
    <div class="categories-view-all">
      <span>Xem tất cả</span>
      <div class="categories-arrow-icon"></div>
    </div>
  `;

  // Categories Slider
  const slider = document.createElement('div');
  slider.className = 'categories-slider';
  const categories = [
    { name: 'Tất cả', image: '/image/danhmuc2.png', active: true },
    { name: 'Mini app', image: '/image/danhmuc2.png' },
    { name: 'Mini shop', image: '/image/danhmuc2.png' },
    
  ];
categories.forEach((cat, index) => {
  const item = document.createElement('div');
  item.className = 'category-item';
  if (cat.active) {
    item.classList.add('active');
  }
  item.innerHTML = `
    <div class="category-icon-container">
      ${cat.image ? `<img src="${cat.image}" />` : '<div class="category-icon-placeholder"></div>'}
    </div>
    <div class="category-label-container">
      <div class="category-label">${cat.name}</div>
    </div>
  `;

  // Thêm sự kiện click để chọn mục
  item.addEventListener('click', () => {
    // Cập nhật trạng thái active
    categories.forEach((c, i) => {
      c.active = i === index; // Chỉ mục được click là active
    });

    // Cập nhật giao diện
    const allItems = slider.querySelectorAll('.category-item');
    allItems.forEach((el, i) => {
      if (i === index) {
        el.classList.add('active');
      } else {
        el.classList.remove('active');
      }
    });

    console.log(`Selected category: ${cat.name}`); // Log mục được chọn
  });

  slider.appendChild(item);
});

// Product Grid — thay code placeholder bằng danh sách sản phẩm thật
  const productGrid = document.createElement('div');
  productGrid.className = 'product-grid';

  // Mảng dữ liệu sản phẩm
  const products = [
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán và chăm sóc khách hàng trên zalo MiniApp',
      price: 14000,
      originalPrice: null,
      discount: null,
      sold: null,
      rating: null,
      actionText: 'Đặt lịch ngay',
      actionClass: 'btn-primary-outline',
      badge: null
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán và chăm sóc khách hàng trên zalo MiniApp',
      price: 14000,
      originalPrice: 19000,
      discount: 20,
      sold: 56,
      rating: 4.5,
      actionText: null,
      actionClass: null,
      badge: null
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán và chăm sóc khách hàng trên zalo MiniApp',
      price: 14000,
      originalPrice: null,
      discount: null,
      sold: 56,
      rating: 4.5,
      actionText: null,
      actionClass: null,
      badge: null
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán',
      price: 14000,
      originalPrice: null,
      discount: null,
      sold: 56,
      rating: 4.5,
      actionText: null,
      actionClass: null,
      badge: null
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán và chăm sóc khách hàng trên zalo MiniApp',
      price: 14000,
      originalPrice: null,
      discount: null,
      sold: null,
      rating: null,
      actionText: 'Tư vấn ngay',
      actionClass: 'btn-primary-outline',
      badge: null
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán và chăm sóc khách hàng trên zalo MiniApp tối ưu chi phí tối đa',
      price: 14000,
      originalPrice: 19000,
      discount: 20,
      sold: 56,
      rating: 4.5,
      actionText: null,
      actionClass: null,
      badge: 'Bán chạy'
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán và chăm sóc khách hàng',
      price: 14000,
      originalPrice: 19_000,
      discount: 20,
      sold: 56,
      rating: 4.5,
      actionText: null,
      actionClass: null,
      badge: 'Bán chạy'
    },
    {
      image: '/image/Product1.png',
      title: 'Mini Shop giải pháp bán ',
      price: 14000,
      originalPrice: 19_000,
      discount: 20,
      sold: 56,
      rating: 4.5,
      actionText: null,
      actionClass: null,
      badge: 'Bán chạy'
    },
  ];

  products.forEach(prod => {
    const item = document.createElement('div');
    item.className = 'product-item';
    item.innerHTML = `
      <div class="product-image">
        <img src="${prod.image}" alt="${prod.title}" />
        ${prod.badge ? `<div class="product-badge">${prod.badge}</div>` : ''}
      </div>
      <div class="product-info">
        <div class="product-title">${prod.title}</div>
        <div class="product-pricing">
          ${prod.discount ? `<div class="product-discount">Giảm ${prod.discount}%</div>` : ''}
          <div class="product-price">${prod.price.toLocaleString()} VNĐ</div>
          ${prod.originalPrice ? `<div class="product-original-price">${prod.originalPrice.toLocaleString()} VNĐ</div>` : ''}
        </div>
        <div class="product-meta">
          ${prod.sold !== null ? `<div class="product-sold">Đã bán ${prod.sold}</div>` : ''}
          ${prod.rating !== null ? `<div class="product-rating">${prod.rating.toFixed(1)}</div>` : ''}
        </div>
        ${prod.actionText ? `
          <button class="product-action ${prod.actionClass}">
            ${prod.actionText}
          </button>
        ` : ''}
      </div>
    `;
    productGrid.appendChild(item);
  });

  categoriesContainer.append(titleBar, slider, productGrid);
  return categoriesContainer;
}