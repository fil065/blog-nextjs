import NavBar from './navbar'
import Footer from './footer'
import Main from './main'

export default function Layout({ children }) {
    return (
        <>
            <NavBar />
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

