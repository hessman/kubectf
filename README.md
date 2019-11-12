# Projet Plateforme CTF "Infrastructure As Code"

## Groupe

| Nom              | Classe | Spécialisation        |
|------------------|--------|---------------------- |
| Amandine CHARLES | B3B    | Sécurité Informatique |
| Lucas ERISSET    | B3B    | Sécurité Informatique |
| Anthony DOMINGUE | B3B    | Sécurité Informatique |

Repo de rendu: https://github.com/hessman/kubectf

## Problématique

Afin de mobiliser nos compétences et de progresser en sécurité informatique nous avons pour objectif la mise en place d'une plateforme de CTF.
Cette plateforme devra répondre aux critères suivant :

* **Scalable**, elle doit pouvoir s'adapter à la charge du CTF.
* **Sécurisée**, chaque challenge sera isolé dans un conteneur et chaque flag sera propre à l'utilisateur (le flag devra être généré aléatoirement à la création du conteneur).

Pour se faire nous la plateforme devra être soutenue par une infrastructure adaptée.
Chaque challenge devra se présenter sous la forme d'une image docker gérée par un registry privé.

L'infrastructure devra être facilement administrable et proposer une solution de monitoring performante afin de remonter les alertes potentielles.

## Solution

![kube](https://tutorials.kevashcraft.com/img/common/k8s-logo.svg)

Mise en place d'un cluster **Kubernetes** sur 2 VPS pour supporter nos services (Plateforme de CTF, GitLab, registry, stack de monitoring...).

Les deux noeuds seront sur des VPS contabo.

Utilisation de **kubernetes-ingress** et **kubedb** pour nos services.

Création d'un registry pour les images docker avec **Harbor**.

Configuration d'une stack de monitoring performante avec : 
* **GrayLog** et/ou **Prometheus** pour récupérer et centraliser les logs et metrics.
* **ElasticSearch** comme base de donnée centrale pour le monitoring.
* **Grafana** comme interface front de consultation.

Utilisation de **rbac-manager** pour la gestion des droits et des utilisateurs et des comptes de service sur le cluster.

Installation d'un **GitLab** avec CI/CD afin de gérer le versionning et le déploiement de nos images de challenge.

Création d'un autre git auto-hébergé pour supporter la configuration de **Kubernetes** et **Ansible**.

