import React, {Suspense} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import IndexHeader from './components/indexHeader'
import IndexBotton from './components/indexBotton'
import Article from './components/articles/index'
import Tilis from './components/tilis/index'
import router from './router' 
import useMediaQuery from '@mui/material/useMediaQuery';

const App: React.FC =() => {
   const matches = useMediaQuery('(min-width:600px)');
   const suoyou=() => {
    return <div>
      <IndexHeader/>
        <Routes>
          {
            router.map((item, i) => {
              console.log('----',item)
              return (
                <Route key={i} path={item.path} element={
                  <Suspense fallback={
                    <div>路由懒加载...</div>
                  }>
                  < item.component />
                  </Suspense>
                } />
              )
            })
          }
        </Routes>
      <Article />
      <IndexBotton/>
    </div>
   }
    return (
      <main className="box">
        {matches ? suoyou() : <Tilis />}
      </main>
    )
}

export default App;
