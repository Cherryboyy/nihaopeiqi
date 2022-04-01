import React, {Suspense} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import IndexHeader from './components/indexHeader'
import IndexBotton from './components/indexBotton'
import router from './router' 

const App: React.FC =() => {
    return (
      <main className="box">
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
        <IndexBotton/>
      </main>
    )
}

export default App;
