import {QueryClientProvider} from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {RecoilRoot} from 'recoil'
import Client from './Client'
import GlobalStyle from './styles/globalStyle'
import {customQueryClient} from './utils/queryClient'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <QueryClientProvider client={customQueryClient}>
    <RecoilRoot>
      <GlobalStyle />
      <Client />
      <ReactQueryDevtools initialIsOpen panelProps={{style: {height: 250}}} />
    </RecoilRoot>
  </QueryClientProvider>,
)
