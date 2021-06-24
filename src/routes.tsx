import { BrowserRouter, Route } from 'react-router-dom';
import Index from './pages/Index';
import Detail from './pages/Detail';

export default function Routes(){
    return (
        <BrowserRouter>
            <Route path='/' exact component={Index} />
            <Route path='/:id' exact component={Detail} />
        </BrowserRouter>
    );
}