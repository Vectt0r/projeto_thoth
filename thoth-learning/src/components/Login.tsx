import React, { useState } from 'react';
import '../Login.css';
import { GraduationCap } from 'lucide-react';

export default function Login({ onLogin }: { onLogin: () => void }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Aqui no futuro faremos a validação real
        if (email && password) {
            onLogin(); // Simula o login bem-sucedido
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <GraduationCap size={48} color="#6366f1" style={{ margin: '0 auto' }} />
                    <h2>Entrar no Thoth</h2>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label>E-mail</label>
                        <input
                            type="email"
                            placeholder="seu@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group">
                        <label>Senha</label>
                        <input
                            type="password"
                            placeholder="????????"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="login-button">
                        Acessar Plataforma
                    </button>
                </form>

                <div className="login-footer">
                    Não tem uma conta? <a href="#">Criar agora</a>
                </div>
            </div>
        </div>
    );
}