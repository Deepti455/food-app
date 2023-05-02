import {getAllByTestId, getByTestId, render} from "@testing-library/react"
import { Provider } from 'react-redux'
import Header from '../Header'
import store from '../../utils/store'
import {StaticRouter} from 'react-router-dom/server'

//Unit testing

test('check if logo is loaded in rendering header',()=>{
    const header = render( 
                    <StaticRouter>
                         <Provider store={store}>
                              <Header/>
                         </Provider>
                    </StaticRouter> 
               );
     const logo = header.getByTestId("logo")
     expect(logo.src).toBe("http://localhost/dummy.png")
})

test('Cart should have 0 items in rendering header',()=>{
     const header = render( 
                     <StaticRouter>
                          <Provider store={store}>
                               <Header/>
                          </Provider>
                     </StaticRouter> 
                );
      const cart = header.getByTestId("cart")
      expect(cart.innerHTML).toBe("Cart- 0 items")
 })