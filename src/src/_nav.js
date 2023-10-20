import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilCalculator, cilChartPie, cilCursor, cilDescription, cilDrop, cilNotes, cilPencil, cilPuzzle, cilSpeedometer, cilStar, cilUser, cilCalendar, cilEnvelopeLetter, cilLibraryAdd, cilPeople, cilPenAlt, cilSatelite, cilLineStyle, cilLineWeight, cilMoney, cilWc, cilStorage, cilSettings,cilUserPlus } from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
const _nav = [
  {
    component: CNavItem,
    // name: 'Dashboard',
    title: "Dashboard",
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    identifier:"dashboard",
    // badge: {
    //   color: 'info',
    //   text: 'NEW',
    // },
  },
  {
    component: CNavItem,
    title: 'Students',
    to: '/studentTabs/1',
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
    identifier:"studentTab",
  },
  {
    component: CNavItem,
    title: "Contracts",
    icon: <CIcon icon={cilLibraryAdd} customClassName="nav-icon" />,
    to: '/settings/allcontracts',
    identifier:"contracts",
  },
  {
    component: CNavItem,
    title: "Email Templates",
    icon: <CIcon icon={cilEnvelopeLetter} customClassName="nav-icon" />,
    to: '/settings/allemailtemplates',
    identifier:"email_templates",
  },
  {
    component: CNavItem,
    title: "Batches",
    icon: <CIcon icon={cilWc} customClassName="nav-icon" />,
    to: '/settings/batches',
    identifier:"batches",
  },
  // {
  //   component: CNavItem,
  //   title: "Student Attendence ",
  //   icon: <CIcon icon={cilCalendar} customClassName="nav-icon" />,
  //   to: '/studentattendenceList',
  //   identifier:"student_attendences",
  // },
  {
    component: CNavItem,
    title: "Attendence",
    icon: <CIcon icon={cilPenAlt} customClassName="nav-icon" />,
    to: '/attendence/createstaffattendence/new',
    identifier:"attendenceTab",
  },
  {
    component: CNavItem,
    title: "Events",
    icon: <CIcon icon={cilStorage} customClassName="nav-icon" />,
    to: '/events',
    identifier:"events",
  },
  {
    component: CNavItem,
    title: "Users Management",
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    to: '/userTabs/1',
    identifier:"usersTab",
  },
  {
    component: CNavItem,
    title: "Certification",
    icon: <CIcon icon={cilMoney} customClassName="nav-icon" />,
    to: '/certifications',
    identifier:"certificates",
  },
  {
    component: CNavItem,
    title: "Level Testing",
    icon: <CIcon icon={cilLineWeight} customClassName="nav-icon" />,
    to: '/leveltesting/new',
    identifier:"levelTesting",
  },
 
  // {
  //   component: CNavItem,
  //   icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
  //   to: '/settingsTabs',
  // },
  // {
  //   component: CNavGroup,
  //    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //       to: '/settings/allcontracts',
  //     },
  //     {
  //       component: CNavItem,
  //       icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  //       to: '/settings/allemailtemplates',
  //     },
  //     // {
  //     //   component: CNavItem,
  //     //   name: 'Error 404',
  //     //   to: '/404',
  //     // },
  //     // {
  //     //   component: CNavItem,
  //     //   name: 'Error 500',
  //     //   to: '/500',
  //     // },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   to: '/login',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   to: '/register',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavItem,
  //   to: '/500',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Theme',
  // },
  // {
  //   component: CNavItem,
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Components',
  // },
  // {
  //   component: CNavItem,
  //   to: '/theme/typography',
  //   icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Base',
  //   to: '/base',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Accordion',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Breadcrumb',
  //       to: '/base/breadcrumbs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Cards',
  //       to: '/base/cards',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Carousel',
  //       to: '/base/carousels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Collapse',
  //       to: '/base/collapses',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'List group',
  //       to: '/base/list-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Navs & Tabs',
  //       to: '/base/navs',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Pagination',
  //       to: '/base/paginations',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Placeholders',
  //       to: '/base/placeholders',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Popovers',
  //       to: '/base/popovers',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Progress',
  //       to: '/base/progress',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Spinners',
  //       to: '/base/spinners',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tables',
  //       to: '/base/tables',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Buttons',
  //   to: '/buttons',
  //   icon: <CIcon icon={cilCursor} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Dropdowns',
  //       to: '/buttons/dropdowns',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Forms',
  //   icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Form Control',
  //       to: '/forms/form-control',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Select',
  //       to: '/forms/select',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Icons',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Free',
  //       to: '/icons/coreui-icons',
  //       badge: {
  //         color: 'success',
  //         text: 'NEW',
  //       },
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Flags',
  //       to: '/icons/flags',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'CoreUI Brands',
  //       to: '/icons/brands',
  //     },
  //   ],
  // },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
  // {
  //   component: CNavGroup,
  //   // name: 'Pages',
  //   icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       // name: 'Login',
  //       to: '/login',
  //       icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  //     },
  //     {
  //       component: CNavItem,
  //       // name: 'Register',
  //       to: '/register',
  //       icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  //     },
  //     {
  //       component: CNavItem,
  //       // name: 'Error 404',
  //       to: '/404',
  //       icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  //     },
  //     {
  //       component: CNavItem,
  //       // name: 'Error 500',
  //       to: '/500',
  //       icon: <CIcon icon={cilUser} customClassName="nav-icon" />
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Docs',
  //   href: 'https://coreui.io/react/docs/templates/installation/',
  //   icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  // },
]
export default _nav
