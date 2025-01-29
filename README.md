<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>README - CleanCode</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 20px;
            line-height: 1.6;
        }
        .container {
            max-width: 900px;
            margin: auto;
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        h2 {
            color: #444;
            border-bottom: 2px solid #ddd;
            padding-bottom: 5px;
        }
        pre {
            background: #272822;
            color: #f8f8f2;
            padding: 10px;
            border-radius: 5px;
            overflow-x: auto;
        }
        code {
            font-family: "Courier New", Courier, monospace;
            font-size: 14px;
        }
        ul {
            padding-left: 20px;
        }
        .note {
            background: #fffae6;
            padding: 10px;
            border-left: 5px solid #ffcc00;
        }
    </style>
</head>
<body>

<div class="container">
    <h1>🚀 Projet CleanCode - Gestion de flotte de motos 🏍️</h1>
    <p>Ce projet contient <strong>Backend (NestJS)</strong> et <strong>Frontend (ReactJS)</strong> pour la gestion des motos de Triumph Motorcycles.</p>

    <h2>📌 Installation du projet</h2>

    <h3>1️⃣ Cloner le projet depuis GitHub</h3>
    <pre><code>git clone https://github.com/VOTRE-UTILISATEUR-GITHUB/CleanCode.git
cd CleanCode</code></pre>

    <h3>2️⃣ Installation des dépendances</h3>
    <pre><code>cd backend
npm install
cd ../frontend
npm install</code></pre>

    <h2>📌 Lancement du projet</h2>

    <h3>🚀 1️⃣ Démarrer le backend (NestJS)</h3>
    <pre><code>cd backend
npm run start:dev</code></pre>
    <p>✅ Accès API : <strong>http://localhost:3000</strong></p>

    <h3>🎨 2️⃣ Démarrer le frontend (ReactJS)</h3>
    <pre><code>cd frontend
npm start</code></pre>
    <p>✅ Accès UI : <strong>http://localhost:5173</strong></p>

    <h2>📌 Configuration de l'environnement</h2>
    <p>Créer un fichier <strong>.env</strong> dans <strong>backend/</strong> avec :</p>
    <pre><code>DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_USER=postgres
DATABASE_PASSWORD=root
DATABASE_NAME=postgres</code></pre>

    <h2>📌 Vérification de la base de données PostgreSQL</h2>
    <p>Si la base de données n'existe pas encore, connectez-vous à PostgreSQL et créez-la :</p>
    <pre><code>psql -U postgres
CREATE DATABASE postgres;</code></pre>

    <h2>📌 Stack technique</h2>
    <ul>
        <li><strong>Backend :</strong> NestJS + TypeORM + PostgreSQL</li>
        <li><strong>Frontend :</strong> ReactJS + TypeScript + Material UI</li>
        <li><strong>Architecture :</strong> Clean Architecture (Domain, Application, Infrastructure, Interface)</li>
        <li><strong>Autres :</strong> CQRS, Event-Sourcing (optionnel)</li>
    </ul>

    <h2>📌 Contributions</h2>
    <p>Forkez le projet, créez une branche, puis faites une PR !</p>
</div>

</body>
</html>
