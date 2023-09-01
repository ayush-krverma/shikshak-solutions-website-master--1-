import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDrop,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/shikshak-admin/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavTitle,
    name: 'Website',
  },
  {
    component: CNavGroup,
    name: 'Home',
    to: '/shikshak-admin/home',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Setting',
        to: '/shikshak-admin/home/setting',
      },
      {
        component: CNavItem,
        name: 'Banner',
        to: '/shikshak-admin/home/banner',
      },

    ],
  },
  {
    component: CNavItem,
    name: 'Offering',
    to: '/shikshak-admin/offering',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Product',
    to: '/shikshak-admin/product',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Post',
    to: '/shikshak-admin/post',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Ecommerce',
  },
  {
    component: CNavGroup,
    name: 'Order',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'order',
        to: '/shikshak-admin/ecommerce/order',
      },
      {
        component: CNavItem,
        name: 'Customer',
        to: '/shikshak-admin/ecommerce/customer',
      },
    ],
  },{
    component: CNavTitle,
    name: 'Management',
  },
  {
    component: CNavGroup,
    name: 'Employee',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'employee',
        to: '/shikshak-admin/management/employee',
      },
    ],
  },
]

export default _nav
