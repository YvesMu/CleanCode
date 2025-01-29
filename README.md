<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<div class="container">
    <h1>🚀 Projet CleanCode - Gestion de flotte de motos 🏍️</h1>
    <p>Ce projet contient <strong>Backend (NestJS)</strong> et <strong>Frontend (ReactJS)</strong> pour la gestion des motos de Triumph Motorcycles.</p>
<br>
    <h2>📌 Installation du projet</h2>
    <br>
    <h3>1️⃣ Cloner le projet depuis GitHub</h3>
    <pre><code>git clone https://github.com/VOTRE-UTILISATEUR-GITHUB/CleanCode.git
cd CleanCode</code></pre>
<br>
    <h3>2️⃣ Installation des dépendances</h3>
    <pre><code>cd backend
npm install
cd ../frontend
npm install</code></pre>
<br>
    <h2>📌 Lancement du projet</h2>
<br>
    <h3>🚀 1️⃣ Démarrer le backend (NestJS)</h3>
    <pre><code>cd backend
npm run start:dev</code></pre>
    <p>✅ Accès API : <strong>http://localhost:3000</strong></p>
<br>
    <h3>🎨 2️⃣ Démarrer le frontend (ReactJS)</h3>
    <pre><code>cd frontend
npm start</code></pre>
    <p>✅ Accès UI : <strong>http://localhost:5173</strong></p>
<br>
    <h2>📌 Configuration de l'environnement</h2>
    <p>Créer un fichier <strong>.env</strong> dans <strong>backend/</strong> avec :</p>
    <pre><code>DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=root
DATABASE_NAME=postgres</code></pre>
<br>
    <h2>📌 Vérification de la base de données PostgreSQL</h2>
    <p>Si la base de données n'existe pas encore, connectez-vous à PostgreSQL et créez-la :</p>
    <pre><code>psql -U postgres
CREATE DATABASE postgres;</code></pre>
<br>
    <h2>📌 Stack technique</h2>
    <ul>
        <li><strong>Backend :</strong> NestJS + TypeORM + PostgreSQL</li>
        <li><strong>Frontend :</strong> ReactJS + TypeScript + Material UI</li>
        <li><strong>Architecture :</strong> Clean Architecture (Domain, Application, Infrastructure, Interface)</li>
        <li><strong>Autres :</strong> CQRS, Event-Sourcing (optionnel)</li>
    </ul>
<br>
    <h2>📌 Contributions</h2>
    <p>Forkez le projet, créez une branche, puis faites une PR !</p>
</div>

</body>
</html>
