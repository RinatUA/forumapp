import { PostContextProvider } from "../context/postContext";
import { AppRoutes } from "../Routes/Routes";

export function App(){
    return (
        <div>
            <PostContextProvider>
                <AppRoutes></AppRoutes>
            </PostContextProvider>
        </div>
    );
};  