import NavBar from './navbar'
import Footer from './footer'
import Main from './main'

export default function Layout({ children, toggleTheme, icon }) {
    return (
        <>
            <NavBar toggleTheme={toggleTheme} icon={icon}/>
            <Main>{children}</Main>
            <Footer />
        </>
    )
}

