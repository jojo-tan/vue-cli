// 导航栏菜单信息
export const menuInfo = [
  { 
    key: 'home',
    name: 'home',
    title: '首页',
    path: '/home',
    component: () => import('@/pages-pc/home/index.vue')
  }
]

// 非导航栏菜单信息
export const noNavMenuInfo = [
  { 
    key: 'login',
    name: 'login',
    title: '登录页',
    path: '/login', 
    component: () => import('@/pages-pc/login/index.vue'),
    meta: {
      hideMenu: true, // 是否隐藏导航栏
      keepAlive: false // 是否缓存页面
    }
  }
] 

// 获取菜单信息指定字段
export const getMenuInfo = (menuList = [], keys = []) => {
  return menuList.map((item) => {
    const config = {}
    for (let key in item) {
      if (keys.includes(key)) config[key] = item[key]
    }
    return config
  })
}
