// src/main.js
import './style.css'
import { createHeader, createBanner } from './components/header/header.js'
import { createQuickLinks } from './components/quickLinks/quickLinks.js'
import { createCategories } from './components/categories/categories.js'
import { createMenuApp } from './components/menuapp/menuapp.js'

console.log('🚀 main.js loaded')

window.addEventListener('DOMContentLoaded', () => {
  console.log('✅ DOMContentLoaded fired')

  const root = document.getElementById('root')
  if (!root) {
    console.error('❌ Không tìm thấy <div id="root"> trong index.html')
    return
  }

  // Tạo component
  const header     = createHeader();     console.log('header:', header)
  const banner     = createBanner();     console.log('banner:', banner)
  const quickLinks = createQuickLinks(); console.log('quickLinks:', quickLinks)
  const categories = createCategories(); console.log('categories:', categories)
  const menuApp    = createMenuApp();    console.log('menuApp:', menuApp)

  // Append tất cả vào root
  // Cách 1: dùng append (hỗ trợ nhiều node)
  root.append(header, banner, quickLinks, categories, menuApp)

  
})
