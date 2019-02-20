
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Basic/index.vue') },
      { path: 'menu-bubble', component: () => import('pages/MenuBubble/index.vue') },
      { path: 'floating-menu', component: () => import('pages/FloatingMenu/index.vue') },
      { path: 'links', component: () => import('pages/Links/index.vue') },
      { path: 'images', component: () => import('pages/Images/index.vue') },
      { path: 'hiding-menubar', component: () => import('pages/HidingMenuBar/index.vue') },
      { path: 'todo-list', component: () => import('pages/TodoList/index.vue') },
      { path: 'tables', component: () => import('pages/Tables/index.vue') },
      { path: 'suggestions', component: () => import('pages/Suggestions/index.vue') },
      { path: 'markdown-shortcuts', component: () => import('pages/MarkdownShortcuts/index.vue') },
      { path: 'code-highlighting', component: () => import('pages/CodeHighlighting/index.vue') },
      { path: 'history', component: () => import('pages/History/index.vue') },
      { path: 'read-only', component: () => import('pages/ReadOnly/index.vue') },
      { path: 'embeds', component: () => import('pages/Embeds/index.vue') },
      { path: 'placeholder', component: () => import('pages/Placeholder/index.vue') },
      { path: 'export', component: () => import('pages/Export/index.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
