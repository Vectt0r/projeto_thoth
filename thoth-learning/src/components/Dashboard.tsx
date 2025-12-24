import { BookOpen } from 'lucide-react';

export default function Dashboard() {
    return (
        <div className="page-content">
            <div className="dashboard-grid">
                <div className="subject-card">
                    <div className="subject-header">
                        <h3>Matemática</h3>
                        <BookOpen size={20} color="#6366f1" />
                    </div>
                    <p style={{ fontSize: '14px', color: '#a1a1aa' }}>Progresso: 65%</p>
                    <div className="progress-container">
                        <div className="progress-bar" style={{ width: '65%' }}></div>
                    </div>
                </div>
                {/* Adicione outros cards aqui se desejar */}
            </div>
        </div>
    );
}