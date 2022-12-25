import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RecoilRoot} from 'recoil'
import Client from './Client'
import GlobalStyle from './styles/globalStyle'

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <Client />
        <ReactQueryDevtools initialIsOpen panelProps={{style: {height: 250}}} />
      </RecoilRoot>
    </QueryClientProvider>
  </React.StrictMode>,
)
