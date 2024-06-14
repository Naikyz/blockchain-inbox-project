# Blockchain First Project

Ce repository contient mon premier projet de formation sur la blockchain. L'objectif de ce projet est de développer et de déployer des contrats intelligents sur Ethereum en utilisant divers outils et technologies populaires dans l'écosystème blockchain.

## Compétences et Outils Explorés

- **Solidity** : Langage de programmation pour les contrats intelligents sur Ethereum.
- **JavaScript** : Utilisé pour les scripts de déploiement et de compilation.
- **Node.js** : Environnement d'exécution pour JavaScript côté serveur.
- **Truffle** : Framework de développement pour Ethereum.
- **Ganache** : Blockchain personnelle pour le développement Ethereum.
- **dotenv** : Gestion des variables d'environnement.
- **Web3.js** : Bibliothèque pour interagir avec un nœud Ethereum.
- **Mocha** : Framework de test pour JavaScript, utilisé pour tester les contrats intelligents.

### Concepts clés

- **Provider** : Un provider dans Web3.js est un composant qui permet à l'application de se connecter à un nœud Ethereum. Ganache est souvent utilisé comme provider local pendant le développement.
- **Interface** : L'interface en Web3.js fait référence aux méthodes et événements disponibles dans un contrat intelligent. Ces méthodes et événements sont définis dans l'ABI (Application Binary Interface).
- **ABI (Application Binary Interface)** : Un JSON qui décrit les méthodes et événements d'un contrat intelligent, permettant à Web3.js d'interagir avec celui-ci.

## Structure du Projet

- **contracts/** : Contient les contrats intelligents en Solidity.
- **deploy.js** : Script pour déployer les contrats intelligents.
- **compile.js** : Script pour compiler les contrats intelligents.
- **test/** : Contient les tests pour les contrats intelligents.
- **.env.example** : Fichier pour les variables d'environnement.
- **package.json** et **package-lock.json** : Fichiers de configuration pour npm.
- **node_modules/** : Répertoire contenant les dépendances installées.

## Prérequis

- Node.js et npm installés.
- Ganache installé pour une blockchain locale.

## Installation et Lancement du Projet

1. Clonez ce repository :

   ```bash
   git clone git@github.com:Naikyz/blockchain-inbox-project.git
   cd blockchain-first-project
   ```

2. Installez les dépendances :

   ```bash
   npm install
   ```

3. Configurez les variables d'environnement :

- Renommez le fichier .env.example en .env et modifiez-le selon vos besoins.

4. Compilez les contrats intelligents :

   ```bash
   node compile.js
   ```

5. Déployez les contrats intelligents :

   ```bash
   node deploy.js

   ```

6. Exécutez les tests :
   ```bash
   npm test
   ```
