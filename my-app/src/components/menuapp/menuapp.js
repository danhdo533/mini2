import './menuapp.css';
import { createDanhmuc } from '../Danhmuc/danhmuc.js'
import { createHeader, createBanner } from '../header/header.js'
import { createQuickLinks } from '../quickLinks/quickLinks.js'
import { createCategories } from '../categories/categories.js'

export function createMenuApp() {
  const menuItems = [
    {
      id: 'home',
      label: 'Trang chủ',
      icon: '/icons/home.svg',
      labelClass: 'menu-home-label',
      badge: false,
      active: true
    },
    {
      id: 'category',
      label: 'Danh mục',
      icon: '/icons/category.svg',
      labelClass: 'menu-default-label',
      badge: false,
      active: false
    },
    {
      id: 'offer',
      label: 'Ưu đãi',
      icon: '/icons/offer.svg',
      labelClass: 'menu-default-label',
      badge: false,
      active: false
    },
    {
      id: 'cart',
      label: 'Giỏ hàng',
      icon: '/icons/cart.svg',
      labelClass: 'menu-default-label',
      badge: false,
      active: false
    },
    {
      id: 'member',
      label: 'Thành viên',
      icon: '/icons/member.svg',
      labelClass: 'menu-default-label',
      badge: false,
      active: false
    }
  ]

  // Container chính menu bar
  const menuAppContainer  = document.createElement('div')
  menuAppContainer.className = 'menu-app-container'

  // Wrapper chứa các item
  const menuItemsWrapper = document.createElement('div')
  menuItemsWrapper.className = 'menu-items-wrapper'

  // Tạo từng item
  menuItems.forEach(item => {
    const menuItem = document.createElement('div')
    menuItem.className = `menu-item${item.active ? ' active' : ''}`
    menuItem.id = item.id

    // Icon
    const icon = document.createElement('img')
    icon.className = 'menu-icon'
    icon.src = item.icon
    icon.alt = item.label
    menuItem.appendChild(icon)  // Style filter dựa trên active

    // Label
    const label = document.createElement('div')
    label.className = 'menu-label'
    label.textContent = item.label
    menuItem.appendChild(label)

    // Click handler
    menuItem.addEventListener('click', () => {
      // 1. Reset tất cả item về inactive
      menuItemsWrapper.querySelectorAll('.menu-item').forEach(el => el.classList.remove('active'))

      // 2. Active cho item được click
      menuItem.classList.add('active')

      // 3. Lấy root và xóa view cũ
      const root = document.getElementById('root')
      if (!root) return
      root.innerHTML = ''

      // 4. Xử lý khi click vào "Menu Bar"
      if (item.id === 'home') {
        root.append(
          createHeader(),
          createBanner(),
          createQuickLinks(),
          createCategories(),
          menuAppContainer      // **chèn menu bar của instance hiện tại**
        )
      }else if (item.id === 'category') {
       root.append(
          createHeader(),
          createDanhmuc(),
          menuAppContainer
        )
      }

      // TODO: xử lý các trang khác (home, offer, cart, member)
    })

    // Đưa menuItem vào wrapper
    menuItemsWrapper.appendChild(menuItem)
  })

  // Đưa wrapper vào container chính
  menuAppContainer.appendChild(menuItemsWrapper)

  return menuAppContainer
}