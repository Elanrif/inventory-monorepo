'use client';
import { useEffect, useState } from 'react';

function LocalStorageExample() {
  const [name, setName] = useState('');

  useEffect(() => {
    // Charger la valeur enregistrée si elle existe
    const storedName = localStorage.getItem('name');
    if (storedName) setName(storedName);
  }, []);

  const handleSave = () => {
    localStorage.setItem('name', name);
    alert(`valeur sauvegardée ---> ${localStorage.getItem('name')}`);
  };

  const handleDelete = () => {
    localStorage.removeItem('name');
    setName('');
    alert(`valeur supprimée ---> ${localStorage.getItem('name')}`);
  };

  return (
    <div className='space-y-4 p-4'>
      <h1 className='text-xl font-bold'>🧾 Exemple localStorage</h1>
      <input
        type='text'
        className='mr-2 border p-2'
        placeholder='Ton nom'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleSave} className='bg-blue-500 px-4 py-2 text-white'>
        Sauvegarder
      </button>
      <button
        onClick={handleDelete}
        className='ml-3 bg-red-500 px-4 py-2 text-white'
      >
        Supprimer
      </button>
      <p className='mt-2 truncate'>Valeur stockée : {name?.slice(0, 20)}</p>
    </div>
  );
}

function SessionStorageExample() {
  const [color, setColor] = useState('');

  useEffect(() => {
    const storedColor = sessionStorage.getItem('color');
    if (storedColor) setColor(storedColor);
  }, []);

  const handleSave = () => {
    sessionStorage.setItem('color', color);
    alert(
      `Couleur sauvegardée pour cette session ! ---> ${sessionStorage.getItem('color')}`,
    );
  };

  return (
    <div className='space-y-4 p-4'>
      <h1 className='text-xl font-bold'>🎨 Exemple sessionStorage</h1>
      <input
        type='text'
        className='mr-2 border p-2'
        placeholder='Ta couleur préférée'
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button
        onClick={handleSave}
        className='bg-green-500 px-4 py-2 text-white'
      >
        Sauvegarder
      </button>
      <p className='mt-2'>Valeur stockée : {color}</p>
    </div>
  );
}

function CookieNativeExample() {
  const [lang, setLang] = useState('');
  const [storedLang, setStoredLang] = useState('');

  // Lire le cookie au chargement
  useEffect(() => {
    const value = getCookie('lang');
    if (value) setStoredLang(value);
  }, []);

  // Fonction pour créer un cookie
  const setCookie = (name: string, value: string, days: number) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `${name}=${value};${expires};path=/`;
  };

  // Fonction pour lire un cookie
  const getCookie = (name: string) => {
    const decoded = decodeURIComponent(document.cookie);
    const cookies = decoded.split('; ');
    for (const c of cookies) {
      const [key, val] = c.split('=');
      if (key === name) return val;
    }
    return null;
  };

  // Fonction pour supprimer un cookie
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  };

  const handleSave = () => {
    setCookie('lang', lang, 7); // expire dans 7 jours
    setStoredLang(lang);
    alert(`Langue sauvegardée ! ---> ${getCookie('lang')}`);
  };

  const handleDelete = () => {
    deleteCookie('lang');
    setStoredLang('');
    alert('Langue supprimée !');
  };

  return (
    <div className='space-y-4 p-4'>
      <h1 className='text-xl font-bold'>
        🍪 Exemple Cookie natif (JavaScript)
      </h1>
      <input
        type='text'
        className='mr-2 border p-2'
        placeholder='Langue préférée'
        value={lang}
        onChange={(e) => setLang(e.target.value)}
      />
      <button
        onClick={handleSave}
        className='mr-2 bg-yellow-500 px-4 py-2 text-white'
      >
        Sauvegarder
      </button>
      <button
        onClick={handleDelete}
        className='bg-red-500 px-4 py-2 text-white'
      >
        Supprimer
      </button>

      <p className='mt-2'>Valeur stockée : {storedLang || 'Aucune'}</p>
    </div>
  );
}

export { LocalStorageExample, SessionStorageExample, CookieNativeExample };
