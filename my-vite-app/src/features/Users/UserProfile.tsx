import React from 'react';
import type { User } from '../../models/user.model';

interface UserProfileProps {
    user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 duration-300">
        
        {/* Banner o Fondo Superior */}
        <div className="h-32 bg-gradient-to-r from-blue-500 to-purple-600"></div>
        
        <div className="relative px-6 pb-8">
          {/* Foto de Perfil */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
            <img
            src={user.img}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-md"
            />
        </div>

          {/* Información del Usuario */}
        <div className="mt-20 text-center">
            <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-500 mt-1">{user.email}</p>
        </div>

          {/* Botones de Acción */}
        <div className="mt-8 flex gap-3">
            <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Contactar
            </button>
            <button className="flex-1 border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Ver Galería
            </button>
        </div>
        </div>
    </div>
    </div>
);
};

export default UserProfile;