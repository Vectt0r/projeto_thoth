import { LayoutDashboard, BookOpen, FileText, CheckSquare, GraduationCap, ChevronLeft, ChevronRight } from 'lucide-react';

// Atualizamos a interface para aceitar o setIsOpen
interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (v: boolean) => void;
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

export default function Sidebar({ isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) {
    const menuItems = [
        { id: 'dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
        { id: 'materias', icon: <BookOpen size={20} />, label: 'Matérias' },
        { id: 'biblioteca', icon: <FileText size={20} />, label: 'Biblioteca' },
        { id: 'exercicios', icon: <CheckSquare size={20} />, label: 'Exercícios' },
    ];

    return (
        <aside className={`sidebar ${isOpen ? '' : 'closed'}`}>

            <button className="toggle-sidebar-handle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <ChevronLeft size={16}/> : <ChevronRight size={16}/>}
            </button>

            <div className="logo-area">
                <GraduationCap color="#6366f1" size={30}/>
                <h2 className="logo-text">Thoth</h2>
            </div>

            <nav className="nav-links">
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        className={`nav-button ${activeTab === item.id ? 'active' : ''}`}
                        onClick={() => setActiveTab(item.id)}
                    >
                        {/* O ícone serve de âncora visual */}
                        <div className="icon-wrapper" style={{minWidth: '20px'}}>
                            {item.icon}
                        </div>

                        {/* O span nunca deixa de existir, ele apenas fica invisível via CSS */}
                        <span className="nav-label">{item.label}</span>
                    </button>
                ))}
            </nav>
        </aside>
    );
}