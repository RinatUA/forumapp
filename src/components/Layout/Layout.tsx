import { ReactNode } from "react"

interface ILayoutProps {
    children: ReactNode
}

export function Layout(props: ILayoutProps){
    return (
        <div className="layout">{props.children}</div>
    )
}