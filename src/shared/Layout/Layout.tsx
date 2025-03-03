// Здесь это не надо
import { ReactNode } from "react"
import { Header } from "../Header/Header"
import { Main } from "../Main/Main"
import { Footer } from "../Footer/Footer"
import { Outlet } from "react-router-dom"

// props не используются для Layout, можно удалить интерфейс
interface ILayoutProps {
    children?: ReactNode
}

export function Layout(props: ILayoutProps){
    return (
        <div className="layout">
            <Header></Header>
            <Main>
                <Outlet />
            </Main>
            <Footer></Footer>
        </div>
    )
}