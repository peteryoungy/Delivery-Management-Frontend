import CreateOrder from "./CreateOrder";
import { useLoadScript} from '@react-google-maps/api';
import TopBar from "./TopBar";
import { Layout } from "antd";
import Main from "./Main";

const libraries = ['places','drawing','geometry']
function App() {
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: process.env["REACT_APP_GOOGLE_API_KEY"],
        libraries: libraries
    })

    if(!isLoaded){
        return <div>Loading....</div>
    }

    return (

        <Layout>
            <TopBar/>
            <Main/>
        </Layout>

        // <CreateOrder/>
    );
}

export default App;
