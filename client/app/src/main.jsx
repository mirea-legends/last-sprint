import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import TimeAgo from 'javascript-time-ago'

import ru from 'javascript-time-ago/locale/ru'
import ChatPage from './pages/ChatPage'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
	{
		path: '/',
		// element: (
		// 	<SyntaxHighlighter language='python' style={darcula}>
		// 		print(a+b)
		// 	</SyntaxHighlighter>
		// ),
		element: <ChatPage></ChatPage>,
		errorElement: <ErrorPage></ErrorPage>,
	},
])

TimeAgo.addDefaultLocale(ru)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
