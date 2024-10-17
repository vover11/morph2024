import React, { createContext, useState, useCallback,  useEffect, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [token, setToken] = useState('');
  const [userId, setUserId] = useState('');

  // Проверяем наличие сохраненной аутентификации в localStorage при загрузке страницы
  useEffect(() => {
    const storedUsername = localStorage.getItem('username');
    const storedToken = localStorage.getItem('token');
    const storedUserId = localStorage.getItem('userId');
    if (storedUsername && storedToken && storedUserId) {
      setUsername(storedUsername);
      setToken(storedToken);
      setUserId(storedUserId);
      setIsAuthenticated(true);
    }
  }, []);

  const login = useCallback(async ({ username, token }) => {
    setIsAuthenticated(true);
    setUsername(username);
    setToken(token);
    localStorage.setItem('username', username); // Сохраняем username в localStorage
    localStorage.setItem('token', token); // Сохраняем token в localStorage
    localStorage.setItem('userId', userId); // Сохраняем userId в localStorage
    console.log('Пользователь успешно вошел в систему:', { username, token });

    // Получение данных пользователя и запись их в localStorage
    try {
      const userResponse = await axios.get(`${process.env.REACT_APP_API_URL}/get-user-data`, {
        headers: { Authorization: token }
      });
      const userData = userResponse.data;
      setUserId(userData.userId); // Сохраняем userId
      localStorage.setItem('userId', userData.userId); // Сохраняем userId в localStorage
      localStorage.setItem('userData', JSON.stringify(userData)); // Записываем данные пользователя в localStorage
      console.log('Данные пользователя сохранены в localStorage:', userData);
    } catch (error) {
      console.error('Ошибка получения данных пользователя:', error);
    }
  }, [setIsAuthenticated, setUsername, setToken, setUserId, userId]);

  const logout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setToken('');
    setUserId('');
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    localStorage.removeItem('userId'); // Удаляем userId из localStorage при выходе
    console.log('Пользователь успешно вышел из системы');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, username, token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);