/* =============================================
   API.JS — Service REST (json-server)
   Lance le serveur avec :
     npx json-server --watch db.json --port 3001
   ============================================= */

const API_URL = 'http://localhost:3001/projets';

export const apiService = {
  // GET — charger tous les projets
  async getAll() {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('Serveur non disponible');
    return res.json();
  },

  // POST — ajouter un projet
  async create(projet) {
    const res = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projet),
    });
    if (!res.ok) throw new Error('Erreur lors de la création');
    return res.json();
  },

  // PUT — modifier un projet
  async update(id, projet) {
    const res = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projet),
    });
    if (!res.ok) throw new Error('Erreur lors de la mise à jour');
    return res.json();
  },

  // DELETE — supprimer un projet
  async remove(id) {
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!res.ok) throw new Error('Erreur lors de la suppression');
    return true;
  },
};
