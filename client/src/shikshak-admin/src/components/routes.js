import React from 'react';

// import cart from '../../Pages/Frontend/cart';
const Post = React.lazy(() => import('../Pages/Post'))
// const cart = React.lazy(() => import('../../Pages/Frontend/cart'))
const routes = [
    { path: '/shikshak-admin/post', name: 'Post', element: Post },
    // { path: '/cart/post', name: 'cart', element: cart },
]

export default routes
