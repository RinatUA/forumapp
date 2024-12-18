import { ReactNode } from "react"
interface IMainProps {
    children?: ReactNode
}

export function Main(props: IMainProps) {
    return (
        <div className = "Main">
            {props.children}
            <h1>тут цей во, трошки футер із хедером вирішили об'єднатись тому цей текст їх роз'єднує💔💔💔 (постліст переїхав на /PostList(кнопочку зверху тап😺))</h1>
        </div>
    )
}