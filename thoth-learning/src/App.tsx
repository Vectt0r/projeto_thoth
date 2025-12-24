import { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Materias from './components/Materias';
import Biblioteca from './components/Biblioteca';
import Exercicios from './components/Exercicios';
import { LogOut } from 'lucide-react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOpen, setIsOpen] = useState(true);
    const [activeTab, setActiveTab] = useState('dashboard');

    const tabNames: Record<string, string> = {
        dashboard: 'Dashboard',
        materias: 'Minhas Matérias',
        biblioteca: 'Biblioteca Digital',
        exercicios: 'Exercícios'
    };

    if (!isLoggedIn) {
        return <Login onLogin={() => setIsLoggedIn(true)} />;
    }

    const renderPage = () => {
        switch (activeTab) {
            case 'dashboard': return <Dashboard />;
            case 'materias': return <Materias />;
            case 'biblioteca': return <Biblioteca />;
            case 'exercicios': return <Exercicios />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="layout">
            {/* Passamos agora tamb�m o setIsOpen para a Sidebar */}
            <Sidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />

            <main className="main-content">
                <header className="main-header">
                    <h1 className="page-title">
                        {tabNames[activeTab] || 'Dashboard'}
                    </h1>

                    <button onClick={() => setIsLoggedIn(false)} className="top-btn logout-btn">
                        <LogOut size={18}/>
                    </button>
                </header>

                {renderPage()}
            </main>
        </div>
    );
}

export default App;