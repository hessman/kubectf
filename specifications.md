# Spécifications du projet

## Gestion des répository

### Gitea

Le gitlab est à l'extérieur de l'infrastructure. Il Contient :
- Les images de chaques services (Gitea, Harbor, Rbac, KubeDB, Stack Monitoring, WebApp)
- La configuration de Kubernetes
- La configuration d'Ansible

## CI CD

### Drone
Drone est utilisé en complément de Gitea, pour gérer le déploiement de container de services ainsi que les challenges.

## Registry

### Harbor

Stocke les images des conteneurs des challenges

## WebApp

### CTF

**Principe :** Permettre à un utilisateur de s'authentifier, puis d'accèder à des challenges depuis l'interface.

**Fonctionnalités :**
- Authentification
  - Inscription
  - Connexion
  - Déconnexion
- CTF
  - Accès à un challenge
  - Valider le challenge

### Dashboard
- Authentification
  - Inscription
  - Connexion
  - Déconnexion
- Redirection vers les différents Dashboard des services