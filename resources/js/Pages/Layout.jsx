import { Link } from '@inertiajs/react'
import Header from './Header';

function Layout({ children }){
    return (
       <>
            <Header />
            <main class="container mx-auto px-4 py-8">
               { children }
            </main>

       </>
    )
}

export default Layout;